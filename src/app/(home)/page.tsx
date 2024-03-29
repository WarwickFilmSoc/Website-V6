import WeekScreeningsList from '@/app/(home)/week-screenings-list';
import TermEvents from '@/app/(home)/term-events';
import AboutUsCard from '@/app/(home)/about-us-card';
import WatchAFilm from '@/app/(home)/watch-a-film';
import JoinTheCrew from '@/app/(home)/join-the-crew';
import BlogCarousel from '@/app/(home)/blog-carousel';
import HeroCarousel from '@/app/(home)/(carousel)/hero-carousel';

// Revalidate every 15 mins
export const revalidate = 900;

export default function Home() {
  return (
    <main className="text-center mx-0 max-w-full px-0">
      <section>
        <HeroCarousel />
        <WeekScreeningsList />
      </section>

      <TermEvents />

      <div className="flex mb-20 max-w-7xl mx-auto flex-wrap lg:flex-nowrap">
        <AboutUsCard />
        <WatchAFilm />
      </div>

      <JoinTheCrew />
      <BlogCarousel />
    </main>
  );
}
