import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { FilmSearchResponse } from '@/app/api/films/types';

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

  return NextResponse.json<FilmSearchResponse>({
    success: true,
    data: films,
  });
}
