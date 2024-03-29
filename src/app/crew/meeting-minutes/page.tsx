import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Meeting, TermDate } from '@prisma/client';
import {
  getMeetingTypeIcon,
  getMeetingTypeString,
} from '@/app/crew/meeting-minutes/meetings';
import LargeButtonLink from '@/components/large-button-link';
import { Metadata } from 'next';
import { DateTimeFormat, formatDateTime } from '@/lib/date';
import {
  getPreTermStartUnixTimestamp,
  getTerm,
  getTermNameFromTerm,
} from '@/lib/term-dates-server';

export const metadata: Metadata = {
  title: 'Meeting Minutes',
  description:
    'Many of our teams have weekly meetings to discuss the shows in the previous week and any procedure changes. Most of our meetings are open to all WSC members, and the minutes can be found on this page.',
};

export default async function MeetingMinutes({
  searchParams: { page },
}: {
  searchParams: { page?: string | string[] | undefined };
}) {
  let pageNumber = page && !Array.isArray(page) && parseInt(page);
  pageNumber =
    pageNumber && !isNaN(pageNumber) && pageNumber > 0 ? pageNumber : 0;

  const meetings = await prisma.meeting.findMany({
    where: {
      visible: 1,
    },
    orderBy: [
      {
        meeting_date: 'desc',
      },
    ],
    skip: pageNumber * 50,
    take: 50,
  });

  let termPeriods: { name: string; meetings: Meeting[] }[] = [];
  let currentTerm: TermDate | null = null;
  let currentTermPeriod: { name: string; meetings: Meeting[] } | null = null;
  for (const meeting of meetings) {
    if (
      !currentTerm ||
      meeting.meeting_date.getTime() <
        getPreTermStartUnixTimestamp(currentTerm) * 1000
    ) {
      currentTerm = await getTerm(meeting.meeting_date);
    }

    if (
      !currentTermPeriod ||
      currentTermPeriod.name !==
        getTermNameFromTerm(meeting.meeting_date, currentTerm)
    ) {
      if (currentTermPeriod) termPeriods.push(currentTermPeriod);
      currentTermPeriod = {
        name: getTermNameFromTerm(meeting.meeting_date, currentTerm),
        meetings: [meeting],
      };
    } else currentTermPeriod.meetings.push(meeting);
  }
  if (currentTermPeriod) termPeriods.push(currentTermPeriod);

  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">Meeting Minutes</h1>
      <p className="mb-4">
        Many of our teams have weekly meetings to discuss the shows in the
        previous week and any procedure changes. Most of our meetings are open
        to all WSC members, and the minutes can be found on this page.
      </p>

      {termPeriods.length === 0 ? (
        <p>
          {pageNumber === 0
            ? 'There are currently no meetings stored. Please check back later!'
            : 'There are no remaining meetings on this page.'}
        </p>
      ) : (
        termPeriods.map((term) => (
          <div key={term.name} className="mb-8">
            <h2 className="mb-2">{term.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {term.meetings.map((meeting) => {
                const Icon = getMeetingTypeIcon(meeting.type);
                return (
                  <Link
                    href={`/crew/meeting-minutes/${meeting.id}`}
                    key={meeting.id}
                    className="bg-primary hover:brightness-75 px-4 py-2"
                  >
                    <div className="flex items-center">
                      <Icon className="text-2xl mr-2" />
                      <p className="text-lg">
                        {getMeetingTypeString(meeting.type)}
                      </p>
                    </div>
                    <time
                      dateTime={meeting.meeting_date.toISOString()}
                      className="text-sm"
                    >
                      {formatDateTime(
                        meeting.meeting_date,
                        DateTimeFormat.DATETIME_MEDIUM,
                      )}
                    </time>
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      )}

      <div className="flex gap-4 mt-12">
        {pageNumber > 0 && (
          <LargeButtonLink
            href={
              pageNumber === 1
                ? '/crew/meeting-minutes'
                : `/crew/meeting-minutes?page=${pageNumber - 1}`
            }
            className="mr-auto w-min xs:w-auto"
          >
            Previous Page
          </LargeButtonLink>
        )}
        {meetings.length === 25 && (
          <LargeButtonLink
            href={`/crew/meeting-minutes?page=${pageNumber + 1}`}
            className="ml-auto w-min xs:w-auto"
          >
            Next Page
          </LargeButtonLink>
        )}
      </div>
    </main>
  );
}
