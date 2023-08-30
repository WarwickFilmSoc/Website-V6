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
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/whats-on">What&apos;s On</Link>
      </p>
      <h1 className="mb-1">Film Search</h1>

      <Suspense>
        <FilmSearch />
      </Suspense>
    </main>
  );
}
