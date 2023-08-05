import {FilmScreeningDay} from '@/types';

export default function FilmScreeningDayCard({ filmScreeningDay }: { filmScreeningDay: FilmScreeningDay}) {
  return (
    <article>
      <h3>{filmScreeningDay.film.name}</h3>
      <p>Mon 26th</p>
    </article>
  );
}