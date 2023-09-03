import prisma from '@/lib/prisma';
import { DateTimeFormat, formatDateTime } from '@/lib/date';
import {
  getFilmPrettyUrl,
  groupScreeningsByDay,
  splitScreeningDaysByFilm,
  TScreeningDay,
} from '@/lib/film';
import {
  groupScreeningDaysByTermWeek,
  TScreeningWeek,
} from '@/lib/film-server';
import { Film, Screening, TermDate } from '@prisma/client';
import Link from 'next/link';
import {
  getCurrentOrNextTerm,
  getLastTerm,
  getNextTerm,
  getPreTermStartUnixTimestamp,
  getTermDateName,
  getTermEndUnixTimestamp,
} from '@/lib/term-dates';
import LargeButtonLink from '@/components/large-button-link';

function FilmScheduleDay({
  filmScreeningDays,
  weekDay,
}: {
  filmScreeningDays: (TScreeningDay<Screening> & { film: Film })[];
  weekDay: number;
}) {
  const filmScreeningDaysToday = filmScreeningDays.filter(
    (day) => day.day.getDay() === weekDay,
  );

  return (
    <td className="border">
      <div className="flex flex-col xl:gap-1 break-words overflow-hidden hyphens-auto">
        {filmScreeningDaysToday.map((filmScreeningDay) => (
          <Link
            href={getFilmPrettyUrl(filmScreeningDay.film)}
            className="group m-1"
            key={filmScreeningDay.film.film_id}
          >
            <article>
              <p className="uppercase font-lexend font-normal text-xs xl:text-sm text-center mb-0.5 group-hover:scale-105">
                {filmScreeningDay.film.title}
              </p>
              <div className="flex text-2xs xl:text-xs gap-1 justify-center flex-wrap">
                {filmScreeningDay.screenings.map((screening) => (
                  <time
                    dateTime={screening.date.toISOString()}
                    className="bg-primary rounded-md px-1 py-0.5 group-hover:scale-105"
                    key={screening.scr_id}
                  >
                    {formatDateTime(screening.date, DateTimeFormat.TIME)}
                  </time>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </td>
  );
}

function FilmScheduleWeek({
  week,
}: {
  week: TScreeningWeek<Screening & { film: Film }>;
}) {
  const filmScreeningDays = splitScreeningDaysByFilm(week.screeningDays);
  return (
    <tr>
      <th className="outline outline-1 xl:outline-0 xl:border p-2 bg-primary-background sticky xl:static left-0 z-10">
        <p className="text-sm xl:text-base">{week.weekData.weekName}</p>
        <p className="text-xs font-normal">
          {formatDateTime(week.weekData.startDate, DateTimeFormat.DATE_SHORT)}
        </p>
      </th>
      {[0, 1, 2, 3, 4, 5, 6].map((weekDay) => (
        <FilmScheduleDay
          filmScreeningDays={filmScreeningDays}
          weekDay={weekDay}
          key={weekDay}
        />
      ))}
    </tr>
  );
}

export default async function FilmSchedule({ term }: { term: TermDate }) {
  const nextTermDate = await getNextTerm(term);
  const lastTermDate = await getLastTerm(term);
  const currentTerm = await getCurrentOrNextTerm();

  const upcomingScreenings = await prisma.screening.findMany({
    where: {
      AND: [
        {
          timestamp: {
            gte: getPreTermStartUnixTimestamp(term),
          },
        },
        {
          timestamp: {
            lte: getTermEndUnixTimestamp(term),
          },
        },
      ],
    },
    orderBy: {
      timestamp: 'asc',
    },
    include: {
      film: true,
    },
  });
  const upcomingScreeningDays = groupScreeningsByDay(upcomingScreenings);
  const upcomingScreeningWeeks = await groupScreeningDaysByTermWeek(
    upcomingScreeningDays,
  );

  return (
    <div>
      <h2 className="mx-4 xs:hidden text-center mb-1">
        {getTermDateName(term)}
      </h2>
      <div className="relative flex justify-center items-center text-center mb-4 flex-wrap gap-2">
        {lastTermDate && (
          <LargeButtonLink
            href={
              lastTermDate.timestamp === currentTerm?.timestamp
                ? '/schedule'
                : `/schedule/${lastTermDate.year}/${lastTermDate.term}`
            }
            className="xs:absolute left-0"
          >
            Prev<span className="hidden md:inline"> Term</span>
          </LargeButtonLink>
        )}
        <h2 className="mx-4 hidden xs:block">{getTermDateName(term)}</h2>
        {nextTermDate && (
          <LargeButtonLink
            href={
              nextTermDate.timestamp === currentTerm?.timestamp
                ? '/schedule'
                : `/schedule/${nextTermDate.year}/${nextTermDate.term}`
            }
            className="xs:absolute right-0"
          >
            Next<span className="hidden md:inline"> Term</span>
          </LargeButtonLink>
        )}
      </div>

      <div className="max-w-full overflow-x-auto border max-h-[85vh] md:max-h-full">
        <table className="table-fixed bg-secondary/40 w-full min-w-[1000px]">
          <thead>
            <tr className="sticky md:static top-0 z-20 md:m-0">
              <th className="sticky xl:static left-0 outline outline-1 xl:outline-0 xl:border p-1 xl:p-2 font-normal bg-primary-background w-[5.2rem] xl:w-24">
                Week
              </th>
              {[
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ].map((day) => (
                <th
                  key={day}
                  className="outline outline-1 md:outline-0 md:border p-1 xl:p-2 font-normal bg-primary-background"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {upcomingScreeningWeeks.length === 0 && (
              <tr>
                <td colSpan={8} className="border px-2 pt-12 pb-16 text-center">
                  <div className="mx-auto max-w-7xl">
                    <p>There are no screenings scheduled for this term!</p>
                    <LargeButtonLink href="/schedule" className="block mt-2">
                      Back to Current Term
                    </LargeButtonLink>
                  </div>
                </td>
              </tr>
            )}
            {upcomingScreeningWeeks.map((week) => (
              <FilmScheduleWeek
                week={week}
                key={week.weekData.termAndWeekName}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
