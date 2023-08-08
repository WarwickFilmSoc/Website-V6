export type Film = {
  name: string;
};

export type FilmScreeningDay = {
  id: number;
  film: Film;
  screeningDates: number[];
};
