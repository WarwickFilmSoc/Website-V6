import { FilmScreeningDay } from '@/types';
import FilmScreeningDayCard from '@/components/film-screening-day-card';
import LargeButtonLink from '@/components/large-button-link';

const filmScreeningDays: FilmScreeningDay[] = [
  {
    id: 1,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
  {
    id: 2,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
  {
    id: 3,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
  {
    id: 4,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
  {
    id: 5,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
  {
    id: 6,
    film: { name: 'Everything Everywhere All At Once' },
    screeningDates: [123, 123],
  },
];
export default function WeekScreeningsList() {
  return (
    <section className="w-full mb-24 z-30 drop-shadow-lg -mt-32 h-sm:-mt-36 h-md:-mt-48 h-lg:-mt-64 pt-2">
      <h2 className="text-3xl mb-2 hidden xl:block">
        This Week&#8217;s Screenings
      </h2>
      <h2 className="text-2xl mb-1 md:text-3xl md:mb-2 xl:hidden">Coming Up</h2>
      <div className="flex justify-center gap-x-6 mx-4 mb-6 overflow-x-hidden">
        {filmScreeningDays.map((filmScreeningDay, i) => (
          <FilmScreeningDayCard
            filmScreeningDay={filmScreeningDay}
            key={filmScreeningDay.id}
            index={i}
          />
        ))}
      </div>

      <LargeButtonLink href="/whats-on">View Screenings</LargeButtonLink>
    </section>
  );
}
