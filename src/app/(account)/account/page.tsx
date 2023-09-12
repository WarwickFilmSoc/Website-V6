import { getAuthedUser, isAuthedUserCrew } from '@/lib/auth';
import LargeButtonLink from '@/components/large-button-link';
import Link from 'next/link';
import ShowsWatched from '@/app/(account)/account/shows-watched';
import { Suspense } from 'react';
import FilmLayout from '@/components/films/film-layout';
import { Metadata } from 'next';

export const revalidate = 0; // Don't revalidate
export const metadata: Metadata = {
  title: 'Your Account',
  description: 'View your account and past ticket history',
};

export default async function Account() {
  const user = await getAuthedUser();
  if (!user) return null;

  const isCrew = isAuthedUserCrew(user);

  return (
    <main>
      <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
        <div>
          <h1>Your Account</h1>

          <p className="mb-2">Welcome, {user.person.forename}!</p>

          {isCrew ? (
            <p>
              Looking for crew resources or the films you&apos;ve worked? Find
              them on&nbsp;
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

          <LargeButtonLink href="/logout" className="mt-4" prefetch={false}>
            Logout
          </LargeButtonLink>
        </div>

        <div className="lg:ml-auto lg:text-right flex-shrink-0">
          <h2>Account Details</h2>
          <table className="mt-1 lg:ml-auto table-style">
            <tbody>
              <tr>
                <th>Name</th>
                <td className="text-left">
                  {user.person.forename} {user.person.surname}
                </td>
              </tr>
              <tr>
                <th>Email (From SU)</th>
                <td className="text-left">{user.person.email}</td>
              </tr>
              <tr>
                <th>Web Username</th>
                <td className="text-left">{user.login}</td>
              </tr>
              <tr>
                <th>Web Password</th>
                <td className="text-left">
                  <Link href="/account/change-password" className="text-accent">
                    Change
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="mt-8">Mailing Preferences</h2>
      <p>
        The e-mail address given here will be used to send out Warwick Student
        Cinema mailings with details of showings and special events. We do not
        share your email address with third parties.
      </p>
      {user.person.autoupdate ? (
        <div className="mt-2">
          Your mailing preferences are automatically provided by the Student
          Union. To change your email address, please do so on the&nbsp;
          <a
            href="https://www.warwicksu.com/contactdetails/"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            Student Union&apos;s website
          </a>
          .
        </div>
      ) : (
        <div className="mt-2">
          Please update your mailing preferences&nbsp;
          <a
            href="https://warwick.film/contacts/edit"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            here
          </a>
          .
        </div>
      )}

      <h2 className="mt-8">Shows Watched</h2>
      <Suspense fallback={<FilmLayout loading />}>
        <ShowsWatched personId={user.pid} />
      </Suspense>
    </main>
  );
}
