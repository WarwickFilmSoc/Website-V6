import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { FilmSearchResponse, FilmSearchResult } from '@/app/api/films/types';

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search');
  if (!search)
    return NextResponse.json(
      {
        success: false,
        error: 'Search value not provided',
      },
      { status: 422 },
    );

  const films = await prisma.film.findMany({
    where: {
      title: {
        contains: search,
      },
    },
    select: {
      title: true,
      year: true,
      film_id: true,
      tmdb_backdrop_path: true,
      tmdb_genres: true,
      screenings: {
        orderBy: {
          timestamp: 'desc',
        },
        select: {
          timestamp: true,
        },
        take: 25,
      },
    },
    orderBy: [{ year: 'desc' }, { title: 'asc' }],
    take: 100,
  });

  let past: FilmSearchResult[] = [];
  let future: FilmSearchResult[] = [];
  const currentDate = Date.now();
  for (const film of films) {
    if (film.screenings.length > 0 && film.screenings[0].timestamp) {
      const screeningDate = Number(film.screenings[0].timestamp) * 1000;

      screeningDate > currentDate ? future.push(film) : past.push(film);
    } else {
      past.push(film);
    }
  }

  return NextResponse.json<FilmSearchResponse>({
    success: true,
    data: {
      past: past,
      future: future,
    },
  });
}
