import prisma from '@/lib/prisma';
import { Film } from '@prisma/client';
import Link from 'next/link';
import LargeButtonLink from '@/components/large-button-link';
import { getFilmTitle } from '@/lib/film';
import {
  formatSecondsTimestamp,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';

export async function generateStaticParams() {
  const films = await prisma.film.findMany();
  return films.map((film: Film) => ({ id: film.film_id.toString() }));
}

export default async function MeetingMinutes({
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
          <Link href="/film-archive">Film Archive</Link>
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

        <LargeButtonLink href="/film-archive">
          Back to Film Archive
        </LargeButtonLink>
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

  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/film-archive">Film</Link>
      </p>
      <h1 className="mb-1">{getFilmTitle(film)}</h1>
      <div>
        Runtime: {film.runtime} | Aspect Ratio: {film.aspect} | Release: ?
      </div>
      <p>{film.synopsis}</p>

      <p>Director: {film.director}</p>
      <p>Starring: {film.starring}</p>

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
    </main>
  );
}
