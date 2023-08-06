import WeekScreeningsList from '@/app/(home)/week-screenings-list';
import TermEvents from '@/app/(home)/term-events';
import AboutUsCard from '@/app/(home)/about-us-card';
import WatchAFilm from '@/app/(home)/watch-a-film';
import JoinTheCrew from '@/app/(home)/join-the-crew';
import BlogCarousel from '@/app/(home)/blog-carousel';
import LargeButtonLink from '@/components/large-button-link';

import logoWhite from '@/assets/logos/logo-white.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="text-center mt-4">
      <section>
        <div className="w-fit mx-auto flex items-center my-16 space-x-2">
          <div className="text-right">
            <h1 className="text-4xl text-right mb-3">
              Welcome to
              <span className="block font-bold">Your Student Cinema</span>
            </h1>
            <LargeButtonLink href="/whats-on">
              View Our Schedule
            </LargeButtonLink>
          </div>
          <div className="p-2">
            <Image src={logoWhite} alt="Warwick Student Cinema Logo" />
          </div>
        </div>

        <WeekScreeningsList />
      </section>

      <TermEvents />

      <div className="grid grid-cols-2 mb-20">
        <AboutUsCard />
        <WatchAFilm />
      </div>

      <JoinTheCrew />
      <BlogCarousel />
    </main>
  );
}
