import { Film } from '@prisma/client';

export function getFilmPrettyUrl(film: { title: string; film_id: number }) {
  return `/films/${film.film_id}?film=${film.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9- ]/gi, '')
    .replaceAll(' ', '-')}`;
}

export function getFilmTitle(film: { title: string; year: number | null }) {
  return film.year ? `${film.title} (${film.year})` : film.title;
}

export type FilmScreeningDay = {
  dayTime: number;
  day: Date;
  screenings: { id: number; date: Date }[];
  film: Film;
};

export function groupScreeningsByFilmScreeningDay(
  screenings: {
    scr_id: number;
    timestamp: bigint | null;
    film: Film;
  }[],
) {
  const filmScreeningDays: FilmScreeningDay[] = [];

  let currentDay: FilmScreeningDay | null = null;
  for (const screening of screenings) {
    if (!screening.timestamp) continue;

    const date = new Date(Number(screening.timestamp) * 1000);
    const transformedScreening = {
      date,
      id: screening.scr_id,
    };

    const dayStart = new Date(date.getTime());
    dayStart.setHours(0, 0, 0, 0);

    if (
      currentDay &&
      currentDay.film.film_id === screening.film.film_id &&
      currentDay?.day.getTime() === dayStart.getTime()
    )
      currentDay.screenings.push(transformedScreening);
    else {
      if (currentDay) filmScreeningDays.push(currentDay);
      currentDay = {
        dayTime: dayStart.getTime(),
        day: dayStart,
        screenings: [transformedScreening],
        film: screening.film,
      };
    }
  }

  if (currentDay) filmScreeningDays.push(currentDay);
  return filmScreeningDays;
}

export function formatFilmRuntime(runtime: number) {
  if (runtime >= 60) {
    const hours = Math.floor(runtime / 60);
    return `${hours}h ${runtime - hours * 60}m`;
  } else return `${runtime}m`;
}
