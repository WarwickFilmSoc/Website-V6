import Link from 'next/link';
import FilmSearch from '@/app/(whats-on)/film-archive/film-search';

export default function FilmArchive() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/whats-on">What&apos;s On</Link>
      </p>
      <h1 className="mb-1">Film Archive</h1>

      <FilmSearch />
    </main>
  );
}
