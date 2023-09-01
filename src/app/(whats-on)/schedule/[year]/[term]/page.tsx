import LargeButtonLink from '@/components/large-button-link';
import FilmSchedule from '@/app/(whats-on)/schedule/film-schedule';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import { getTermDateName } from '@/lib/term-dates';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const termDates = await prisma.termDate.findMany();
  return termDates.map((termDate) => ({
    term: termDate.term.toString(),
    year: termDate.year.toString(),
  }));
}

export async function generateMetadata({
  params: { year, term },
}: {
  params: { year: string; term: string };
}): Promise<Metadata> {
  const yearInt = parseInt(year);
  const termInt = parseInt(term);

  const termDate =
    !isNaN(yearInt) &&
    !isNaN(termInt) &&
    (await prisma.termDate.findFirst({
      where: {
        term: termInt,
        year: yearInt,
      },
    }));

  if (!termDate)
    return {
      title: 'Term Not Found',
      description: 'That term could not be found.',
    };

  const termDateName = getTermDateName(termDate);
  return {
    title: `${termDateName} at Warwick Student Cinema`,
    description: `Read our full schedule for ${termDateName}.`,
  };
}

export default async function ScheduleArchive({
  params: { year, term },
}: {
  params: { year: string; term: string };
}) {
  const yearInt = parseInt(year);
  const termInt = parseInt(term);

  const termDate =
    !isNaN(yearInt) &&
    !isNaN(termInt) &&
    (await prisma.termDate.findFirst({
      where: {
        term: termInt,
        year: yearInt,
      },
    }));

  return (
    <main className="max-w-9xl">
      <div className="mx-auto max-w-7xl">
        <LargeButtonLink href="/whats-on" className="float-right">
          Normal View
        </LargeButtonLink>
        <h1 className="mb-1">Term Schedule Archive</h1>
        <p className="mb-6">
          Come and watch films in our fully-equipped L3 lecture theatre, and
          come to our other events throughout the term too. All our screenings
          are open to both members of the public and of Warwick University.
        </p>

        {!termDate && <p>That term could not be found.</p>}
      </div>

      {termDate && <FilmSchedule term={termDate} />}
    </main>
  );
}
