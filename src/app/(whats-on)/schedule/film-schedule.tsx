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
import { getTermDateName } from '@/lib/term-dates';
import {
  getCurrentOrNextTerm,
  getLastTerm,
  getNextTerm,
  getPreTermStartUnixTimestamp,
  getTermEndUnixTimestamp,
  getTermListByYear,
} from '@/lib/term-dates-server';
import LargeButtonLink from '@/components/large-button-link';
import ArchiveDropdown from '@/app/(whats-on)/schedule/archive-dropdown';

const weekdayLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const shortWeekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function FilmScheduleDay({
  filmScreeningDays,
  weekDay,
  className,
}: {
  filmScreeningDays: (TScreeningDay<Screening> & { film: Film })[];
  weekDay: number;
  className?: string;
}) {
  const filmScreeningDaysToday = filmScreeningDays.filter(
    (day) => day.day.getDay() === weekDay,
  );

  return (
    <td className={`border p-0.5 xs:p-1 pb-0 ${className}`}>
      <div className="flex flex-col 2xl:gap-1 break-words overflow-hidden hyphens-auto">
        {filmScreeningDaysToday.map((filmScreeningDay) => (
          <Link
            href={getFilmPrettyUrl(filmScreeningDay.film)}
            className="group mb-1 md:mb-1.5"
            key={filmScreeningDay.film.film_id}
          >
            <article>
              <p className="sm:uppercase font-lexend font-normal text-4xs xs:text-3xs md:text-2xs lg:text-xs 2xl:text-sm text-center mb-[0.1rem] md:mb-0 group-hover:scale-105">
                {filmScreeningDay.film.title}
              </p>
              <div className="flex text-4xs xs:text-3xs md:text-2xs 2xl:text-xs gap-0.5 md:gap-1 justify-center flex-wrap">
                {filmScreeningDay.screenings.map((screening) => (
                  <time
                    dateTime={screening.date.toISOString()}
                    className="bg-primary rounded-sm sm:rounded-md px-0.5 sm:px-1 py-[0.08rem] md:py-0.5 group-hover:scale-105"
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
  weekDaysToShow,
  highlightDate,
}: {
  week: TScreeningWeek<Screening & { film: Film }>;
  weekDaysToShow: number[];
  highlightDate?: Date;
}) {
  const highlightPastOrCurrent =
    highlightDate && highlightDate > week.weekData.startDate;
  let highlightInCurrentWeek = false;
  if (highlightPastOrCurrent) {
    let diff = highlightDate
      ? highlightDate.getTime() - week.weekData.startDate.getTime()
      : -1;
    highlightInCurrentWeek = diff > 0 && diff < 1000 * 60 * 60 * 24 * 7;
  }

  const filmScreeningDays = splitScreeningDaysByFilm(week.screeningDays);
  return (
    <tr>
      <th className="outline outline-1 xl:outline-none xl:border p-0.5 sm:p-2 bg-primary-background sticky xl:static left-0 z-10 overflow-hidden">
        <p className="hidden lg:block lg:text-sm 2xl:text-base">
          {week.weekData.weekName}
        </p>
        <p className="text-2xs sm:text-xs md:text-sm lg:hidden">
          {week.weekData.weekNameShort}
        </p>
        <p className="text-3xs sm:text-2xs md:text-xs font-normal">
          {formatDateTime(week.weekData.startDate, DateTimeFormat.DATE_SHORT)}
        </p>
      </th>
      {weekDaysToShow.map((weekDay) => {
        let highlightPastDate = highlightPastOrCurrent;
        let highlightCurrentDate = false;

        if (highlightInCurrentWeek && highlightDate) {
          if (highlightDate.getDay() < weekDay) highlightPastDate = false;
          else if (highlightDate.getDay() === weekDay)
            highlightCurrentDate = true;
        }

        return (
          <FilmScheduleDay
            filmScreeningDays={filmScreeningDays}
            weekDay={weekDay}
            key={weekDay}
            className={
              highlightCurrentDate
                ? 'bg-secondary'
                : highlightPastDate
                  ? 'opacity-50'
                  : ''
            }
          />
        );
      })}
    </tr>
  );
}

export default async function FilmSchedule({
  term,
  highlightSchedule,
}: {
  term: TermDate;
  highlightSchedule?: boolean;
}) {
  const nextTermDate = await getNextTerm(term.timestamp);
  const lastTermDate = await getLastTerm(term.timestamp);
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
  const weekDaysToShow = [0, 1, 2, 3, 4, 5, 6].filter((weekDay) =>
    upcomingScreeningDays.some((day) => day.day.getDay() === weekDay),
  );

  const highlightDate = highlightSchedule ? new Date() : undefined;
  if (highlightDate) highlightDate.setHours(5, 0, 0, 0); // Avoid issues with timezones

  const termYears = await getTermListByYear(currentTerm || undefined);

  return (
    <div className="mx-1 sm:mx-4">
      <div className="xs:hidden relative max-w-max mx-auto">
        <h2 className="mx-4 text-center mb-1">{getTermDateName(term)}</h2>
        <ArchiveDropdown termYears={termYears} />
      </div>
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
        <div className="relative hidden xs:block">
          <h2 className="mx-4">{getTermDateName(term)}</h2>
          <ArchiveDropdown termYears={termYears} />
        </div>
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

      <div className="max-w-full overflow-x-auto border">
        <table className="table-fixed bg-secondary/40 w-full relative">
          <thead>
            <tr className="top-0 z-20 md:m-0">
              <th className="left-0 outline outline-1 xl:outline-none xl:border sm:p-1 2xl:p-2 font-normal bg-primary-background w-[1.6rem] xs:w-[2rem] sm:w-[2.4rem] md:w-[3rem] lg:w-[5.2rem] xl:w-24">
                <span className="hidden lg:block">Week</span>
                <span className="lg:hidden text-xs sm:text-sm">Wk</span>
              </th>
              {weekDaysToShow.map((day) => (
                <th
                  key={day}
                  className="outline outline-1 md:outline-none md:border sm:p-1 2xl:p-2 font-normal bg-primary-background"
                >
                  <span className="hidden sm:block text-xs md:text-base">
                    {weekdayLabels[day]}
                  </span>
                  <span className="sm:hidden text-xs">
                    {shortWeekdayLabels[day]}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {upcomingScreeningWeeks.length === 0 && (
              <tr>
                <td
                  colSpan={weekDaysToShow.length + 1}
                  className="border px-2 pt-12 pb-16 text-center"
                >
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
                weekDaysToShow={weekDaysToShow}
                key={week.weekData.termAndWeekName}
                highlightDate={highlightDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
