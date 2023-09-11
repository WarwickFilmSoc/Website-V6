import prisma from '@/lib/prisma';
import { getStartOfDaySecondTimestamp } from '@/lib/date';
import { groupScreeningsByDay, splitScreeningDaysByFilm } from '@/lib/film';
import {
  groupScreeningDaysByTermWeek,
  TScreeningWeek,
} from '@/lib/film-server';
import { Film, Screening } from '@prisma/client';
import FilmLayoutDivider from '@/components/films/film-layout-divider';
import FilmCard from '@/components/films/film-card';
import FilmLayout from '@/components/films/film-layout';

function ScreeningWeek({
  screeningWeek,
  index,
}: {
  screeningWeek: TScreeningWeek<Screening & { film: Film }>;
  index: number;
}) {
  const filmScreeningDays = splitScreeningDaysByFilm(
    screeningWeek.screeningDays,
  );

  return (
    <>
      <FilmLayoutDivider text={screeningWeek.weekData.termAndWeekName} />

      <FilmLayout>
        {filmScreeningDays.map((filmScreeningDay) => (
          <FilmCard
            film={filmScreeningDay.film}
            filmScreeningDay={filmScreeningDay}
            key={`${filmScreeningDay.dayTime}${filmScreeningDay.film.film_id}`}
            preloadImages={index < 2}
          />
        ))}
      </FilmLayout>
    </>
  );
}

export default async function NormalView() {
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
  });
  const upcomingScreeningDays = groupScreeningsByDay(upcomingScreenings);
  const upcomingScreeningWeeks = await groupScreeningDaysByTermWeek(
    upcomingScreeningDays,
  );

  return (
    <div>
      {upcomingScreeningWeeks.map((filmScreeningWeek, i) => (
        <ScreeningWeek
          screeningWeek={filmScreeningWeek}
          key={filmScreeningWeek.weekData.termAndWeekName}
          index={i}
        />
      ))}
    </div>
  );
}
