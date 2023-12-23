import 'server-only';

import prisma from '@/lib/prisma';
import { TermDate } from '@prisma/client';
import dayjs from 'dayjs';
import { getTermDateName } from '@/lib/term-dates';
import { cache } from 'react';

const TERM_WEEK_LENGTH = 10;
const TERM_ADVANCE_WEEKS_LENGTH = 2;

export function getTerm(date: Date): Promise<TermDate | null> {
  return prisma.termDate.findFirst({
    where: {
      timestamp: {
        lte: dayjs(date).add(TERM_ADVANCE_WEEKS_LENGTH, 'weeks').unix(),
      },
    },
    orderBy: {
      timestamp: 'desc',
    },
  });
}

export const getNextTerm = cache(
  (currentTermTimestamp: number): Promise<TermDate | null> => {
    return prisma.termDate.findFirst({
      where: {
        timestamp: {
          gt: currentTermTimestamp,
        },
      },
      orderBy: {
        timestamp: 'asc',
      },
    });
  },
);

export const getLastTerm = cache(
  (currentTermTimestamp: number): Promise<TermDate | null> => {
    return prisma.termDate.findFirst({
      where: {
        timestamp: {
          lt: currentTermTimestamp,
        },
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
  },
);

export const getCurrentOrNextTerm = cache(
  async (): Promise<TermDate | null> => {
    const currentDate = new Date();
    const currentTermDate = await getTerm(currentDate);
    if (!currentTermDate) return null;

    if (
      dayjs
        .unix(currentTermDate.timestamp)
        .add(TERM_WEEK_LENGTH, 'weeks')
        .endOf('week')
        .isBefore(dayjs())
    ) {
      // Try next term
      const nextTerm = await getNextTerm(currentTermDate.timestamp);
      if (nextTerm) {
        if (
          (await prisma.screening.count({
            where: {
              timestamp: {
                gte: nextTerm.timestamp,
              },
            },
          })) > 0
        )
          return nextTerm;
      }
    }

    return currentTermDate;
  },
);

export type WeekData = {
  termName: string;
  weekName: string;
  weekNameShort: string;
  termAndWeekName: string;
  startDate: Date;
};

export async function getTermWeekData(date: Date): Promise<WeekData> {
  const term = await getTerm(date);
  return getTermWeekDataFromTerm(date, term);
}

export function getTermWeekDataFromTerm(
  date: Date,
  term: TermDate | null,
): WeekData {
  if (!term) {
    return {
      termName: date.getFullYear().toString(),
      weekName: date.getFullYear().toString(),
      weekNameShort: date.getFullYear().toString().slice(-2),
      termAndWeekName: date.getFullYear().toString(),
      startDate: dayjs().startOf('year').toDate(),
    };
  }

  const dateSecondsTimestamp = Math.floor(date.getTime() / 1000) + 60 * 6; // 6am to avoid issues with timezones

  let weekNumber = -TERM_ADVANCE_WEEKS_LENGTH + 1;
  let currentWeekStart = dayjs.unix(term.timestamp).subtract(2, 'weeks');
  while (weekNumber < 52) {
    currentWeekStart = currentWeekStart.add(1, 'week');
    if (dateSecondsTimestamp < currentWeekStart.unix()) break;
    weekNumber += 1;
  }
  const startDate = currentWeekStart.subtract(1, 'week').toDate();

  const termName = getTermDateName(term);

  if (weekNumber <= 0) {
    if (term.term === 1 && weekNumber === 0) {
      return {
        termName: `Welcome Week ${term.year}`,
        weekName: 'Welcome Week',
        weekNameShort: 'WW',
        termAndWeekName: `Welcome Week, ${termName}`,
        startDate,
      };
    }
    const weekName =
      weekNumber === 0
        ? 'Pre-Term Week'
        : `Pre-Term Week ${Math.abs(weekNumber)}, ${termName}`;
    return {
      termName: `Pre-${termName}`,
      weekName: weekName,
      weekNameShort: `P${Math.abs(weekNumber)}`,
      termAndWeekName: `${weekName}, ${termName}`,
      startDate,
    };
  }
  if (weekNumber > TERM_WEEK_LENGTH) {
    const weekName = `Vacation Week ${weekNumber - TERM_WEEK_LENGTH}`;
    return {
      termName: `${termName} Vacation`,
      weekName,
      weekNameShort: `V${weekNumber - TERM_WEEK_LENGTH}`,
      termAndWeekName: `${weekName}, ${termName}`,
      startDate,
    };
  }

  const weekName = `Week ${weekNumber}`;
  return {
    termName,
    weekName,
    weekNameShort: `W${weekNumber}`,
    termAndWeekName: `${weekName}, ${termName}`,
    startDate,
  };
}

export async function getTermName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).termName;
}

export function getTermNameFromTerm(date: Date, term: TermDate | null): string {
  return getTermWeekDataFromTerm(date, term).termName;
}

export async function getWeekName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).weekName;
}

export async function getTermAndWeekName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).termAndWeekName;
}

export function getPreTermStartUnixTimestamp(term: TermDate): number {
  return dayjs
    .unix(term.timestamp)
    .subtract(TERM_ADVANCE_WEEKS_LENGTH, 'weeks')
    .unix();
}

export function getTermEndUnixTimestamp(term: TermDate): number {
  return dayjs
    .unix(term.timestamp)
    .add(TERM_WEEK_LENGTH, 'weeks')
    .endOf('week')
    .unix();
}

export async function getTermListByYear(
  maxTerm?: TermDate,
): Promise<TermDate[][]> {
  const terms = await prisma.termDate.findMany({
    where: {
      timestamp: {
        lte: maxTerm?.timestamp,
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  });

  const years: TermDate[][] = [];

  let currentYear: TermDate[] = [];
  for (const term of terms) {
    if (term.year !== currentYear[0]?.year) {
      if (currentYear.length > 0) years.push(currentYear);
      currentYear = [term];
    } else currentYear.push(term);
  }
  if (currentYear.length > 0) years.push(currentYear);

  return years.reverse();
}
