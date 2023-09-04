'use client';
import { FilmSearchResult, FilmSearchResultData } from '@/app/api/films/types';
import wscLogo from '@/assets/logos/logo-white.png';
import LoadingFilmCard from '@/components/films/LoadingFilmCard';
import ScreeningsHr from '@/components/films/ScreeningsHr';
import FilmGenreTags from '@/components/films/film-genre-tags';
import {
  DateTimeFormat,
  formatDateTime,
  formatSecondsTimestamp,
  timestampToDate,
} from '@/lib/date';
import { getFilmPrettyUrl, getFilmTitle } from '@/lib/film';
import { getTmdbImageUrl } from '@/lib/tmdb';
import { useQuery } from '@tanstack/react-query';
import { TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export function Film({
  film,
  upcoming,
}: {
  film: FilmSearchResult;
  upcoming: boolean;
}) {
  // show WSC logo if no film backdrop
  const imageSrc = film.tmdb_backdrop_path
    ? getTmdbImageUrl(film.tmdb_backdrop_path)
    : wscLogo;

  let mostRecentScreening =
    film.screenings.length > 0 && film.screenings[0].timestamp
      ? film.screenings[0]
      : null;

  const getTimestamp = (x: bigint) => Number(x) * 1000;

  if (upcoming) {
    const currentDate = Date.now();

    // loop over all screenings until the one closest in the future is found
    let i = 0;
    let current = mostRecentScreening;
    while (
      i < film.screenings.length &&
      film.screenings[i].timestamp !== null &&
      getTimestamp(film.screenings[i].timestamp as bigint) > currentDate
    ) {
      current = film.screenings[i];
      i++;
    }

    mostRecentScreening = current;
  }

  return (
    <Link href={getFilmPrettyUrl(film)} className="group mb-6">
      <article>
        <div className="w-full h-40 overflow-hidden mb-2">
          <Image
            src={imageSrc}
            alt={`${film.title} Backdrop`}
            width={300}
            height={150}
            className="w-full h-full object-cover group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <p className="text-lg font-lexend uppercase font-bold leading-6">
          {getFilmTitle(film)}
        </p>

        {film.tmdb_genres && (
          <FilmGenreTags genreString={film.tmdb_genres} className="mt-1" />
        )}

        <p className="mt-2 text-sm font-lexend uppercase leading-6">
          {mostRecentScreening !== null && mostRecentScreening.timestamp ? (
            <>
              {upcoming ? 'Next' : 'Last'} Screening:&nbsp;
              {upcoming
                ? formatSecondsTimestamp(mostRecentScreening.timestamp)
                : formatDateTime(
                    timestampToDate(mostRecentScreening.timestamp),
                    DateTimeFormat.DATE_MEDIUM,
                  )}
            </>
          ) : (
            'Never shown'
          )}
        </p>
      </article>
    </Link>
  );
}

export default function FilmSearch() {
  const searchParams = useSearchParams();
  const searchSearchParam = searchParams.get('search') || '';
  const [search, setSearch] = useState(searchSearchParam);
  const [debouncedSearch] = useDebounce(search, 200, {
    maxWait: 1000,
  });
  const { data, isLoading, isSuccess } = useQuery<FilmSearchResultData>(
    [`/api/films?search=${debouncedSearch}`],
    { enabled: !!debouncedSearch },
  );

  useEffect(() => {
    setSearch(searchSearchParam);
  }, [searchSearchParam]);

  return (
    <div>
      <p className="mt-3 mb-2">Search for a film</p>
      <div className="mb-4">
        <TextInput
          id="film-name"
          placeholder="Everything Everywhere All At Once"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {debouncedSearch && (
        <>
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
              <LoadingFilmCard />
              <LoadingFilmCard />
              <LoadingFilmCard />
            </div>
          )}

          {isSuccess &&
          (!data || (data.past.length === 0 && data.future.length === 0)) ? (
            <p>
              That film is not scheduled to appear and has never been shown at
              WSC before. Why not&nbsp;
              <Link className="text-accent" href="/suggestions">
                suggest it
              </Link>
              ?
            </p>
          ) : (
            <Screenings past={data?.past || []} future={data?.future || []} />
          )}
        </>
      )}
    </div>
  );
}

function Screenings({
  past,
  future,
}: {
  past: FilmSearchResult[];
  future: FilmSearchResult[];
}) {
  return (
    <>
      {future.length > 0 && (
        <div>
          <ScreeningsHr text="Upcoming Screenings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
            {future.map((film) => (
              <Film film={film} key={film.film_id} upcoming={true} />
            ))}
          </div>
        </div>
      )}
      {past.length > 0 && (
        <div>
          <ScreeningsHr text="Past Screenings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-between">
            {past.map((film) => (
              <Film film={film} key={film.film_id} upcoming={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
