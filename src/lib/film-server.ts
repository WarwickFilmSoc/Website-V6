import 'server-only';

import prisma from '@/lib/prisma';
import { BaseScreening, Cert, TScreeningDay } from '@/lib/film';
import certUSvg from '@/assets/films/certifications/u.svg';
import certPgSvg from '@/assets/films/certifications/pg.svg';
import cert12aSvg from '@/assets/films/certifications/12a.svg';
import cert12Svg from '@/assets/films/certifications/12.svg';
import cert15Svg from '@/assets/films/certifications/15.svg';
import cert18Svg from '@/assets/films/certifications/18.svg';
import { StaticImageData } from 'next/image';
import {
  getNextTerm,
  getPreTermStartUnixTimestamp,
  getTerm,
  getTermWeekDataFromTerm,
  WeekData,
} from '@/lib/term-dates-server';
import { Prisma, TermDate } from '@prisma/client';
import FilmGetPayload = Prisma.FilmGetPayload;
import { cache } from 'react';

export const getFilm = cache(
  async (
    id: number,
  ): Promise<FilmGetPayload<{
    include: { screenings: true };
  }> | null> => {
    return prisma.film.findFirst({
      where: {
        film_id: id,
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
  },
);

export async function getFilmAspectRatio(
  aspectCode: number,
): Promise<string | null> {
  const ratio = await prisma.aspectCode.findUnique({
    where: { code: aspectCode },
  });
  if (ratio) return ratio.description;
  return null;
}

export function getCertSvg(cert: Cert): StaticImageData | null {
  switch (cert) {
    case Cert.CERT_U:
      return certUSvg;
    case Cert.CERT_PG:
      return certPgSvg;
    case Cert.CERT_12:
      return cert12Svg;
    case Cert.CERT_12A:
      return cert12aSvg;
    case Cert.CERT_15:
      return cert15Svg;
    case Cert.CERT_18:
      return cert18Svg;
    default:
      return null;
  }
}

export type TScreeningWeek<TScreening extends BaseScreening> = {
  weekData: WeekData;
  screeningDays: TScreeningDay<TScreening>[];
};

// Screening days must be ordered in ascending order
export async function groupScreeningDaysByTermWeek<
  TScreening extends BaseScreening,
>(
  screeningDays: TScreeningDay<TScreening>[],
): Promise<TScreeningWeek<TScreening>[]> {
  const screeningWeeks: TScreeningWeek<TScreening>[] = [];

  let currentWeek: TScreeningWeek<TScreening> | null = null;
  let currentTerm: TermDate | null = null;
  let nextTerm: TermDate | null = null;
  for (const screeningDay of screeningDays) {
    if (!currentTerm) currentTerm = await getTerm(screeningDay.day);
    else if (
      nextTerm &&
      nextTerm.timestamp <= getPreTermStartUnixTimestamp(nextTerm)
    ) {
      currentTerm = nextTerm;
      nextTerm = null;
    }
    if (currentTerm && !nextTerm)
      nextTerm = await getNextTerm(currentTerm.timestamp);

    const weekData = getTermWeekDataFromTerm(screeningDay.day, currentTerm);
    if (
      currentWeek &&
      currentWeek.weekData.termAndWeekName === weekData.termAndWeekName
    ) {
      currentWeek.screeningDays.push(screeningDay);
    } else {
      if (currentWeek) screeningWeeks.push(currentWeek);
      currentWeek = {
        weekData,
        screeningDays: [screeningDay],
      };
    }
  }
  if (currentWeek) screeningWeeks.push(currentWeek);

  return screeningWeeks;
}
