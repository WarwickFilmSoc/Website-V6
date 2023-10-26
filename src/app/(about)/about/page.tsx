import Link from 'next/link';
import aboutImage from '@/assets/about/about-image.jpg';
import Image from 'next/image';
import Advertise from './advertise';
import Find from './find';
import Membership from './membership';
import Tickets from './tickets';
import { Metadata } from 'next';
import Acknowledgements from '@/app/(about)/about/acknowledgements';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Warwick Student Cinema is a nationally acclaimed, student run, professional standard cinema presented by the Warwick Film Society (aka FilmSoc). We run screenings six days a week during term time, which are open to both University members and the general public.',
};

export default function About() {
  return (
    <main>
      <Image
        src={aboutImage}
        alt="Eric writing Warwick Filmsoc Presents on our chalkboard"
        width={400}
        className="md:float-right md:ml-2 mb-2 w-72 lg:w-96"
        placeholder="blur"
        priority
      />
      <h1>About Us</h1>
      <p className="mb-2">
        Warwick Student Cinema is a nationally acclaimed, student run,
        professional standard cinema presented by the Warwick Film Society (aka
        FilmSoc). We run&nbsp;
        <Link href="/whats-on" className="text-accent">
          screenings six days a week
        </Link>
        &nbsp;during term time, which are open to both University members and
        the general public.
      </p>
      <p className="mb-2">
        <Link href="/history" className="text-accent">
          For the past 50 years,
        </Link>
        &nbsp;we have provided a top-quality cinema experience using our{' '}
        <Link href="/technical-specifications" className="text-accent">
          industry standard 35mm, 70mm and digital laser equipment
        </Link>
        . We&apos;re located in the{' '}
        <a
          href="https://goo.gl/maps/y1k5sbsnSxFRSTRN7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          University of Warwick&apos;s L3 Chemistry Lecture Theatre
        </a>
        , which we transform into our cinema auditorium every night.
      </p>
      <p className="mb-2">
        Even though we&apos;re a professional-standard cinema open to the
        public,&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          Warwick Student Cinema
        </a>
        &nbsp;is one of&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          Warwick Student Union&apos;s largest societies
        </a>
        . Although we may not the standard academic or extracurricular society,
        we are still governed by our&nbsp;
        <Link href="/constitution" className="text-accent">
          constitution
        </Link>
        &nbsp;and have an annually-elected&nbsp;
        <Link href="/exec" className="text-accent">
          Executive Committee
        </Link>
        .
      </p>
      <p className="mb-2">
        If you&apos;re at Warwick University, you also have the ability to
        join&nbsp;
        <Link href="/crew" className="text-accent">
          the crew
        </Link>
        &nbsp;after you purchase&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/filmsoc/"
          rel="noopener"
          target="_blank"
          className="text-accent"
        >
          WSC Membership from Warwick SU.
        </a>
        &nbsp;The cinema is fully run by student volunteers across&nbsp;
        <Link href="/crew" className="text-accent">
          five teams
        </Link>
        , and we&apos;re always looking for people to&nbsp;
        <Link href="/crew" className="text-accent">
          join
        </Link>
        &nbsp;- whether that be for the free films, fun socials or
        once-in-a-lifetime experience!
      </p>
      <p className="mb-2">
        If you can&apos;t find what you&apos;re looking for, you can try
        our&nbsp;
        <Link href="/faq" className="text-accent">
          FAQ
        </Link>
        , contact an&nbsp;
        <Link href="/exec" className="text-accent">
          individual Exec Team member
        </Link>
        &nbsp;or contact the Exec collectively at&nbsp;
        <a
          href="mailto:info@warwick.film"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          info@warwick.film
        </a>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Tickets showTitle />
        <Membership />
        <Find />
        <Advertise />
        <Acknowledgements />
      </div>
    </main>
  );
}
