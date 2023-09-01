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
      <div className="flex flex-col gap-1">
        {filmScreeningDaysToday.map((filmScreeningDay) => (
          <Link
            href={getFilmPrettyUrl(filmScreeningDay.film)}
            className="group m-1"
            key={filmScreeningDay.film.film_id}
          >
            <article>
              <p className="uppercase font-lexend font-normal text-sm text-center mb-0.5 group-hover:scale-105">
                {filmScreeningDay.film.title}
              </p>
              <div className="flex text-xs gap-1 justify-center">
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
      <th className="border p-2 bg-primary/40">
        <p>{week.weekData.weekName}</p>
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
      <div className="relative flex flex-col justify-center items-center text-center mb-4 flex-wrap gap-2">
        {lastTermDate && (
          <LargeButtonLink
            href={`/schedule/${lastTermDate.year}/${lastTermDate.term}`}
            className="md:absolute left-0"
          >
            Previous Term
          </LargeButtonLink>
        )}
        <h2 className="mx-4">{getTermDateName(term)}</h2>
        {nextTermDate && (
          <LargeButtonLink
            href={`/schedule/${nextTermDate.year}/${nextTermDate.term}`}
            className="md:absolute right-0"
          >
            Next Term
          </LargeButtonLink>
        )}
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="table-fixed bg-secondary/40 w-full">
          <thead>
            <tr>
              <th className="border p-2 font-normal bg-primary/40 w-28">
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
                <th key={day} className="border p-2 font-normal bg-primary/40">
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
