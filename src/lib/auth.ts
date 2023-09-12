import 'server-only';

import { WebSession, Prisma, MembershipType } from '@prisma/client';
import prisma from '@/lib/prisma';
import { randomBytes } from 'crypto';
import dayjs from 'dayjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export function createSession(
  webUserId: number,
  remember: boolean,
): Promise<WebSession> {
  const id = randomBytes(64).toString('hex');
  return prisma.webSession.create({
    data: {
      id,
      web_user_id: webUserId,
      created_at: new Date(),
      expires_at: dayjs()
        .add(remember ? 30 : 1, 'day')
        .toDate(),
    },
  });
}

export async function getAuthedUser(redirectIfUnauthenticated: boolean = true) {
  const cookieStore = cookies();
  const authCookie = cookieStore.get('WSC_AUTH');

  if (authCookie?.value) {
    const session = await prisma.webSession.findFirst({
      where: {
        id: authCookie.value,
        expires_at: {
          gt: new Date(),
        },
      },
      include: {
        web_user: {
          include: {
            person: {
              include: {
                memberships: {
                  where: {
                    OR: [
                      {
                        expires: null,
                      },
                      {
                        expires: {
                          gt: new Date(),
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    });
    if (session) return session.web_user;
  }

  if (redirectIfUnauthenticated) return redirect('/login');
  return null;
}
type AuthedUser = Prisma.PromiseReturnType<typeof getAuthedUser>;

export function isAuthedUserCrew(authedUser: AuthedUser): boolean {
  return !!authedUser?.person.memberships.some(
    (membership) =>
      membership.membership_type === MembershipType.CREW ||
      membership.membership_type === MembershipType.PROVISIONAL_CREW,
  );
}
