'use client';
import warwickOpenDay from '@/assets/home/carousel/warwick-open-day.jpg';
import logoWhite from '@/assets/logos/logo-white.png';
import LargeButtonLink from '@/components/large-button-link';
import { DateTimeFormat, formatDateTime } from '@/lib/date';
import { TScreeningDay, getFilmPrettyUrl } from '@/lib/film';
import { getTmdbImageUrl } from '@/lib/tmdb';
import { Film, Screening } from '@prisma/client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { useMemo } from 'react';

type WelcomeCarouselSlide = {
  type: 'welcome';
};
type FilmCarouselSlide = {
  type: 'film';
  filmScreeningDay: TScreeningDay<Screening> & { film: Film };
};

export default function HeroCarouselClient({
  upcomingFilmScreeningDays,
}: {
  upcomingFilmScreeningDays: (TScreeningDay<Screening> & { film: Film })[];
}) {
  const slides: (WelcomeCarouselSlide | FilmCarouselSlide)[] = useMemo(
    () =>
      upcomingFilmScreeningDays
        .filter((day) => day.film.tmdb_backdrop_path)
        .flatMap((day) => [
          { type: 'welcome' },
          { type: 'film', filmScreeningDay: day },
        ]),
    [upcomingFilmScreeningDays],
  );

  return (
    <div className="h-[75vh] min-h-[32rem] -mt-24 block">
      <Carousel slideInterval={10000} indicators={false}>
        {slides.length === 0 ? (
          <WelcomeSlide />
        ) : (
          slides.map((slide, i) => {
            if (slide.type === 'welcome') return <WelcomeSlide key={i} />;
            else
              return (
                <HeroFilmSlide
                  filmScreeningDay={slide.filmScreeningDay}
                  key={`${slide.filmScreeningDay.film.film_id}${slide.filmScreeningDay.dayTime}`}
                />
              );
          })
        )}
      </Carousel>
    </div>
  );
}

function HeroFilmSlide({
  filmScreeningDay,
}: {
  filmScreeningDay: TScreeningDay<Screening> & { film: Film };
}) {
  if (!filmScreeningDay.film.tmdb_backdrop_path) {
    return;
  }

  return (
    <article className="h-full relative">
      <Image
        src={getTmdbImageUrl(filmScreeningDay.film.tmdb_backdrop_path)}
        alt={`${filmScreeningDay.film.title} Backdrop`}
        className="absolute object-cover h-full"
        width={3200}
        height={1800}
        priority
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#00000033] to-[#000000aa]" />
      <div className="absolute w-full top-20 flex items-center justify-center drop-shadow-md py-6 bottom-28 h-sm:bottom-32 h-md:bottom-48 h-lg:bottom-64">
        <div className="flex items-center gap-x-2 flex-col-reverse md:flex-row uppercase h-full">
          <div className="md:text-right mx-6">
            <p className="text-lg font-bold capitalize">
              {formatDateTime(
                filmScreeningDay.day,
                DateTimeFormat.WEEKDAY_DATE,
              )}
              &nbsp;|&nbsp;
              {filmScreeningDay.screenings
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((s, i) => (
                  <span key={s.date.toISOString()}>
                    <time dateTime={s.date.toISOString()}>
                      {formatDateTime(s.date, DateTimeFormat.TIME)}
                    </time>
                    {i < filmScreeningDay.screenings.length - 1 && <>&nbsp;</>}
                  </span>
                ))}
            </p>
            <p className="text-4xl mb-3 font-lexend font-bold max-w-2xl max-h-[7.3rem] line-clamp-3 overflow-y-hidden">
              {filmScreeningDay.film.title}
            </p>
            <LargeButtonLink href={getFilmPrettyUrl(filmScreeningDay.film)}>
              Book Tickets Now
            </LargeButtonLink>
          </div>
          <div className="p-4">
            <Image
              src={logoWhite}
              alt="Warwick Student Cinema Logo"
              width={180}
              className="w-24 sm:w-32 md:w-44 bg-transparent"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function WelcomeSlide() {
  return (
    <article className="h-full relative">
      <Image
        src={warwickOpenDay}
        alt="Eric and Daniel at a Warwick Open Day"
        className="absolute object-cover h-full"
        priority
        placeholder="blur"
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#00000033] to-[#000000aa]" />
      <div className="absolute w-full top-20 flex items-center justify-center drop-shadow-md py-6 bottom-28 h-sm:bottom-32 h-md:bottom-48 h-lg:bottom-64">
        <div className="flex items-center gap-x-2 flex-col-reverse md:flex-row h-full">
          <div className="md:text-right mx-8">
            <h1 className="text-4xl md:text-right mb-3">
              Welcome to
              <span className="block font-bold">Your Student Cinema</span>
            </h1>
            <LargeButtonLink href="/schedule">
              View<span className="hidden sm:inline"> Our</span> Schedule
            </LargeButtonLink>
          </div>
          <div className="p-4">
            <Image
              src={logoWhite}
              alt="Warwick Student Cinema Logo"
              width={180}
              className="w-24 sm:w-32 md:w-44 bg-transparent"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  );
}
