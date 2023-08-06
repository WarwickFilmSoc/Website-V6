import Image from 'next/image';
import { FilmScreeningDay } from '@/types';

export default function FilmScreeningDayCard({
  filmScreeningDay,
}: {
  filmScreeningDay: FilmScreeningDay;
}) {
  return (
    <article className="w-64 ">
      <Image
        src="https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
        width={183}
        height={276}
        alt="Everything Everywhere All At Once"
        className="mx-auto"
      />
      <h3>{filmScreeningDay.film.name}</h3>
      <p>Mon 26th</p>
    </article>
  );
}
