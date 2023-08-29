import prisma from '@/lib/prisma';
import { Film } from '@prisma/client';
import Link from 'next/link';
import LargeButtonLink from '@/components/large-button-link';
import { Cert, formatCert, formatFilmRuntime, getFilmTitle } from '@/lib/film';
import {
  DateTimeFormat,
  formatDateTime,
  formatSecondsTimestamp,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';
import { getGenreName, getTmdbImageUrl, getTmdbMovie } from '@/lib/tmdb';
import Image from 'next/image';
import { getCertSvg, getFilmAspectRatio } from '@/lib/film-server';

export async function generateStaticParams() {
  const films = await prisma.film.findMany();
  return films.map((film: Film) => ({ id: film.film_id.toString() }));
}

function GenreList({
  genres,
  className,
}: {
  genres: number[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-2 text-xs uppercase font-lexend ${className}`}
    >
      {genres
        .map((genre) => getGenreName(genre))
        .filter((genre) => genre)
        .map((genre) => (
          <span key={genre} className="block px-1.5 py-0.5 bg-primary">
            {genre}
          </span>
        ))}
    </div>
  );
}

export default async function Film({
  params: { id },
}: {
  params: { id: string };
}) {
  const numericId = parseInt(id);
  let film;

  if (!Number.isNaN(numericId)) {
    film = await prisma.film.findFirst({
      where: {
        film_id: numericId,
      },
      include: {
        screenings: {
          select: { scr_id: true, timestamp: true },
          where: {
            timestamp: { not: null },
          },
        },
      },
    });
  }

  if (!film)
    return (
      <main>
        <p className="text-xl font-lexend uppercase -mb-1">
          <Link href="/films">Film Search</Link>
        </p>
        <h1 className="mb-1">Film Not Found</h1>

        <p className="mb-4">
          Unfortunately, the film you were looking for could not be found. If
          you think this is a mistake, please email&nbsp;
          <a
            href="mailto:exec@warwick.film"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            exec@warwick.film
          </a>
          .
        </p>

        <LargeButtonLink href="/films">Back to Film Search</LargeButtonLink>
      </main>
    );

  const upcomingScreenings = [];
  const pastScreenings = [];

  const currentSecondTimestamp = getStartOfDaySecondTimestamp();
  for (const screening of film.screenings) {
    if (!screening.timestamp) continue;
    if (screening.timestamp < currentSecondTimestamp)
      pastScreenings.push(screening);
    else upcomingScreenings.push(screening);
  }

  const tmdbMovie = await getTmdbMovie(film);
  const posterUrl = tmdbMovie?.poster_path
    ? getTmdbImageUrl(tmdbMovie.poster_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';
  const backdropUrl = tmdbMovie?.backdrop_path
    ? getTmdbImageUrl(tmdbMovie.backdrop_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';

  const aspectRatio = await getFilmAspectRatio(film.aspect);

  const certSvg = getCertSvg(film.cert);
  const bbfcLink = `https://www.bbfc.co.uk/search?q=${encodeURIComponent(
    film.title,
  )}`;

  return (
    <main className="-mt-24 max-w-full px-0">
      <div className="relative">
        <div className="absolute left-0 right-0 bottom-0 top-0 overflow-hidden">
          <Image
            src={backdropUrl}
            alt={`${film.title} Backdrop`}
            className="object-cover w-full h-full blur-md brightness-50"
            width={4000}
            height={480}
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 xs:px-8 relative pt-24 md:pt-40 pb-24">
          <div className="my-2 xs:my-0 xs:absolute w-36 sm:w-56 md:w-64 flex-shrink-0">
            <Image
              src={posterUrl}
              width={256}
              height={384}
              alt={`${film.title} Poster`}
              className="w-36 sm:w-56 md:w-64 box-shadow-lg"
            />

            {tmdbMovie?.genre_ids && tmdbMovie.genre_ids.length > 0 && (
              <GenreList genres={tmdbMovie?.genre_ids} className="mt-3" />
            )}

            <div className="mt-3 text-sm hidden xs:block">
              <p className="mb-1">
                <strong>Director: </strong>
                {film.director}
              </p>
              <p>
                <strong>Starring: </strong>
                {film.starring}
              </p>
            </div>
          </div>
          <div className="xs:ml-36 sm:ml-56 md:ml-64 xs:pl-4">
            <div className="flex gap-2">
              <div className="grow">
                <p className="text-xl font-lexend uppercase -mb-1">
                  <Link href="/films">Film</Link>
                </p>
                <h1>{getFilmTitle(film)}</h1>
              </div>
              {(certSvg || film.cert !== Cert.UNKNOWN) && (
                <a
                  href={bbfcLink}
                  target="_blank"
                  rel="noopener"
                  className="text-4xl hover:-translate-y-0.5 hover:drop-shadow-sm flex-shrink-0"
                >
                  {certSvg ? (
                    <Image
                      src={certSvg}
                      alt={`BBFC ${formatCert(film.cert)} guideline`}
                      className="w-12 sm:w-16 bg-transparent"
                      width={60}
                    />
                  ) : (
                    formatCert(film.cert)
                  )}
                </a>
              )}
            </div>

            <div className="md:text-lg mb-2 flex flex-wrap flex-col md:flex-row">
              <span>
                <span className="font-lexend font-bold">Runtime:&nbsp;</span>
                {formatFilmRuntime(film.runtime)}
              </span>
              {aspectRatio && aspectRatio !== 'Unknown' && (
                <>
                  <span className="hidden md:inline">&nbsp;|&nbsp;</span>
                  <span>
                    <span className="font-lexend font-bold">
                      Aspect Ratio:&nbsp;
                    </span>
                    {aspectRatio}
                  </span>
                </>
              )}
              {tmdbMovie?.release_date && (
                <>
                  <span className="hidden md:inline">&nbsp;|&nbsp;</span>
                  <span>
                    <span className="font-lexend font-bold">
                      Release:&nbsp;
                    </span>
                    {formatDateTime(
                      new Date(tmdbMovie.release_date),
                      DateTimeFormat.DATE_MEDIUM,
                    )}
                  </span>
                </>
              )}
              <span className="xs:hidden">
                <span className="font-lexend font-bold">Director:&nbsp;</span>
                {film.director}
              </span>
              <span className="xs:hidden">
                <span className="font-lexend font-bold">Starring:&nbsp;</span>
                {film.starring}
              </span>
            </div>

            <Image
              src={backdropUrl}
              width={300}
              height={300}
              alt={`${film.title} Backdrop`}
              className="w-48 lg:w-72 float-right ml-2 hidden md:block"
            />
            <p>{film.synopsis || tmdbMovie?.overview}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 xs:px-8 -mt-24 z-10 relative">
        <div className="xs:ml-36 sm:ml-56 md:ml-64 xs:pl-4">
          <div className="lg:mr-72 lg:pr-4">
            <h2 className="mt-4">Upcoming Screenings</h2>
            {upcomingScreenings.length === 0 && (
              <div className="mt-2 bg-primary p-4 box-shadow-lg">
                There are no upcoming screenings scheduled for this film.
                Interested in watching it at Warwick Student Cinema?&nbsp;
                <Link href="/suggestions" className="text-accent">
                  Make a suggestion!
                </Link>
              </div>
            )}
            {upcomingScreenings.map((screening) => (
              <article
                key={screening.scr_id as number}
                className="mt-2 bg-primary p-4 box-shadow-lg"
              >
                {formatSecondsTimestamp(screening.timestamp as bigint)}
              </article>
            ))}
          </div>

          <h2 className="mt-4">Past Screenings</h2>
          {pastScreenings.length === 0 && <p>None</p>}
          {pastScreenings.map((screening) => (
            <article key={screening.scr_id as number}>
              {formatSecondsTimestamp(screening.timestamp as bigint)}
            </article>
          ))}

          {film.review && (
            <>
              <h2 className="mt-4">Reviews</h2>
              <div
                dangerouslySetInnerHTML={{ __html: film.review }}
                className="content-style"
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
