import prisma from '@/lib/prisma';
import { TermDate } from '@prisma/client';
import dayjs from 'dayjs';

const TERM_WEEK_LENGTH = 10;
const TERM_ADVANCE_WEEKS_LENGTH = 2;

function getTerm(date: Date): Promise<TermDate | null> {
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

function convertTermNumberToName(no: number): string {
  switch (no) {
    case 1:
      return 'Autumn';
    case 2:
      return 'Spring';
    case 3:
      return 'Summer';
    default:
      return '';
  }
}

export async function getTermWeekData(date: Date): Promise<{
  termName: string;
  weekName: string;
  termAndWeekName: string;
}> {
  const term = await getTerm(date);
  if (!term)
    return {
      termName: date.getFullYear().toString(),
      weekName: date.getFullYear().toString(),
      termAndWeekName: date.getFullYear().toString(),
    };

  const dateSecondsTimestamp = Math.floor(date.getTime() / 1000) + 60 * 6; // 6am to avoid issues with timezones

  let weekNumber = -TERM_ADVANCE_WEEKS_LENGTH + 1;
  let currentWeekStart = dayjs.unix(term.timestamp).subtract(2, 'weeks');
  while (weekNumber < 52) {
    currentWeekStart = currentWeekStart.add(1, 'week');
    if (dateSecondsTimestamp < currentWeekStart.unix()) break;
    weekNumber += 1;
  }

  const termName = `${convertTermNumberToName(term.term)} ${
    term.term > 1 ? term.year + 1 : term.year
  }`;

  if (weekNumber <= 0) {
    if (term.term === 1 && weekNumber === 0) {
      return {
        termName: `Welcome Week ${term.year}`,
        weekName: 'Welcome Week',
        termAndWeekName: `Welcome Week, ${termName}`,
      };
    }
    const weekName =
      weekNumber === 0
        ? 'Pre-Term Week'
        : `Pre-Term Week ${Math.abs(weekNumber)}, ${termName}`;
    return {
      termName: `Pre-${convertTermNumberToName(term.term)} ${
        term.term > 1 ? term.year + 1 : term.year
      }`,
      weekName: weekName,
      termAndWeekName: `${weekName}, ${termName}`,
    };
  }
  if (weekNumber > TERM_WEEK_LENGTH) {
    const weekName = `Vacation Week ${weekNumber - TERM_WEEK_LENGTH}`;
    return {
      termName: `${convertTermNumberToName(term.term)} ${
        term.term > 1 ? term.year + 1 : term.year
      } Vacation`,
      weekName,
      termAndWeekName: `${weekName}, ${termName}`,
    };
  }

  const weekName = `Week ${weekNumber}`;
  return {
    termName,
    weekName,
    termAndWeekName: `${weekName}, ${termName}`,
  };
}

export async function getTermName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).termName;
}

export async function getWeekName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).weekName;
}

export async function getTermAndWeekName(date: Date): Promise<string> {
  return (await getTermWeekData(date)).termAndWeekName;
}
