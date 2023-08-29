import { Film } from '@prisma/client';

const tmdbImageUrlBase = 'https://image.tmdb.org/t/p/original/';

function getImdbIdFromUrl(url: string): string | null {
  const match = url.match(/imdb\.com\/title\/(tt[0-9]+)/i);
  if (match) return match[1];
  else return null;
}

export type TmdbMovie = {
  adult: boolean;
  backdrop_path?: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: 'movie';
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TmdbFindMovieResponse = {
  movie_results: TmdbMovie[];
};

const tmdbCache: { [imdbId: string]: TmdbMovie | null } = {};

async function getTmdbMovieFromImdbId(
  imdbId: string,
): Promise<TmdbMovie | null> {
  if (tmdbCache[imdbId] !== undefined) return tmdbCache[imdbId];

  const response = await fetch(
    `https://api.themoviedb.org/3/find/${imdbId}?external_source=imdb_id`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        accept: 'application/json',
      },
    },
  );
  if (!response.ok) return null;

  const data = (await response.json()) as TmdbFindMovieResponse;
  tmdbCache[imdbId] = data.movie_results[0] || null;
  return tmdbCache[imdbId];
}

export function getTmdbImageUrl(url: string): string {
  return `${tmdbImageUrlBase}${url}`;
}

export async function getTmdbMovie(film: Film): Promise<TmdbMovie | null> {
  if (!film.imdb_url) return null;
  const imdbId = getImdbIdFromUrl(film.imdb_url);
  if (!imdbId) return null;

  return await getTmdbMovieFromImdbId(imdbId);
}
