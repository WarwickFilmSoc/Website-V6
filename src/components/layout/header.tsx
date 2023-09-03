'use client';
import Link from 'next/link';
import Image from 'next/image';
import wscLogo from '@/assets/logos/logo-white.png';
import { usePathname, useRouter } from 'next/navigation';
import { TextInput } from 'flowbite-react';
import { FormEvent, useState } from 'react';
import { FiExternalLink, FiSearch } from 'react-icons/fi';

type HeaderLink = {
  name: string;
  href: string;
  external?: boolean;
};

function HeaderLink({
  mainLink,
  dropdownLinks,
  className,
  mainLinkClass,
}: {
  mainLink: HeaderLink;
  dropdownLinks?: HeaderLink[];
  className?: string;
  mainLinkClass?: string;
}) {
  const pathname = usePathname();

  return (
    <span className={`sm:relative group ${className}`}>
      <Link
        href={mainLink.href}
        className={`hover:scale-105 block drop-shadow-md ${mainLinkClass} ${
          pathname === mainLink.href ? 'font-black' : ''
        }`}
      >
        {mainLink.name}
      </Link>
      {dropdownLinks && dropdownLinks.length > 0 && (
        <div className="max-h-0 group-hover:max-h-96 group-hover:p-2 group-hover:pt-4 absolute opacity-50 group-hover:opacity-100 left-1/2 -translate-x-1/2 transition-[opacity,max-height,padding] duration-100 overflow-hidden content-border">
          <div className="hidden sm:block absolute bg-white h-4 w-4 rotate-45 left-1/2 -ml-2 mr-4 top-3 rounded-sm" />
          <div className="bg-modal relative px-8 py-2 border-white border-2 text-center flex flex-col gap-2 w-max max-w-full overflow-hidden max-h-0 group-hover:max-h-96 transition-[max-height] duration-300 ease-in-out">
            {dropdownLinks.map((link) =>
              link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  key={link.href}
                  className="hover:scale-105 block"
                >
                  {link.name}

                  <FiExternalLink className="mb-1 ml-2 inline" />
                </a>
              ) : (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`hover:scale-105 block ${
                    pathname === link.href ? 'font-black' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </span>
  );
}

function FilmSearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search)
      router.push(`/films?search=${encodeURIComponent(search.trim())}`);
    else router.push(`/films`);

    return false;
  };

  return (
    <div className="absolute right-0">
      <form onSubmit={onSubmit} className="w-40 xl:w-72 hidden lg:block">
        <TextInput
          rightIcon={FiSearch}
          placeholder="Search a film"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Link
        href="/films"
        className="lg:hidden flex items-center justify-center text-lg bg-primary p-2 rounded-sm mr-2 hover:bg-primary-darker"
      >
        <FiSearch />
      </Link>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-24">
      <div className="absolute left-0 right-0 z-20 p-4 mb-8">
        <nav className="flex items-center justify-center uppercase font-lexend text-lg gap-x-4 relative">
          <div
            className={`justify-right gap-x-4 sm:gap-x-2 md:gap-x-4 py-2 items-center ${
              pathname === '/' ? 'flex' : 'hidden'
            } 2xs:flex`}
          >
            <HeaderLink
              mainLinkClass="border-white px-2 border-2"
              mainLink={{ name: "What's On", href: '/whats-on' }}
              dropdownLinks={[
                { name: 'Film Search', href: '/films' },
                { name: 'Publicity', href: '/publicity' },
                { name: 'Suggestions', href: '/suggestions' },
              ]}
            />
            <HeaderLink
              mainLink={{ name: 'About', href: '/about' }}
              dropdownLinks={[
                { name: 'The Executive', href: '/executive' },
                { name: 'Tech Specs', href: '/technical-specifications' },
                { name: 'Our History', href: '/history' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Constitution', href: '/constitution' },
                { name: 'Terms', href: '/terms-and-conditions' },
              ]}
              className={pathname === '/' ? '' : 'hidden sm:block'}
            />
            <HeaderLink
              mainLink={{ name: 'Crew', href: '/crew' }}
              dropdownLinks={[
                { name: 'Meeting Minutes', href: '/crew/meeting-minutes' },
                { name: 'Front of House Team', href: '/crew/front-of-house' },
                { name: 'Projection Team', href: '/crew/projection' },
                { name: 'Publicity Team', href: '/crew/publicity' },
                { name: 'IT Team', href: '/crew/it' },
                { name: 'Marketing Team', href: '/crew/marketing' },
                {
                  name: 'Forums',
                  href: 'https://discourse.warwick.film',
                  external: true,
                },
              ]}
              className={pathname === '/' ? '' : 'hidden sm:block'}
            />
          </div>
          <Link href="/" className={pathname === '/' ? 'hidden md:block' : ''}>
            <Image
              src={wscLogo}
              alt="Warwick Student Cinema logo"
              className="h-16 w-16 object-contain drop-shadow-md bg-transparent"
              priority
            />
          </Link>
          <div
            className={`justify-left gap-x-4 sm:gap-x-2 md:gap-x-4 items-center hidden ${
              pathname === '/' ? 'md:flex' : '2xs:flex'
            }`}
          >
            <HeaderLink
              mainLink={{ name: 'About', href: '/about' }}
              dropdownLinks={[
                { name: 'The Executive', href: '/executive' },
                { name: 'Tech Specs', href: '/technical-specifications' },
                { name: 'Our History', href: '/history' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Constitution', href: '/constitution' },
                { name: 'Terms', href: '/terms-and-conditions' },
              ]}
              className="hidden 2xs:block sm:hidden"
            />
            <HeaderLink
              mainLink={{ name: 'Crew', href: '/crew' }}
              dropdownLinks={[
                { name: 'Meeting Minutes', href: '/crew/meeting-minutes' },
                { name: 'Front of House Team', href: '/crew/front-of-house' },
                { name: 'Projection Team', href: '/crew/projection' },
                { name: 'Publicity Team', href: '/crew/publicity' },
                { name: 'IT Team', href: '/crew/it' },
                { name: 'Marketing Team', href: '/crew/marketing' },
                {
                  name: 'Forums',
                  href: 'https://discourse.warwick.film',
                  external: true,
                },
              ]}
              className="hidden 2xs:block sm:hidden"
            />
            <HeaderLink
              mainLink={{ name: 'Account', href: '/account' }}
              className="hidden sm:block"
            />
            <HeaderLink
              mainLink={{ name: 'Tickets', href: '/tickets' }}
              className="hidden sm:block"
            />
            <a
              href="https://blog.warwick.film"
              rel="noopener"
              target="_blank"
              className="hidden md:block hover:scale-105 drop-shadow-md"
            >
              Blog
            </a>
          </div>
          <FilmSearchBar />
        </nav>
      </div>
    </header>
  );
}
