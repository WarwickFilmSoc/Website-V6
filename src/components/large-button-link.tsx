import Link from 'next/link';
import React from 'react';

export default function LargeButtonLink({
  children,
  href,
  className,
  prefetch,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  prefetch?: boolean;
}) {
  return (
    <Link
      prefetch={prefetch}
      href={href}
      className={`inline-block uppercase text-xl bg-primary px-6 py-1.5 rounded-md font-lexend font-bold hover:scale-105 hover:bg-primary-darker ${className}`}
    >
      {children}
    </Link>
  );
}
