import Image from 'next/image';
import { FilmScreeningDay } from '@/types';

export default function FilmScreeningDayCard({
  filmScreeningDay,
}: {
  filmScreeningDay: FilmScreeningDay;
}) {
  return (
    <article className="w-60 text-left">
      <Image
        src="https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
        width={183}
        height={276}
        alt="Everything Everywhere All At Once"
        className="mx-auto w-full bg-black text-black"
      />
      <h3 className="mt-2 text-md font-bold leading-5">
        {filmScreeningDay.film.name}
      </h3>
      <div className="mt-1 flex items-center space-x-2">
        <p>Mon 26th</p>
        <div className="flex text-sm space-x-2">
          <span className="bg-primary rounded-md px-1 py-0.5">6:30pm</span>
          <span className="bg-primary rounded-md px-1 py-0.5">9:30pm</span>
        </div>
      </div>
    </article>
  );
}
