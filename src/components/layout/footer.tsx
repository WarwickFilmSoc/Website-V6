import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

import letterboxdLogo from '@/assets/logos/social/letterboxd.svg';
import instagramLogo from '@/assets/logos/social/instagram.svg';
import xLogo from '@/assets/logos/social/x.svg';
import facebookLogo from '@/assets/logos/social/facebook.png';
import tikTokLogo from '@/assets/logos/social/tiktok.svg';

import warwickSuLogo from '@/assets/logos/partners/warwick-su.png';
import cinemaForAllLogo from '@/assets/logos/partners/cinema-for-all.png';
import wscBlueHeader from '@/assets/logos/wsc-header-blue.png';

const footerLinks: FooterLink[][] = [
  [{ name: 'Home', href: '/', primary: true }],
  [
    { name: "What's On", href: '/whats-on', primary: true },
    { name: 'Film Reviews', href: '/film-reviews' },
    { name: 'Publicity', href: '/publicity' },
    { name: 'Suggestions', href: '/suggestions' },
  ],
  [
    { name: 'About Us', href: '/about', primary: true },
    { name: 'The Executive', href: '/executive' },
    { name: 'Tech Specs', href: '/technical-specifications' },
    { name: 'Our History', href: '/history' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Constitution', href: '/constitution' },
    { name: 'Terms', href: '/terms-and-conditions' },
  ],
  [
    { name: 'Crew', href: '/crew', primary: true },
    { name: 'Meeting Minutes', href: '/meeting-minutes' },
    { name: 'Front of House Team', href: '/crew/front-of-house' },
    { name: 'Projection Team', href: '/crew/projection' },
    { name: 'Publicity Team', href: '/crew/publicity' },
    { name: 'IT Team', href: '/crew/it' },
    { name: 'Marketing Team', href: '/crew/marketing' },
  ],
  [
    {
      name: 'Mise En Scene Blog',
      href: 'https://blog.warwick.film',
      external: true,
      primary: true,
    },
    {
      name: 'Buy Tickets',
      href: 'https://www.warwicksu.com/societies-sports/societies/filmsoc/',
      external: true,
      primary: true,
    },
    {
      name: 'Warwick SU',
      href: 'https://www.warwicksu.com/societies-sports/societies/filmsoc/',
      external: true,
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

export default function Footer() {
  return (
    <footer className="text-center bg-dark p-4">
      <div className="max-w-xl mx-auto">
        <div className="mt-4 flex justify-center items-center space-x-4">
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
            />
          </a>
          <a
            href="https://twitter.com/WSCfilmsoc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xLogo} alt="X Logo" height={23} width={23} />
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
            />
          </a>
          <a
            href="https://www.tiktok.com/@studentcinemawarwick"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={tikTokLogo} alt="TikTok Logo" height={23} width={23} />
          </a>
        </div>
        <nav className="flex justify-center mt-6 space-x-2 font-light text-sm">
          {footerLinks.map((footerLinksGroup, i) => (
            <div key={i}>
              {footerLinksGroup.map((link) => {
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
          ))}
        </nav>
        <div className="mt-12 mb-4">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
              target="_blank"
              rel="noopener"
            >
              <Image src={warwickSuLogo} alt="Warwick SU Logo" width={180} />
            </a>
            <Link href="/">
              <Image src={wscBlueHeader} alt="Warwick Student Cinema Logo" />
            </Link>
            <a
              href="https://cinemaforall.org.uk/advice-and-support/young-film-programmers-network/young-people-in-community-cinema-warwick-student-cinema/"
              target="_blank"
              rel="noopener"
            >
              <Image
                src={cinemaForAllLogo}
                alt="Cinema For All Logo"
                width={180}
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
  );
}
