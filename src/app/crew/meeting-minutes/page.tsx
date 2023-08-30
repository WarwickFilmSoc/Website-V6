import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Meeting } from '@prisma/client';
import { getTabulaTermName } from '@/lib/tabula';
import {
  getMeetingTypeIcon,
  getMeetingTypeString,
} from '@/app/crew/meeting-minutes/meetings';
import LargeButtonLink from '@/components/large-button-link';
import { Metadata } from 'next';
import { DateTimeFormat, formatDateTime } from '@/lib/date';

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
    skip: pageNumber * 25,
    take: 25,
  });

  let terms: { name: string; meetings: Meeting[] }[] = [];
  let currentTerm: { name: string; meetings: Meeting[] } | null = null;
  for (const meeting of meetings) {
    let meetingTerm = await getTabulaTermName(meeting.meeting_date);
    if (!currentTerm || meetingTerm !== currentTerm.name) {
      if (currentTerm) terms.push(currentTerm);
      currentTerm = { name: meetingTerm, meetings: [meeting] };
    } else currentTerm.meetings.push(meeting);
  }
  if (currentTerm) terms.push(currentTerm);

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

      {terms.length === 0 ? (
        <p>
          {pageNumber === 0
            ? 'There are currently no meetings stored. Please check back later!'
            : 'There are no remaining meetings on this page.'}
        </p>
      ) : (
        terms.map((term) => (
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
