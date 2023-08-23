import Image from 'next/image';
import { FilmScreeningDay } from '@/types';
import Link from 'next/link';

export default function FilmScreeningDayCard({
  filmScreeningDay,
}: {
  filmScreeningDay: FilmScreeningDay;
}) {
  return (
    <Link href="/" className="group">
      <article className="w-40 xl:w-[11.5rem] 2xl:w-52 3xl:w-60 text-left">
        <div className="overflow-hidden">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
            width={183}
            height={276}
            alt="Everything Everywhere All At Once"
            className="mx-auto w-full bg-black text-black group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="mt-2 text-md font-bold leading-5">
          {filmScreeningDay.film.name}
        </h3>
        <div className="mt-1 flex flex-col space-y-1 xl:flex-row xl:items-center xl:space-x-2 xl:space-y-0">
          <p className="text-sm 3xl:text-base flex-grow">Mon 26th</p>
          <div className="flex text-xs 2xl:text-sm space-x-1 2xl:space-x-2">
            <span className="bg-primary rounded-md px-1 py-0.5">6:30pm</span>
            <span className="bg-primary rounded-md px-1 py-0.5">9:30pm</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
