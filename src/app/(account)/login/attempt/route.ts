import { Request } from 'next/dist/compiled/@edge-runtime/primitives';
import prisma from '@/lib/prisma';
import { createHash } from 'crypto';
import { cookies } from 'next/headers';
import { redirectWith302 } from '@/lib/routes';
import { createSession } from '@/lib/auth';

function authFailed(request: Request, crewPage: boolean) {
  return redirectWith302(
    new URL(
      `${crewPage ? '/crew' : '/login'}?state=invalid`,
      request.url,
    ).toString(),
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const remember = formData.get('remember') === 'on';
  const crewPage = formData.get('crewPage') === 'crew';

  if (!username || !password) return authFailed(request, crewPage);

  const webUser = await prisma.webUser.findFirst({
    where: {
      login: username,
    },
    select: {
      web_id: true,
      login: true,
      seed: true,
      hash: true,
    },
  });
  if (!webUser) {
    return authFailed(request, crewPage);
  }

  const hash = createHash('md5')
    .update(`${webUser.seed.toLowerCase()}+${password}`)
    .digest('hex');
  if (webUser.hash !== hash) return authFailed(request, crewPage);

  const session = await createSession(webUser.web_id, remember);

  const cookieStore = cookies();
  cookieStore.set('wsc_auth', session.id, {
    expires: remember ? session.expires_at : 0,
    httpOnly: true,
    secure: request.url.startsWith('https'),
  });

  return redirectWith302(
    new URL(crewPage ? '/crew' : '/account', request.url).toString(),
  );
}
