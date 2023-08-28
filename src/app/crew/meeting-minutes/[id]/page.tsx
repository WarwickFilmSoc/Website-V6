import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Meeting } from '@prisma/client';
import { getMeetingTypeString } from '@/app/crew/meeting-minutes/meetings';
import LargeButtonLink from '@/components/large-button-link';

export async function generateStaticParams() {
  const meetings = await prisma.meeting.findMany({
    where: {
      visible: 1,
    },
    orderBy: [
      {
        meeting_date: 'desc',
      },
    ],
  });
  return meetings.map((meeting: Meeting) => ({ id: meeting.id.toString() }));
}

export default async function MeetingMinutes({
  params: { id },
}: {
  params: { id: string };
}) {
  const numericId = parseInt(id);
  let meeting;

  if (!Number.isNaN(numericId)) {
    meeting = await prisma.meeting.findFirst({
      where: {
        id: numericId,
        visible: 1,
      },
    });
  }

  if (!meeting)
    return (
      <main>
        <p className="text-xl font-lexend uppercase -mb-1">
          <Link href="/crew/meeting-minutes">Meeting Minutes</Link>
        </p>
        <h1 className="mb-1">Meeting Not Found</h1>

        <p className="mb-4">
          Unfortunately, the meeting you were looking for could not be found. If
          you think this is a mistake, please email&nbsp;
          <a
            href="mailto:exec@warwick.film"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            exec@warwick.film
          </a>
          .
        </p>

        <LargeButtonLink href="/crew/meeting-minutes">
          Back to Meetings
        </LargeButtonLink>
      </main>
    );

  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew/meeting-minutes">Meeting Minutes</Link>
      </p>
      <h1 className="mb-1">
        {getMeetingTypeString(meeting.type)} -{' '}
        {meeting.meeting_date.toLocaleString(undefined, {
          weekday: 'long',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </h1>

      <p className="whitespace-pre-wrap">{meeting.text}</p>
    </main>
  );
}
