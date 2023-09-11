import { TermDate } from '@prisma/client';

export function convertTermNumberToName(no: number): string {
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

export function getTermDateName(term: TermDate): string {
  return `${convertTermNumberToName(term.term)} ${
    term.term > 1 ? term.year + 1 : term.year
  }`;
}
