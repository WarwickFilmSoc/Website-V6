import Image from 'next/image';
import Link from 'next/link';
import styles from './film-screening-day-card.module.css';
import { Cert, TScreeningDay, formatCert, getFilmPrettyUrl } from '@/lib/film';
import { getTmdbImageUrl } from '@/lib/tmdb';
import { DateTimeFormat, formatDateTime } from '@/lib/date';
import { Film, Screening } from '@prisma/client';

export default async function FilmScreeningDayCard({
  filmScreeningDay,
  index,
}: {
  filmScreeningDay: TScreeningDay<Screening> & { film: Film };
  index: number;
}) {
  const responsiveClasses = [
    '',
    styles.day2,
    styles.day3,
    styles.day4,
    styles.day5,
    styles.day6,
  ];
  if (index > 5) return null;

  const posterUrl = filmScreeningDay.film.tmdb_poster_path
    ? getTmdbImageUrl(filmScreeningDay.film.tmdb_poster_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';

  return (
    <Link
      href={getFilmPrettyUrl(filmScreeningDay.film)}
      className={`group ${responsiveClasses[index] || ''}`}
    >
      <article className="w-40 xl:w-[11.5rem] 2xl:w-52 3xl:w-60 text-left">
        <div className="overflow-hidden">
          <Image
            src={posterUrl}
            width={183}
            height={276}
            alt={filmScreeningDay.film.title}
            className="mx-auto w-full bg-black text-black group-hover:scale-105 transition-transform box-shadow-lg"
          />
        </div>
        <div className="mt-2">
          <h3 className=" text-md font-bold leading-5 inline">
            {filmScreeningDay.film.title}
          </h3>
          {filmScreeningDay.film.cert !== Cert.UNKNOWN && (
            <span> • {formatCert(filmScreeningDay.film.cert)}</span>
          )}
        </div>
        <div className="mt-1 flex flex-col gap-y-1 xl:flex-row xl:gap-x-2 xl:space-y-0 flex-wrap">
          <p className="text-sm 3xl:text-base flex-grow flex-shrink-0">
            <time dateTime={filmScreeningDay.day.toISOString()}>
              {formatDateTime(
                filmScreeningDay.day,
                DateTimeFormat.WEEKDAY_DATE,
              )}
            </time>
          </p>
          <div className="flex text-xs 2xl:text-sm gap-1 2xl:gap-2 justify-start flex-wrap">
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
      </article>
    </Link>
  );
}
