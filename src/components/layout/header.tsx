import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 mb-8">
      <nav className="flex items-center justify-center uppercase font-lexend text-lg space-x-6">
        <Link href="/whats-on" className="border-2 border-white px-2">
          What&apos;s On
        </Link>
        <Link href="/about">About</Link>
        <a href="https://blog.warwick.film" rel="noopener" target="_blank">
          Blog
        </a>
        <Link href="/crew">Crew</Link>
        <a
          href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
          rel="noopener"
          target="_blank"
        >
          Tickets
        </a>
      </nav>
    </header>
  );
}
