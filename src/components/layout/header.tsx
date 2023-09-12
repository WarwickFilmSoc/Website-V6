import Link from 'next/link';
import Image from 'next/image';
import wscLogo from '@/assets/logos/logo-white.png';
import { usePathname, useRouter } from 'next/navigation';
import { TextInput } from 'flowbite-react';
import { FormEvent, useEffect, useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiSearch,
  FiUser,
} from 'react-icons/fi';

type HeaderLink = {
  name: string;
  href: string;
  external?: boolean;
};

const whatsOnLink: HeaderLink = { name: "What's On", href: '/whats-on' };
const scheduleLink: HeaderLink = { name: 'Schedule', href: '/schedule' };

const headerLinksWhatsOn: HeaderLink[] = [
  whatsOnLink,
  scheduleLink,
  { name: 'News', href: '/news' },
  { name: 'Film Search', href: '/films' },
  { name: 'Publicity', href: '/publicity' },
  { name: 'Suggestions', href: '/suggestions' },
];

const headerLinksSchedule: HeaderLink[] = [
  scheduleLink,
  whatsOnLink,
  { name: 'News', href: '/news' },
  { name: 'Film Search', href: '/films' },
  { name: 'Publicity', href: '/publicity' },
  { name: 'Suggestions', href: '/suggestions' },
];

const headerLinksAbout: HeaderLink[] = [
  { name: 'About', href: '/about' },
  { name: 'The Executive', href: '/executive' },
  { name: 'Tech Specs', href: '/technical-specifications' },
  { name: 'Our History', href: '/history' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Constitution', href: '/constitution' },
  { name: 'Terms', href: '/terms-and-conditions' },
];

const headerLinksCrew: HeaderLink[] = [
  { name: 'Crew', href: '/crew' },
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
];

function HeaderLink({
  dropdownLinks,
  className,
  mainLinkClass,
}: {
  dropdownLinks: HeaderLink[];
  className?: string;
  mainLinkClass?: string;
}) {
  const pathname = usePathname();
  const mainLink = dropdownLinks[0];

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
      {dropdownLinks && dropdownLinks.length > 1 && (
        <div className="max-h-0 group-hover:max-h-96 group-hover:p-2 group-hover:pt-4 absolute opacity-50 group-hover:opacity-100 left-1/2 -translate-x-1/2 transition-[opacity,max-height,padding] duration-100 overflow-hidden content-border">
          <div className="hidden sm:block absolute bg-white h-4 w-4 rotate-45 left-1/2 -ml-2 mr-4 top-3 rounded-sm" />
          <div className="bg-modal relative px-8 py-2 border-white border-2 text-center flex flex-col gap-2 w-max max-w-full overflow-hidden max-h-0 group-hover:max-h-96 transition-[max-height] duration-300 ease-in-out">
            {dropdownLinks.slice(1).map((link) =>
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
                    pathname.startsWith(link.href) ? 'font-black' : ''
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

function MobileLink({
  dropdownLinks,
  closeDropdownMenu,
}: {
  dropdownLinks: HeaderLink[];
  closeDropdownMenu: () => void;
}) {
  const pathname = usePathname();
  const mainLink = dropdownLinks[0];

  return (
    <div className={dropdownLinks.length > 1 ? 'mb-8' : 'mb-2'}>
      <Link
        href={mainLink.href}
        className={`block uppercase text-lg font-lexend ${
          pathname === mainLink.href ? 'font-black' : 'font-bold'
        }`}
        onClick={closeDropdownMenu}
      >
        {mainLink.name}
      </Link>
      {dropdownLinks &&
        dropdownLinks.length > 1 &&
        dropdownLinks.slice(1).map((link) => {
          if (link.external)
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noopener"
                key={link.href}
                className="block mb-0.5"
                onClick={closeDropdownMenu}
              >
                {link.name}

                <FiExternalLink className="mb-1 ml-2 inline" />
              </a>
            );

          return (
            <Link
              href={link.href}
              key={link.href}
              className={`block mb-0.5 ${
                pathname.startsWith(link.href) ? 'font-black' : ''
              }`}
              onClick={closeDropdownMenu}
            >
              {link.name}
            </Link>
          );
        })}
    </div>
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

export default function Header({
  showHeaderDropdownMenu,
  setShowHeaderDropdownMenu,
}: {
  showHeaderDropdownMenu: boolean;
  setShowHeaderDropdownMenu: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const [whatsOnDefault, setWhatsOnDefault] = useState(false);

  const hideDropdownMenu = () => setShowHeaderDropdownMenu(false);

  useEffect(() => {
    if (
      pathname.startsWith(scheduleLink.href) ||
      pathname.startsWith(whatsOnLink.href)
    ) {
      if (pathname.startsWith(whatsOnLink.href)) {
        if (!localStorage.getItem('whatsOnDefault'))
          localStorage.setItem('whatsOnDefault', '1');
        setWhatsOnDefault(true);
        return;
      } else if (localStorage.getItem('whatsOnDefault'))
        localStorage.removeItem('whatsOnDefault');
      setWhatsOnDefault(false);
      return;
    }

    setWhatsOnDefault(!!localStorage.getItem('whatsOnDefault'));
  }, [pathname]);

  return (
    <header className="h-24">
      <div className="absolute left-0 right-0 z-20 p-4 mb-8">
        <nav className="flex items-center justify-center uppercase font-lexend text-lg gap-x-4 relative h-16">
          <div className="absolute left-0 md:hidden pl-2">
            <button
              className="xs:hidden flex items-center justify-center text-lg bg-primary p-2 rounded-sm hover:bg-primary-darker"
              onClick={() => setShowHeaderDropdownMenu(true)}
            >
              <FiChevronDown />
            </button>
            <Link
              href="/account"
              className="hidden xs:block flex items-center justify-center text-lg bg-primary p-2 rounded-sm hover:bg-primary-darker"
            >
              <FiUser />
            </Link>
          </div>
          <div
            className={`justify-center md:justify-end gap-x-4 py-2 items-center hidden w-3/6 ${
              pathname === '/' ? '2xs:flex' : 'xs:flex xs:justify-end'
            }`}
          >
            <HeaderLink
              mainLinkClass="border-white px-2 border-2"
              dropdownLinks={
                whatsOnDefault ? headerLinksWhatsOn : headerLinksSchedule
              }
            />
            <HeaderLink
              dropdownLinks={headerLinksAbout}
              className={pathname === '/' ? '' : 'hidden md:block'}
            />
            <HeaderLink
              dropdownLinks={headerLinksCrew}
              className={pathname === '/' ? '' : 'hidden md:block'}
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
            className={`justify-start gap-x-4 items-center hidden ${
              pathname === '/' ? 'md:flex' : 'xs:flex'
            } w-3/6`}
          >
            <HeaderLink
              dropdownLinks={headerLinksAbout}
              className="hidden 2xs:block md:hidden"
            />
            <HeaderLink
              dropdownLinks={headerLinksCrew}
              className="hidden 2xs:block md:hidden"
            />
            <HeaderLink
              dropdownLinks={[{ name: 'Account', href: '/account' }]}
              className="hidden md:block"
            />
            <HeaderLink
              dropdownLinks={[{ name: 'Tickets', href: '/tickets' }]}
              className="hidden md:block"
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
      <nav
        className={`xs:hidden fixed z-50 top-0 left-0 right-0 bg-primary-background overflow-hidden transition-[height] duration-200 ease-in-out ${
          showHeaderDropdownMenu ? 'h-full' : 'h-0'
        }`}
      >
        <div className="m-4 flex flex-col items-center gap-4">
          <button
            className="absolute left-6 top-8 flex items-center justify-center text-lg bg-primary p-2 rounded-sm hover:bg-primary-darker"
            onClick={hideDropdownMenu}
          >
            <FiChevronUp />
          </button>
          <Link href="/" onClick={hideDropdownMenu}>
            <Image
              src={wscLogo}
              alt="Warwick Student Cinema logo"
              className="h-16 w-16 object-contain drop-shadow-md bg-transparent"
              priority
            />
          </Link>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div>
              <MobileLink
                dropdownLinks={
                  whatsOnDefault ? headerLinksWhatsOn : headerLinksSchedule
                }
                closeDropdownMenu={hideDropdownMenu}
              />
              <MobileLink
                dropdownLinks={headerLinksCrew}
                closeDropdownMenu={hideDropdownMenu}
              />
            </div>
            <div className="text-right">
              <MobileLink
                dropdownLinks={headerLinksAbout}
                closeDropdownMenu={hideDropdownMenu}
              />
              <MobileLink
                dropdownLinks={[{ name: 'Account', href: '/account' }]}
                closeDropdownMenu={hideDropdownMenu}
              />
              <MobileLink
                dropdownLinks={[{ name: 'Tickets', href: '/tickets' }]}
                closeDropdownMenu={hideDropdownMenu}
              />
              <a
                href="https://blog.warwick.film"
                rel="noopener"
                target="_blank"
                className="block uppercase text-lg font-lexend font-bold"
                onClick={hideDropdownMenu}
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
