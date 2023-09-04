import LargeButtonLink from '@/components/large-button-link';
import FilmSchedule from '@/app/(whats-on)/schedule/film-schedule';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import { getTermDateName } from '@/lib/term-dates';
import Link from 'next/link';

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
    title: `${termDateName} Schedule`,
    openGraph: {
      title: `${termDateName} at Warwick Student Cinema`,
    },
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
      <div className="mx-auto max-w-7xl px-4 xs:px-8">
        <LargeButtonLink
          href="/schedule"
          className="mb-2 md:mb-0 md:float-right"
        >
          Back to Current Term
        </LargeButtonLink>
        <h1 className="mb-1">Schedule Archive</h1>
        <p className="mb-8">
          You can find the schedules for all our previous terms here, or search
          for a specific film using&nbsp;
          <Link href="/films" className="text-accent">
            the film search tool
          </Link>
          . If you&apos;re looking for the past publicity that we&apos;ve
          created, take a look at the&nbsp;
          <Link href="/publicity" className="text-accent">
            publicity
          </Link>
          &nbsp;page.
        </p>

        {!termDate && <p>That term could not be found.</p>}
      </div>

      {termDate && <FilmSchedule term={termDate} />}
    </main>
  );
}
