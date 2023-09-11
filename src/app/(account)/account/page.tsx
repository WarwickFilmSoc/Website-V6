import { getAuthedUser, isAuthedUserCrew } from '@/lib/auth';
import LargeButtonLink from '@/components/large-button-link';
import Link from 'next/link';
import ShowsWatched from '@/app/(account)/account/shows-watched';
import { Suspense } from 'react';
import FilmLayout from '@/components/films/film-layout';
import { Metadata } from 'next';

export const revalidate = 0; // Revalidate every 10m
export const metadata: Metadata = {
  title: 'Your Account',
  description: 'View your account and past screening history',
};

export default async function Account() {
  const user = await getAuthedUser();
  if (!user) return null;

  const isCrew = isAuthedUserCrew(user);

  return (
    <main>
      <h1 className="mb-1">Your Account</h1>
      <p className="mb-2">Welcome, {user.person.forename}!</p>

      {isCrew ? (
        <p>
          Looking for crew resources or the films you&apos;ve worked? Find them
          on&nbsp;
          <a
            href="https://crew.warwick.film"
            className="text-accent"
            target="_blank"
            rel="noopener"
          >
            crew.warwick.film
          </a>
          .
        </p>
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

      <h2 className="mt-8">Shows Watched</h2>
      <Suspense fallback={<FilmLayout loading />}>
        <ShowsWatched personId={user.pid} />
      </Suspense>
    </main>
  );
}
