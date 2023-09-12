import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { redirectWith302 } from '@/lib/routes';

export async function GET() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get('WSC_AUTH');

  if (authCookie?.value) {
    await prisma.webSession.update({
      where: {
        id: authCookie.value,
        expires_at: {
          gt: new Date(),
        },
      },
      data: {
        expires_at: new Date(),
      },
    });
    cookieStore.delete('WSC_AUTH');
  }

  return redirectWith302('/login?state=loggedOut');
}
