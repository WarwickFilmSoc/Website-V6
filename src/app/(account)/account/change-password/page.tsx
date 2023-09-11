import { Metadata } from 'next';
import { getAuthedUser } from '@/lib/auth';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Change Password',
};

export default async function ChangePassword() {
  const user = await getAuthedUser();
  if (!user) return null;

  return (
    <main>
      <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
        <Link href="/account">Your Account</Link>
      </span>
      <h1 className="mb-1">Change Account Password</h1>
      <p>
        You are changing the Warwick Student Cinema web account password
        for&nbsp;
        {user.person.forename} {user.person.surname}.
      </p>
    </main>
  );
}
