import FilmLayout from '@/components/films/film-layout';
import prisma from '@/lib/prisma';
import FilmCard from '@/components/films/film-card';
import { Film, Screening } from '@prisma/client';
import { DateTimeFormat, formatDateTime } from '@/lib/date';

export default async function ShowsWatched({ personId }: { personId: number }) {
  const ticketLog = await prisma.ticketLog.findMany({
    where: {
      mem_id: personId,
      screening: {
        isNot: null,
      },
    },
    orderBy: {
      screening: {
        timestamp: 'desc',
      },
    },
    include: {
      screening: {
        include: {
          film: true,
        },
      },
    },
  });

  // Group tickets by screening
  const screenings: (Screening & { film: Film; ticketCount: number })[] = [];
  let currentScreening:
    | (Screening & { film: Film; ticketCount: number })
    | null = null;
  for (const ticket of ticketLog) {
    if (!ticket.screening) continue;
    if (ticket.event_id !== currentScreening?.scr_id) {
      if (currentScreening) screenings.push(currentScreening);
      currentScreening = {
        ...ticket.screening,
        ticketCount: 1,
      };
    } else if (currentScreening) currentScreening.ticketCount++;
  }
  if (currentScreening) screenings.push(currentScreening);

  return (
    <div>
      <p className="mb-4">
        You&apos;ve watched {screenings.length} show
        {screenings.length === 1 ? '' : 's'} and purchased&nbsp;
        {ticketLog.length} ticket{screenings.length === 1 ? '' : 's'} at Warwick
        Student Cinema.
      </p>
      <FilmLayout>
        {screenings.map((screening) => (
          <FilmCard
            film={screening.film}
            key={screening.scr_id}
            header={
              <div className="flex justify-between items-center mb-1 flex-wrap">
                <div className="uppercase font-lexend mr-1">
                  <span>
                    {formatDateTime(
                      new Date(Number(screening.timestamp) * 1000),
                      DateTimeFormat.WEEKDAY_DATE_MONTH,
                    )}
                  </span>
                </div>
                <div className="flex text-xs gap-1">
                  <time
                    dateTime={new Date(
                      Number(screening.timestamp) * 1000,
                    ).toISOString()}
                    className="bg-primary rounded-md px-1 py-0.5 group-hover:scale-105"
                    key={screening.scr_id}
                  >
                    {formatDateTime(
                      new Date(Number(screening.timestamp) * 1000),
                      DateTimeFormat.TIME,
                    )}
                  </time>
                </div>
              </div>
            }
            footer={<p className="mt-2">Tickets: {screening.ticketCount}</p>}
          />
        ))}
      </FilmLayout>
    </div>
  );
}
