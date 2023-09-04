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

export function splitScreeningDaysByFilm<
  TScreening extends { film: Film } & BaseScreening,
>(
  screeningDays: TScreeningDay<TScreening>[],
): (TScreeningDay<TScreening> & { film: Film })[] {
  let filmScreeningDays: (TScreeningDay<TScreening> & { film: Film })[] = [];

  for (const screeningDay of screeningDays) {
    const filmScreeningDaysToday: {
      [filmId: number]: TScreeningDay<TScreening> & { film: Film };
    } = {};
    for (const screening of screeningDay.screenings) {
      if (filmScreeningDaysToday[screening.film.film_id])
        filmScreeningDaysToday[screening.film.film_id].screenings.push(
          screening,
        );
      else
        filmScreeningDaysToday[screening.film.film_id] = {
          ...screeningDay,
          film: screening.film,
          screenings: [screening],
        };
    }
    filmScreeningDays = filmScreeningDays.concat(
      Object.values(filmScreeningDaysToday),
    );
  }

  return filmScreeningDays.sort(
    (a, b) => a.screenings[0].date.getTime() - b.screenings[0].date.getTime(),
  );
}

export type BaseScreening = {
  scr_id: number;
  timestamp: bigint | null;
};

export type TScreeningDay<TScreening extends BaseScreening> = {
  dayTime: number;
  day: Date;
  screenings: ({ date: Date } & TScreening)[];
};

export function groupScreeningsByDay<TScreening extends BaseScreening>(
  screenings: TScreening[],
): TScreeningDay<TScreening>[] {
  const screeningDays: TScreeningDay<TScreening>[] = [];

  let currentDay: TScreeningDay<TScreening> | null = null;
  for (const screening of screenings) {
    if (!screening.timestamp) continue;

    const date = new Date(Number(screening.timestamp) * 1000);
    const transformedScreening = {
      ...screening,
      date,
    };

    const dayStart = new Date(date.getTime());
    dayStart.setHours(0, 0, 0, 0);

    if (currentDay && currentDay?.day.getTime() === dayStart.getTime())
      currentDay.screenings.push(transformedScreening);
    else {
      if (currentDay) screeningDays.push(currentDay);
      currentDay = {
        dayTime: dayStart.getTime(),
        day: dayStart,
        screenings: [transformedScreening],
      };
    }
  }

  if (currentDay)
    screeningDays.push({
      ...currentDay,
    });
  return screeningDays;
}

export function formatFilmRuntime(runtime: number) {
  if (runtime >= 60) {
    const hours = Math.floor(runtime / 60);
    return `${hours}h ${runtime - hours * 60}m`;
  } else return `${runtime}m`;
}

export enum Cert {
  UNKNOWN = 0,
  CERT_U = 1002,
  CERT_PG = 1003,
  CERT_12A = 1004,
  CERT_15 = 1005,
  CERT_18 = 1006,
  CERT_X = 1007,
  CERT_12 = 1008,
  CERT_AA = 1009,
  CERT_A = 1010,
}

export function formatCert(cert: Cert): string {
  switch (cert) {
    case Cert.CERT_U:
      return 'U';
    case Cert.CERT_PG:
      return 'PG';
    case Cert.CERT_12A:
      return '12A';
    case Cert.CERT_15:
      return '15';
    case Cert.CERT_18:
      return '18';
    case Cert.CERT_X:
      return 'X';
    case Cert.CERT_12:
      return '12';
    case Cert.CERT_AA:
      return 'AA';
    case Cert.CERT_A:
      return 'A';
    default:
      return '';
  }
}

export function getTicketLink(id: number): string {
  return `https://www.warwicksu.com/venues-events/events/4273/${id}`;
}
