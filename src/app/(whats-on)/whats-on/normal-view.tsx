import prisma from '@/lib/prisma';
import {
  DateTimeFormat,
  formatDateTime,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';
import {
  Cert,
  formatCert,
  formatFilmRuntime,
  getFilmPrettyUrl,
  groupScreeningsByDay,
  splitScreeningDaysByFilm,
  TScreeningDay,
} from '@/lib/film';
import {
  groupScreeningDaysByTermWeek,
  TScreeningWeek,
} from '@/lib/film-server';
import Image from 'next/image';
import { getTmdbImageUrl } from '@/lib/tmdb';
import FilmGenreTags from '@/components/films/film-genre-tags';
import { Film, Screening } from '@prisma/client';
import Link from 'next/link';

function FilmScreeningDay({
  filmScreeningDay,
  preloadImages,
}: {
  filmScreeningDay: TScreeningDay<Screening> & { film: Film };
  preloadImages?: boolean;
}) {
  const backdropUrl = filmScreeningDay.film.tmdb_backdrop_path
    ? getTmdbImageUrl(filmScreeningDay.film.tmdb_backdrop_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';
  const title = filmScreeningDay.film.year
    ? `${filmScreeningDay.film.title} (${filmScreeningDay.film.year})`
    : filmScreeningDay.film.title;

  return (
    <Link href={getFilmPrettyUrl(filmScreeningDay.film)} className="group mb-6">
      <article>
        <div className="flex justify-between items-center mb-1 flex-wrap">
          <div className="uppercase font-lexend mr-1">
            <span>
              {formatDateTime(
                filmScreeningDay.day,
                DateTimeFormat.WEEKDAY_DATE_MONTH,
              )}
            </span>
          </div>
          <div className="flex text-xs gap-1">
            {filmScreeningDay.screenings.map((screening) => (
              <time
                dateTime={screening.date.toISOString()}
                className="bg-primary rounded-md px-1 py-0.5 group-hover:scale-105"
                key={screening.scr_id}
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
            priority={preloadImages}
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
    </Link>
  );
}

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
      <div className="flex items-center md:mx-4 mb-6">
        <hr className="grow border-t-2 m-2 md:m-4 flex-shrink-0 w-4" />
        <h2 className="text-xl md:text-2xl mx-2 md:mx-4 text-center">
          {screeningWeek.weekData.termAndWeekName}
        </h2>
        <hr className="grow border-t-2 m-2 md:m-4 flex-shrink-0 w-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {filmScreeningDays.map((filmScreeningDay) => (
          <FilmScreeningDay
            filmScreeningDay={filmScreeningDay}
            key={`${filmScreeningDay.dayTime}${filmScreeningDay.film.film_id}`}
            preloadImages={index < 2}
          />
        ))}
      </div>
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
