import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History',
  description: '',
};

export default function OurHistory() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about">About Us</Link>
      </p>
      <h1 className="mb-1">Our History</h1>
      <p className="mb-2">
        Warwick Student Cinema is a student run, professional standard cinema
        located in the University of Warwick L3 Lecture Theatre.
      </p>
      <p className="mb-2">
        For the past 50 years, we have provided a top-quality cinema experience.
      </p>
      <h2 className="mt-4">Tickets</h2>
      <p className="mb-2">Buy tickets pls.</p>
      <h2 className="mt-4">Warwick Film Society</h2>
      <p className="mb-2">Members are cool.</p>
      <h2 className="mt-4">Getting Involved</h2>
      <p className="mb-2">Once you&apos;re a member, you can join crew.</p>
    </main>
  );
}
