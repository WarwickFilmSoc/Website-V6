import { Prisma } from '@prisma/client';

export type FilmSearchResult = Prisma.FilmGetPayload<{
  select: {
    title: true;
    year: true;
    film_id: true;
    runtime: true;
    cert: true;
    tmdb_backdrop_path: true;
    tmdb_genres: true;
    screenings: {
      select: {
        timestamp: true;
      };
    };
  };
}>;

export type FilmSearchResultData = {
  future: FilmSearchResult[];
  past: FilmSearchResult[];
};

export type FilmSearchResponse = {
  success: true;
  data: FilmSearchResultData;
};
