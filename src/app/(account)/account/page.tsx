import { getAuthedUser, isAuthedUserCrew } from '@/lib/auth';
import LargeButtonLink from '@/components/large-button-link';
import Link from 'next/link';

export default async function Account() {
  const user = await getAuthedUser();
  if (!user) return null;

  const isCrew = isAuthedUserCrew(user);

  return (
    <main>
      <h1 className="mb-1">Your Account</h1>
      <p>Hello, {user.person.forename}</p>
      {isCrew ? (
        <p>You are currently crew!</p>
      ) : (
        <p>
          You are not currently crew. Find out more about crew{' '}
          <Link href="/crew" className="text-accent">
            here
          </Link>
          .
        </p>
      )}

      <LargeButtonLink href="/logout" className="mt-4">
        Logout
      </LargeButtonLink>
    </main>
  );
}
