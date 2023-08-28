import { Prisma } from '@prisma/client';

export type FilmSearchResult = Prisma.FilmGetPayload<{
  select: {
    title: true;
    year: true;
    film_id: true;
    screenings: {
      select: {
        timestamp: true;
      };
    };
  };
}>;

export type FilmSearchResponse = {
  success: true;
  data: FilmSearchResult[];
};
