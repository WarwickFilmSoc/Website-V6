import WeekScreeningsList from '@/app/(home)/week-screenings-list';
import TermEvents from '@/app/(home)/term-events';
import AboutUsCard from '@/app/(home)/about-us-card';
import WatchAFilm from '@/app/(home)/watch-a-film';
import JoinTheCrew from '@/app/(home)/join-the-crew';
import BlogCarousel from '@/app/(home)/blog-carousel';

export default function Home() {
  return (
    <main className="text-center mt-4">
      <section>
        <h1>
          Welcome to <span>Your Student Cinema</span>
        </h1>
        <a>View Our Schedule</a>

        <WeekScreeningsList />
      </section>

      <TermEvents />

      <div className="flex">
        <AboutUsCard />
        <WatchAFilm />
      </div>

      <JoinTheCrew />
      <BlogCarousel />
    </main>
  );
}
