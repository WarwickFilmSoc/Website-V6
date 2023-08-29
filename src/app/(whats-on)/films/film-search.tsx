'use client';
import { useQuery } from '@tanstack/react-query';
import { FilmSearchResult } from '@/app/api/films/types';
import { useEffect, useState } from 'react';
import { TextInput } from 'flowbite-react';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { getFilmPrettyUrl, getFilmTitle } from '@/lib/film';
import { formatSecondsTimestamp } from '@/lib/date';
import { useSearchParams } from 'next/navigation';

export function Film({ film }: { film: FilmSearchResult }) {
  return (
    <article>
      <Link href={getFilmPrettyUrl(film)} className="block bg-primary p-4">
        <p className="font-lexend font-bold text-xl">{getFilmTitle(film)}</p>
        <p>
          Last Screening:&nbsp;
          {film.screenings.length > 0 && film.screenings[0].timestamp
            ? formatSecondsTimestamp(film.screenings[0].timestamp)
            : 'None'}
        </p>
      </Link>
    </article>
  );
}

export default function FilmSearch() {
  const searchParams = useSearchParams();
  const searchSearchParam = searchParams.get('search') || '';
  const [search, setSearch] = useState(searchSearchParam);
  const [debouncedSearch] = useDebounce(search, 200, {
    maxWait: 1000,
  });
  const { data, isLoading } = useQuery<FilmSearchResult[]>(
    [`/api/films?search=${debouncedSearch}`],
    { enabled: !!debouncedSearch },
  );
  useEffect(() => setSearch(searchSearchParam || ''), [searchSearchParam]);

  return (
    <div>
      <p>Search for a film</p>
      <div className="mb-4">
        <TextInput
          id="username"
          placeholder="Everything Everywhere All At Once"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {debouncedSearch && (
        <div className="flex flex-wrap gap-4">
          {isLoading ? (
            <p>Loading..</p>
          ) : !data || data.length === 0 ? (
            <p>None</p>
          ) : (
            data?.map((film) => <Film film={film} key={film.film_id} />)
          )}
        </div>
      )}
    </div>
  );
}
