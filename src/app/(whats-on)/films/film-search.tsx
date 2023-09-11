'use client';
import { FilmSearchResult, FilmSearchResultData } from '@/app/api/films/types';
import FilmLayoutDivider from '@/components/films/film-layout-divider';
import {
  DateTimeFormat,
  formatDateTime,
  formatSecondsTimestamp,
  timestampToDate,
} from '@/lib/date';
import { useQuery } from '@tanstack/react-query';
import { TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import FilmLayout from '@/components/films/film-layout';
import FilmCard from '@/components/films/film-card';

export function Film({
  film,
  upcoming,
}: {
  film: FilmSearchResult;
  upcoming: boolean;
}) {
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
    <FilmCard
      film={film}
      footer={
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
      }
    />
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
          {isLoading && <FilmLayout loading />}

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
            <Screenings
              past={data?.past.filter((x) => x.screenings.length > 0) || []}
              future={data?.future.filter((x) => x.screenings.length > 0) || []}
            />
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
          <FilmLayoutDivider text="Upcoming Screenings" />
          <FilmLayout>
            {future.map((film) => (
              <Film film={film} key={film.film_id} upcoming={true} />
            ))}
          </FilmLayout>
        </div>
      )}
      {past.length > 0 && (
        <div>
          <FilmLayoutDivider text="Past Screenings" />
          <FilmLayout>
            {past.map((film) => (
              <Film film={film} key={film.film_id} upcoming={false} />
            ))}
          </FilmLayout>
        </div>
      )}
    </>
  );
}
