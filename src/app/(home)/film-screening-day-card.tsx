import Image from 'next/image';
import Link from 'next/link';
import styles from './film-screening-day-card.module.css';
import { FilmScreeningDay } from '@/lib/film';

export default function FilmScreeningDayCard({
  filmScreeningDay,
  index,
}: {
  filmScreeningDay: FilmScreeningDay;
  index: number;
}) {
  const responsiveClasses = [
    '',
    styles.day2,
    styles.day3,
    styles.day4,
    styles.day5,
    styles.day6,
  ];
  if (index > 5) return null;

  return (
    <Link href="/" className={`group ${responsiveClasses[index] || ''}`}>
      <article className="w-40 xl:w-[11.5rem] 2xl:w-52 3xl:w-60 text-left">
        <div className="overflow-hidden">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
            width={183}
            height={276}
            alt={filmScreeningDay.film.title}
            className="mx-auto w-full bg-black text-black group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="mt-2 text-md font-bold leading-5">
          {filmScreeningDay.film.title}
        </h3>
        <div className="mt-1 flex flex-col gap-y-1 xl:flex-row xl:gap-x-2 xl:space-y-0">
          <p className="text-sm 3xl:text-base flex-grow flex-shrink-0">
            {filmScreeningDay.day.toLocaleDateString(undefined, {
              weekday: 'short',
              day: 'numeric',
            })}
          </p>
          <div className="flex text-xs 2xl:text-sm gap-1 2xl:gap-2 flex-wrap justify-end">
            {filmScreeningDay.screenings.map((screening) => (
              <span
                className="bg-primary rounded-md px-1 py-0.5"
                key={screening.id}
              >
                {screening.date.toLocaleTimeString(undefined, {
                  hour: 'numeric',
                  hour12: true,
                  minute: '2-digit',
                })}
              </span>
            ))}

            <span className="bg-primary rounded-md px-1 py-0.5">9:30pm</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
