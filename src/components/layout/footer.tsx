import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import letterboxdLogo from '@/assets/logos/social/letterboxd.svg';
import instagramLogo from '@/assets/logos/social/instagram.svg';
import xLogo from '@/assets/logos/social/x.svg';
import facebookLogo from '@/assets/logos/social/facebook.png';
import tikTokLogo from '@/assets/logos/social/tiktok.svg';

import warwickSuLogo from '@/assets/logos/partners/warwick-su.svg';
import cinemaForAllLogo from '@/assets/logos/partners/cinema-for-all.png';
import filmHubMidlandsLogo from '@/assets/logos/partners/film-hub-midlands.svg';

const leftFooterLinks: FooterLink[][] = [
  [{ name: 'Home', href: '/', primary: true }],
  [
    { name: "What's On", href: '/whats-on', primary: true },
    { name: 'Schedule', href: '/schedule' },
    { name: 'News', href: '/news' },
    { name: 'Film Search', href: '/films' },
    { name: 'Publicity', href: '/publicity' },
    { name: 'Suggestions', href: '/suggestions' },
  ],
  [
    { name: 'About Us', href: '/about', primary: true },
    { name: 'The Executive', href: '/executive' },
    { name: 'Tech Specs', href: '/technical-specifications' },
    { name: 'Our History', href: '/history' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Constitution', href: '/constitution' },
    { name: 'Terms', href: '/terms-and-conditions' },
    { name: 'Privacy & Data', href: '/privacy' },
  ],
];
const rightFooterLinks: FooterLink[][] = [
  [
    { name: 'Crew', href: '/crew', primary: true },
    { name: 'Meeting Minutes', href: '/crew/meeting-minutes' },
    { name: 'Front of House Team', href: '/crew/front-of-house' },
    { name: 'Projection Team', href: '/crew/projection' },
    { name: 'Publicity Team', href: '/crew/publicity' },
    { name: 'IT Team', href: '/crew/it' },
    { name: 'Marketing Team', href: '/crew/marketing' },
  ],
  [
    {
      name: 'Mise En Scène Blog',
      href: 'https://blog.warwick.film',
      external: true,
      primary: true,
    },
    {
      name: 'Forums',
      href: 'https://discourse.warwick.film/',
      external: true,
      primary: true,
    },
    {
      name: 'Warwick SU',
      href: 'https://www.warwicksu.com/societies-sports/societies/filmsoc/',
      external: true,
      primary: true,
    },
    {
      name: 'Buy Tickets',
      href: '/tickets',
      primary: true,
    },
  ],
];

const year = new Date().getUTCFullYear();

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export function FooterLinkGroup({
  footerLinks,
}: {
  footerLinks: FooterLink[];
}) {
  return (
    <div>
      {footerLinks.map((link) => {
        if (link.external)
          return (
            <a
              href={link.href}
              target="noopener"
              key={link.name}
              className={`block ${
                link.primary ? 'font-bold mt-2 mb-1' : 'mb-0.5'
              }`}
            >
              {link.name}

              <FiExternalLink className="mb-1 ml-2 inline" />
            </a>
          );
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`block ${
              link.primary ? 'font-bold mt-2 mb-1' : 'mb-0.5'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className="mt-auto" />
      <footer className="text-center bg-dark p-4 mt-24 justify-self-end">
        <div className="max-w-2xl mx-auto">
          <div className="mt-4 flex justify-center items-center gap-x-4">
            <a
              href="https://letterboxd.com/wscpog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={letterboxdLogo}
                alt="Letterboxd Logo"
                height={27}
                width={27}
                className="bg-transparent"
              />
            </a>
            <a
              href="https://www.instagram.com/studentcinemawarwick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramLogo}
                alt="Instagram Logo"
                height={26}
                width={26}
                className="bg-transparent"
              />
            </a>
            <a
              href="https://twitter.com/WSCfilmsoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={xLogo}
                alt="X Logo"
                height={23}
                width={23}
                className="bg-transparent"
              />
            </a>
            <a
              href="https://www.facebook.com/wscfilmsoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebookLogo}
                alt="Facebook Logo"
                height={30}
                width={30}
                className="bg-transparent"
              />
            </a>
            <a
              href="https://www.tiktok.com/@studentcinemawarwick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={tikTokLogo}
                alt="TikTok Logo"
                height={23}
                width={23}
                className="bg-transparent"
              />
            </a>
          </div>
          <nav className="flex justify-center mt-6 gap-x-4 sm:gap-x-2 font-light text-sm items-start">
            <div className="flex justify-center sm:gap-x-2 xs:w-44 sm:w-auto gap-y-2 sm:gap-y-0 flex-col sm:flex-row">
              {leftFooterLinks.map((footerLinksGroup, i) => (
                <FooterLinkGroup footerLinks={footerLinksGroup} key={i} />
              ))}
            </div>
            <div className="flex justify-center sm:gap-x-2 xs:w-44 sm:w-auto gap-y-2 sm:gap-y-0 flex-col sm:flex-row">
              {rightFooterLinks.map((footerLinksGroup, i) => (
                <FooterLinkGroup footerLinks={footerLinksGroup} key={i} />
              ))}
            </div>
          </nav>
          <div className="mt-12 mb-4">
            <div className="flex items-center justify-center gap-x-4">
              <a
                href="https://cinemaforall.org.uk/advice-and-support/young-film-programmers-network/young-people-in-community-cinema-warwick-student-cinema/"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={cinemaForAllLogo}
                  alt="Cinema For All Logo"
                  height={40}
                  className="bg-transparent"
                />
              </a>
              <a
                href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={warwickSuLogo}
                  alt="Warwick SU Logo"
                  height={40}
                  className="bg-transparent"
                />
              </a>
              <a
                href="https://filmhubmidlands.org/"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={filmHubMidlandsLogo}
                  alt="Film Hub Midlands Logo"
                  height={40}
                  className="bg-transparent"
                />
              </a>
            </div>
            <div className="text-xs mt-2 font-light">
              Copyright &copy; 2001-{year} Warwick Student Cinema, all rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
