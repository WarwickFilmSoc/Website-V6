type TabulaTerm = {
  name:
    | 'Pre-term vacation'
    | 'Autumn'
    | 'Christmas vacation'
    | 'Spring'
    | 'Easter vacation'
    | 'Summer'
    | 'Summer vacation'
    | string;
  weekRange: { minWeek: number; maxWeek: number };
  academicYear: string;
  end: string;
  start: string;
};

type TabulaTermDatesResponse = {
  success: true;
  status: 'ok';
  terms: TabulaTerm[];
};

const tabulaTermDatesCache: { [year: number]: TabulaTerm[] } = {};

// Academic year on Tabula starts on 1st August. First tabula year is 2006.
async function getTabulaTermDates(yearStart: number): Promise<TabulaTerm[]> {
  if (yearStart < 2006) return [];
  if (tabulaTermDatesCache[yearStart]) return tabulaTermDatesCache[yearStart];

  const response = await fetch(
    `https://tabula.warwick.ac.uk/api/v1/termdates/${yearStart}`,
    {
      next: { revalidate: 86400 }, // 24 hours
    },
  );
  if (!response.ok) return [];

  const data = (await response.json()) as TabulaTermDatesResponse;
  tabulaTermDatesCache[yearStart] = data.terms;
  return data.terms;
}

export async function getTabulaTermName(date: Date): Promise<string> {
  date = new Date(date);
  let academicYear = date.getUTCFullYear();
  if (date.getUTCMonth() < 7) academicYear -= 1;
  date.setHours(0, 0, 0, 0);

  const academicYearTermDates = await getTabulaTermDates(academicYear);
  for (const term of academicYearTermDates) {
    const endDate = new Date(term.end);
    if (date.getTime() > endDate.getTime()) continue;

    if (term.name === 'Pre-term vacation')
      return `Summer vacation ${date.getUTCFullYear()}`;
    else return `${term.name} ${date.getUTCFullYear()}`;
  }
  return date.getUTCFullYear().toString();
}
