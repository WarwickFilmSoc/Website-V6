import prisma from '@/lib/prisma';

import { groupScreeningsByDay, splitScreeningDaysByFilm } from '@/lib/film';
import dayjs from 'dayjs';
import HeroCarouselClient from './carousel';

export default async function HeroCarousel() {
  const upcomingScreenings = await prisma.screening.findMany({
    where: {
      timestamp: {
        gte: dayjs().subtract(2, 'hours').unix(),
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
    include: {
      film: true,
    },
    take: 9, //3 days * max 3 screenings
  });
  const upcomingScreeningDays = groupScreeningsByDay(upcomingScreenings);

  const upcomingFilmScreeningDays = splitScreeningDaysByFilm(
    upcomingScreeningDays,
  );

  return (
    <HeroCarouselClient
      upcomingFilmScreeningDays={upcomingFilmScreeningDays.slice(0, 3)}
    />
  );
}
