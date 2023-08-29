import prisma from '@/lib/prisma';
import { Film } from '@prisma/client';
import Link from 'next/link';
import LargeButtonLink from '@/components/large-button-link';
import { formatFilmRuntime, getFilmTitle } from '@/lib/film';
import {
  formatSecondsTimestamp,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';
import { getTmdbImageUrl, getTmdbMovie } from '@/lib/tmdb';
import Image from 'next/image';
import { getFilmAspectRatio } from '@/lib/film-server';

export async function generateStaticParams() {
  const films = await prisma.film.findMany();
  return films.map((film: Film) => ({ id: film.film_id.toString() }));
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

  return (
    <>
      <div className="-mt-24 h-[30rem] overflow-hidden">
        <Image
          src={backdropUrl}
          alt={`${film.title} Backdrop`}
          className="object-cover w-full h-[30rem] blur-md brightness-50"
          width={4000}
          height={480}
          priority
        />
      </div>
      <main className="flex gap-4 -mt-72 z-10">
        <div className="w-64 flex-shrink-0">
          <Image
            src={posterUrl}
            width={256}
            height={584}
            alt={`${film.title} Poster`}
            className="w-64 box-shadow-lg"
          />

          <div className="mt-3 text-sm">
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
        <div>
          <p className="text-xl font-lexend uppercase -mb-1">
            <Link href="/films">Film</Link>
          </p>
          <h1>{getFilmTitle(film)}</h1>
          <div className="font-lexend text-lg mb-2">
            <span>Runtime: {formatFilmRuntime(film.runtime)}</span> |&nbsp;
            {aspectRatio && (
              <>
                &nbsp;|&nbsp;
                <span>
                  Aspect Ratio:&nbsp;
                  {aspectRatio}
                </span>
              </>
            )}
            {tmdbMovie?.release_date && (
              <>
                &nbsp;|&nbsp;
                <span>
                  Release:&nbsp;
                  {tmdbMovie?.release_date}
                </span>
              </>
            )}
          </div>

          <Image
            src={backdropUrl}
            width={300}
            height={300}
            alt={`${film.title} Backdrop`}
            className="float-right ml-2"
          />
          <p>{film.synopsis || tmdbMovie?.overview}</p>

          <h2 className="mt-4">Upcoming Screenings</h2>
          {upcomingScreenings.length === 0 && <p>None</p>}
          {upcomingScreenings.map((screening) => (
            <article key={screening.scr_id as number}>
              {formatSecondsTimestamp(screening.timestamp as bigint)}
            </article>
          ))}

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
      </main>
    </>
  );
}
