import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicity',
  description: '',
};

export default function Suggestions() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/whats-on">What&apos;s On</Link>
      </p>
      <h1 className="mb-1">Suggestions</h1>
      <p className="mb-2">Page Content</p>
    </main>
  );
}
