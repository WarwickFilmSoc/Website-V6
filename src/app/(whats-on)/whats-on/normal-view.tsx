import prisma from '@/lib/prisma';
import {
  DateTimeFormat,
  formatDateTime,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';
import {
  Cert,
  FilmScreeningDay,
  formatCert,
  formatFilmRuntime,
  getFilmPrettyUrl,
  groupScreeningsByFilmScreeningDay,
} from '@/lib/film';
import Image from 'next/image';
import { getTmdbImageUrl } from '@/lib/tmdb';
import FilmGenreTags from '@/components/films/film-genre-tags';

function FilmScreeningDay({
  filmScreeningDay,
}: {
  filmScreeningDay: FilmScreeningDay;
}) {
  const backdropUrl = filmScreeningDay.film.tmdb_backdrop_path
    ? getTmdbImageUrl(filmScreeningDay.film.tmdb_backdrop_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';
  const title = filmScreeningDay.film.year
    ? `${filmScreeningDay.film.title} (${filmScreeningDay.film.year})`
    : filmScreeningDay.film.title;

  return (
    <a href={getFilmPrettyUrl(filmScreeningDay.film)} className="group mb-6">
      <article>
        <div className="flex justify-between items-center mb-1 flex-wrap">
          <div className="uppercase font-lexend mr-1">
            <span>
              {formatDateTime(
                filmScreeningDay.day,
                DateTimeFormat.WEEKDAY_DATE_LONG,
              )}
            </span>
          </div>
          <div className="flex text-xs gap-1">
            {filmScreeningDay.screenings.map((screening) => (
              <time
                dateTime={screening.date.toISOString()}
                className="bg-primary rounded-md px-1 py-0.5 group-hover:scale-105"
                key={screening.id}
              >
                {formatDateTime(screening.date, DateTimeFormat.TIME)}
              </time>
            ))}
          </div>
        </div>

        <div className="w-full h-40 overflow-hidden mb-2">
          <Image
            src={backdropUrl}
            alt={`${title} Backdrop`}
            width={300}
            height={150}
            className="w-full h-full object-cover group-hover:scale-105"
          />
        </div>

        <p className="text-lg font-lexend uppercase font-bold leading-6">
          {title}
        </p>
        <div className="font-lexend uppercase">
          <span>{formatFilmRuntime(filmScreeningDay.film.runtime)}</span>
          {filmScreeningDay.film.cert !== Cert.UNKNOWN && (
            <>
              <span> • </span>
              <span>{formatCert(filmScreeningDay.film.cert)}</span>
            </>
          )}
        </div>
        {filmScreeningDay.film.tmdb_genres && (
          <FilmGenreTags
            genreString={filmScreeningDay.film.tmdb_genres}
            className="mt-1"
          />
        )}
      </article>
    </a>
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
    select: {
      scr_id: true,
      timestamp: true,
      film: true,
    },
  });
  const upcomingFilmScreeningDays =
    groupScreeningsByFilmScreeningDay(upcomingScreenings);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {upcomingFilmScreeningDays.map((filmScreeningDay) => (
        <FilmScreeningDay
          filmScreeningDay={filmScreeningDay}
          key={`${filmScreeningDay.dayTime}${filmScreeningDay.film.film_id}`}
        />
      ))}
    </div>
  );
}
