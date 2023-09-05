import prisma from '@/lib/prisma';
import { Film, FilmSubtitles, Screening, ScreeningGauge } from '@prisma/client';
import Link from 'next/link';
import LargeButtonLink from '@/components/large-button-link';
import {
  Cert,
  formatCert,
  formatFilmRuntime,
  getFilmTitle,
  getTicketLink,
  groupScreeningsByDay,
  TScreeningDay,
} from '@/lib/film';
import {
  DateTimeFormat,
  formatDateTime,
  getStartOfDaySecondTimestamp,
} from '@/lib/date';
import { getTmdbImageUrl } from '@/lib/tmdb';
import Image from 'next/image';
import { getCertSvg, getFilmAspectRatio } from '@/lib/film-server';
import { Metadata } from 'next';
import FilmGenreTags from '@/components/films/film-genre-tags';
import { getTermAndWeekName } from '@/lib/term-dates';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const films = await prisma.film.findMany();
  return films.map((film: Film) => ({ id: film.film_id.toString() }));
}

function getGauge(gauge: ScreeningGauge) {
  switch (gauge) {
    case ScreeningGauge.MM_16:
      return 'Presented on 16mm film';
    case ScreeningGauge.MM_35:
      return 'Presented on 35mm film';
    case ScreeningGauge.MM_70:
      return 'Presented on 70mm film';
    case ScreeningGauge.DIGITAL:
      return 'Digital';
    case ScreeningGauge.DIGITAL_35MM:
      return 'Digital 35mm film';
  }
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const numericId = parseInt(id);
  let film;

  if (!Number.isNaN(numericId)) {
    film = await prisma.film.findFirst({
      where: {
        film_id: numericId,
      },
      include: {
        screenings: {
          select: { scr_id: true, timestamp: true, union_event_id: true },
          where: {
            timestamp: { gte: getStartOfDaySecondTimestamp() },
          },
          orderBy: {
            timestamp: 'asc',
          },
          take: 1,
        },
      },
    });
  }

  if (!film)
    return {
      title: 'Film Not Found',
      description: 'That film could not be found.',
    };

  const backdropUrl = film.tmdb_backdrop_path
    ? getTmdbImageUrl(film.tmdb_backdrop_path)
    : '';

  const title = film.year ? `${film.title} (${film.year})` : film.title;

  return {
    title,
    description:
      film.screenings.length > 0
        ? `Come and watch ${title} at Warwick Student Cinema on ${formatDateTime(
            new Date(Number(film.screenings[0].timestamp) * 1000),
            DateTimeFormat.DATE_LONG,
          )}.`
        : `${title} at Warwick Student Cinema - read our film reviews, view our past screenings of this film and request us to screen it in the future.`,
    openGraph: {
      type: 'video.movie',
      directors: film.director || undefined,
      actors: film.starring || undefined,
      duration: film.runtime ? film.runtime * 60 : undefined,
      releaseDate: film.tmdb_release_date
        ? new Date(film.tmdb_release_date).toISOString()
        : undefined,
      images: backdropUrl ? [backdropUrl] : undefined,
    },
  };
}

async function ScreeningDay({
  day,
  subtitled,
}: {
  day: TScreeningDay<Screening>;
  subtitled: boolean;
}) {
  const termAndWeekName = await getTermAndWeekName(day.day);
  return (
    <article className="mt-2 bg-primary p-4 box-shadow-lg flex flex-col flex-wrap xs:flex-row xs:items-center gap-2 xs:gap-4">
      <div>
        <time dateTime={day.day.toISOString()}>
          {formatDateTime(day.day, DateTimeFormat.DATE_LONG)}
        </time>
        <span className="block text-xs uppercase font-lexend font-bold">
          {termAndWeekName}
        </span>
      </div>

      <div className="flex flex-wrap xs:flex-row gap-2 xs:ml-auto xs:justify-end">
        {day.screenings
          .sort((a, b) => a.date.getTime() - b.date.getTime())
          .map((screening) =>
            screening.union_event_id ? (
              <a
                key={screening.scr_id}
                href={getTicketLink(screening.union_event_id)}
                target="_blank"
                rel="noopener"
                className="border-white border-2 rounded-md px-2 py-1 hover:scale-105"
              >
                <time dateTime={screening.date.toISOString()}>
                  {formatDateTime(screening.date, DateTimeFormat.TIME)}
                </time>
              </a>
            ) : (
              <span
                key={screening.scr_id}
                className="border-white border-2 rounded-md px-2 py-1"
              >
                <time dateTime={screening.date.toISOString()}>
                  {formatDateTime(screening.date, DateTimeFormat.TIME)}
                </time>
              </span>
            ),
          )}
      </div>
      <div className="w-full block space-x-3">
        {day.screenings[0].gauge && (
          <span className="rounded-lg bg-green-500 px-2 py-1 text-xs font-bold font-lexend uppercase">
            {getGauge(day.screenings[0].gauge)}
          </span>
        )}

        {subtitled && (
          <span className="rounded-lg bg-[#a20057] px-2 py-1 text-xs font-bold font-lexend uppercase">
            Subtitled
          </span>
        )}
      </div>
    </article>
  );
}

async function PastScreeningDay({ day }: { day: TScreeningDay<Screening> }) {
  const termAndWeekName = await getTermAndWeekName(day.day);
  return (
    <li>
      <time dateTime={day.day.toISOString()}>
        {formatDateTime(day.day, DateTimeFormat.DATE_MEDIUM)}
      </time>
      <span> ({termAndWeekName})</span>
      &nbsp;-&nbsp;
      {day.screenings
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((screening) => formatDateTime(screening.date, DateTimeFormat.TIME))
        .join(', ')}
    </li>
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
          where: {
            timestamp: { not: null },
          },
          orderBy: {
            timestamp: 'desc',
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

  const posterUrl = film.tmdb_poster_path
    ? getTmdbImageUrl(film.tmdb_poster_path)
    : 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg';
  const backdropUrl = film.tmdb_backdrop_path
    ? getTmdbImageUrl(film.tmdb_backdrop_path)
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
        <div className="mx-auto max-w-7xl px-4 xs:px-8 relative pt-24 md:pt-40 pb-36 md:pb-24">
          <div className="my-2 xs:my-0 xs:absolute w-full xs:w-36 sm:w-56 md:w-64 flex-shrink-0 z-20">
            <Image
              src={posterUrl}
              width={256}
              height={384}
              alt={`${film.title} Poster`}
              className="w-36 sm:w-56 md:w-64 box-shadow-lg"
              priority
            />

            {film.tmdb_genres && (
              <FilmGenreTags genreString={film.tmdb_genres} className="mt-3" />
            )}

            <div className="mt-3 text-sm hidden xs:block">
              {film.director && (
                <p className="mb-1">
                  <strong>Director: </strong>
                  {film.director}
                </p>
              )}
              {film.starring && (
                <p>
                  <strong>Starring: </strong>
                  {film.starring}
                </p>
              )}
            </div>

            {film.youtube_trailer_id && (
              <iframe
                src={`https://youtube.com/embed/${film.youtube_trailer_id}`}
                title="Film Trailer"
                allowFullScreen
                className="mt-3 w-64 hidden md:block"
              ></iframe>
            )}
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
              {film.tmdb_release_date && (
                <>
                  <span className="hidden md:inline">&nbsp;|&nbsp;</span>
                  <span>
                    <span className="font-lexend font-bold">
                      Release:&nbsp;
                    </span>
                    {formatDateTime(
                      new Date(film.tmdb_release_date),
                      DateTimeFormat.DATE_MEDIUM,
                    )}
                  </span>
                </>
              )}
              {film.director && (
                <span className="xs:hidden">
                  <span className="font-lexend font-bold">Director:&nbsp;</span>
                  {film.director}
                </span>
              )}
              {film.starring && (
                <span className="xs:hidden">
                  <span className="font-lexend font-bold">Starring:&nbsp;</span>
                  {film.starring}
                </span>
              )}
            </div>

            <Image
              src={backdropUrl}
              width={300}
              height={300}
              alt={`${film.title} Backdrop`}
              className="w-48 lg:w-72 float-right ml-2 hidden md:block"
              priority
            />
            <p>{film.synopsis || film.tmdb_overview}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 xs:px-8 -mt-36 md:-mt-24 z-10 relative">
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
            <div className="flex flex-col gap-2">
              {groupScreeningsByDay(upcomingScreenings)
                .reverse()
                .map(function (this: Film, day: TScreeningDay<Screening>) {
                  return (
                    <ScreeningDay
                      day={day}
                      key={day.dayTime}
                      subtitled={this.subtitles === FilmSubtitles.EXPECTED}
                    />
                  );
                }, film)}
            </div>
          </div>

          {film.youtube_trailer_id && (
            <iframe
              src={`https://youtube.com/embed/${film.youtube_trailer_id}`}
              title="Film Trailer"
              allowFullScreen
              className="mt-4 w-full h-56 sm:h-64 md:hidden"
            ></iframe>
          )}

          <h2 className="mt-6">Reviews</h2>
          {film.review && film.review !== '<p></p>' ? (
            <div
              dangerouslySetInnerHTML={{ __html: film.review.trim() }}
              className="content-style"
            />
          ) : (
            <div>
              There are currently no reviews for {film.title}. Want to write a
              review here, join a great team and get free tickets to our
              films?&nbsp;
              <Link
                href="/crew/publicity"
                target="_blank"
                className="text-accent"
              >
                Join the publicity team today!
              </Link>
            </div>
          )}

          <h2 className="mt-6">Past Screenings</h2>
          {pastScreenings.length === 0 ? (
            <div>
              This film has not been shown before at Warwick Student Cinema.
            </div>
          ) : (
            <div>
              This film has been shown {pastScreenings.length} time
              {pastScreenings.length === 1 ? '' : 's'} before at Warwick Student
              Cinema:
              <ul className="list-disc mt-1">
                {groupScreeningsByDay(pastScreenings).map(
                  (day: TScreeningDay<Screening>) => (
                    <PastScreeningDay day={day} key={day.dayTime} />
                  ),
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
