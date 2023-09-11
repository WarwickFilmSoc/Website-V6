import { FilmSearchResult } from '@/app/api/films/types';
import { Film, Screening } from '@prisma/client';
import { getTmdbImageUrl } from '@/lib/tmdb';
import wscLogo from '@/assets/logos/logo-white.png';
import Link from 'next/link';
import {
  Cert,
  formatCert,
  formatFilmRuntime,
  getFilmPrettyUrl,
  TScreeningDay,
} from '@/lib/film';
import Image from 'next/image';
import FilmGenreTags from '@/components/films/film-genre-tags';
import { DateTimeFormat, formatDateTime } from '@/lib/date';
import { ReactNode } from 'react';

export default function FilmCard({
  film,
  filmScreeningDay,
  header,
  footer,
  preloadImages,
}: {
  film: Film | FilmSearchResult;
  filmScreeningDay?: TScreeningDay<Screening>;
  header?: ReactNode;
  footer?: ReactNode;
  preloadImages?: boolean;
}) {
  const imageSrc = film.tmdb_backdrop_path
    ? getTmdbImageUrl(film.tmdb_backdrop_path)
    : wscLogo;
  const title = film.year ? `${film.title} (${film.year})` : film.title;

  return (
    <Link href={getFilmPrettyUrl(film)} className="group mb-6">
      <article>
        {header}
        {filmScreeningDay && (
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
        )}

        <div className="w-full h-40 overflow-hidden mb-2">
          <Image
            src={imageSrc}
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
          {film.runtime && <span>{formatFilmRuntime(film.runtime)}</span>}
          {film.runtime && film.cert !== Cert.UNKNOWN && <span> • </span>}
          {film.cert !== Cert.UNKNOWN && <span>{formatCert(film.cert)}</span>}
        </div>
        {film.tmdb_genres && (
          <FilmGenreTags genreString={film.tmdb_genres} className="mt-1" />
        )}

        {footer}
      </article>
    </Link>
  );
}
