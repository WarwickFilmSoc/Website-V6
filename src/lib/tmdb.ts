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

const tmdbMovieCache: { [imdbId: string]: TmdbMovie | null } = {};

async function getTmdbMovieFromImdbId(
  imdbId: string,
): Promise<TmdbMovie | null> {
  await getTmdbGenres();
  if (tmdbMovieCache[imdbId] !== undefined) return tmdbMovieCache[imdbId];

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
  tmdbMovieCache[imdbId] = data.movie_results[0] || null;
  return tmdbMovieCache[imdbId];
}

type TmdbGenre = {
  id: number;
  name: string;
};

type TmdbListGenreResponse = {
  genres: TmdbGenre[];
};

let tmdbGenres: { [id: number]: string } | null = null;
async function getTmdbGenres(): Promise<{ [id: number]: string }> {
  if (tmdbGenres) return tmdbGenres;

  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?lang=en`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        accept: 'application/json',
      },
    },
  );
  if (!response.ok) return {};

  const data = (await response.json()) as TmdbListGenreResponse;
  tmdbGenres = {};
  for (const genre of data.genres) {
    tmdbGenres[genre.id] = genre.name;
  }
  return tmdbGenres;
}

export function getGenreName(id: number): string | null {
  return tmdbGenres?.[id] || null;
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

type TmdbVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: 'YouTube' | string;
  size: number;
  type: 'Trailer' | 'Featurette' | 'Clip' | string;
  official: boolean;
  id: string;
};

type TmdbGetVideoResponse = {
  id: number;
  results: TmdbVideo[];
};

let tmdbVideos: { [id: number]: string | null } = {};
export async function getYouTubeTrailer(
  tmdbId: number,
): Promise<string | null> {
  await getTmdbGenres();
  if (tmdbVideos[tmdbId] !== undefined) return tmdbVideos[tmdbId];

  const response = await fetch(
    ` https://api.themoviedb.org/3/movie/${tmdbId}/videos?language=en-GB`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        accept: 'application/json',
      },
    },
  );
  if (!response.ok) return null;

  const data = (await response.json()) as TmdbGetVideoResponse;
  const video = data.results
    .filter((video) => video.site === 'YouTube')
    .sort((a, b) => {
      if (a.type === 'Trailer' && b.type !== 'Trailer') return -1;
      else if (b.type === 'Trailer' && a.type !== 'Trailer') return 1;
      else if (a.official && !b.official) return -1;
      else if (b.official && !a.official) return 1;
      return 0;
    })[0];

  tmdbVideos[tmdbId] = video?.key || null;
  return tmdbVideos[tmdbId];
}
