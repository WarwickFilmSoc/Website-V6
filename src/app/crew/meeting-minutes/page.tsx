import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function MeetingMinutes() {
  const meetings = await prisma.meetings.findMany({
    where: {
      visible: 1,
    },
    select: {
      id: true,
      meeting_date: true,
      type: true,
    },
    orderBy: [
      {
        meeting_date: 'desc',
      },
    ],
  });
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">Meeting Minutes</h1>
      <div className="flex gap-4 flex-wrap">
        {meetings.map((meeting) => (
          <article key={meeting.id} className="bg-primary p-2">
            {meeting.meeting_date.toDateString()}
          </article>
        ))}
      </div>
    </main>
  );
}
