import FilmScreeningDayCard from './film-screening-day-card';
import LargeButtonLink from '@/components/large-button-link';
import prisma from '@/lib/prisma';
import { getStartOfDaySecondTimestamp } from '@/lib/date';
import { groupScreeningsByDay, splitScreeningDaysByFilm } from '@/lib/film';

export default async function WeekScreeningsList() {
  const upcomingScreenings = await prisma.screening.findMany({
    where: {
      timestamp: {
        gte: getStartOfDaySecondTimestamp(),
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
    include: {
      film: true,
    },
    take: 12, // 6 * 2 times for each screening
  });
  const upcomingScreeningDays = groupScreeningsByDay(upcomingScreenings);
  const upcomingFilmScreeningDays = splitScreeningDaysByFilm(
    upcomingScreeningDays,
  );

  return (
    <section className="w-full mb-24 z-30 drop-shadow-lg -mt-32 h-sm:-mt-36 h-md:-mt-48 h-lg:-mt-64 pt-2">
      <h2 className="text-3xl mb-2">Upcoming Screenings</h2>
      <div className="flex justify-center gap-x-6 mx-4 mb-6 overflow-x-hidden">
        {upcomingFilmScreeningDays.map((filmScreeningDay, i) => (
          <FilmScreeningDayCard
            filmScreeningDay={filmScreeningDay}
            key={`${filmScreeningDay.dayTime}${filmScreeningDay.film.film_id}`}
            index={i}
          />
        ))}
      </div>

      <LargeButtonLink href="/whats-on">View Screenings</LargeButtonLink>
    </section>
  );
}
