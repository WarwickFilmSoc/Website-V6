import Link from 'next/link';
import FilmSearch from '@/app/(whats-on)/films/film-search';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Film Search',
  description:
    "Browse the 4000+ films that we've screened over the past 50 years, and read the reviews that we've written.",
};

export default function Films() {
  return (
    <main>
      <h1 className="mb-1">Film Search</h1>
      <p className="mb-6">
        Looking for a film in particular? Search for it here! You can also find
        all our reviews for previously-screened films here too, or find our
        previous schedules on the{' '}
        <Link href="/schedule" className="text-accent">
          schedule page
        </Link>
        .
      </p>

      <Suspense>
        <FilmSearch />
      </Suspense>
    </main>
  );
}
