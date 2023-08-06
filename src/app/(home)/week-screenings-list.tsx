import { FilmScreeningDay } from '@/types';
import FilmScreeningDayCard from '@/components/film-screening-day-card';

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
    <section className="mb-20">
      <h2 className="text-3xl">This Week&#8217;s Screenings</h2>
      <div className="flex">
        {filmScreeningDays.map((filmScreeningDay) => (
          <FilmScreeningDayCard
            filmScreeningDay={filmScreeningDay}
            key={filmScreeningDay.id}
          />
        ))}
      </div>
    </section>
  );
}
