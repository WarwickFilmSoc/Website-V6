'use client';
import Link from 'next/link';
import Image from 'next/image';
import wscLogo from '@/assets/logos/logo-white.png';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-24">
      <div className="absolute left-0 right-0 z-20 p-4 mb-8">
        <nav className="flex items-center justify-center uppercase font-lexend text-lg space-x-6">
          <div className="flex justify-right space-x-6 py-2">
            <Link href="/whats-on" className="border-2 border-white px-2">
              What&apos;s On
            </Link>
            <Link href="/about">About</Link>
            <Link href="/crew">Crew</Link>
          </div>
          <Link href="/" className={pathname === '/' ? 'hidden md:block' : ''}>
            <Image
              src={wscLogo}
              alt="Warwick Student Cinema logo"
              className="h-16 w-16 object-contain"
            />
          </Link>
          <div className="flex justify-left space-x-6 py-2">
            <Link href="/login">Account</Link>
            <Link href="/tickets">Tickets</Link>
            <a href="https://blog.warwick.film" rel="noopener" target="_blank">
              Blog
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
