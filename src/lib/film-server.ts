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
import { getTermWeekData, WeekData } from '@/lib/term-dates';

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

export async function groupScreeningDaysByTermWeek<
  TScreening extends BaseScreening,
>(
  screeningDays: TScreeningDay<TScreening>[],
): Promise<TScreeningWeek<TScreening>[]> {
  const screeningWeeks: TScreeningWeek<TScreening>[] = [];

  let currentWeek: TScreeningWeek<TScreening> | null = null;
  for (const screeningDay of screeningDays) {
    const weekData = await getTermWeekData(screeningDay.day);
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
