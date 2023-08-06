import Link from 'next/link';
import React from 'react';

export default function LargeButtonLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-block uppercase text-xl bg-primary px-6 py-1.5 rounded-md font-lexend font-bold"
    >
      {children}
    </Link>
  );
}
