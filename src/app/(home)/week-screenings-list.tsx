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
    <div className="relative h-64">
      <section className="absolute w-full -mt-48 z-30 mb-20 drop-shadow-lg">
        <h2 className="text-3xl mb-4">This Week&#8217;s Screenings</h2>
        <div className="flex justify-center">
          {filmScreeningDays.map((filmScreeningDay) => (
            <FilmScreeningDayCard
              filmScreeningDay={filmScreeningDay}
              key={filmScreeningDay.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
