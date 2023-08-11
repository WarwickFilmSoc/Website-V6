import Link from 'next/link';

export default function It() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">IT Team</h1>
      <p className="mb-2">Page Content</p>
    </main>
  );
}
