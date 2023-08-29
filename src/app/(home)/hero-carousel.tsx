'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import warwickOpenDay from '@/assets/home/carousel/warwick-open-day.jpg';
import LargeButtonLink from '@/components/large-button-link';
import logoWhite from '@/assets/logos/logo-white.png';
import dayjs from 'dayjs';

export default function HeroCarousel() {
  return (
    <div className="h-[75vh] min-h-[32rem] -mt-24 block">
      <Carousel slideInterval={10000} indicators={false}>
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
                  <span className="block font-bold">
                    Your Student Cinema {new Date().toLocaleTimeString()}
                    {'||'}
                    {new Date().getTimezoneOffset()}
                    {'||'}
                    {dayjs(new Date()).format('hh:mma')}
                    {'||'}
                    {dayjs(new Date(1696179600 * 1000)).format('hh:mma')}
                    {'||'}
                    {new Date(1696179600 * 1000).toString()}
                    {'||'}
                    {new Date(1696179600 * 1000).getTimezoneOffset()}
                  </span>
                </h1>
                <LargeButtonLink href="/whats-on">
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
        <article className="h-full relative">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTU4NjYwNzAxN15BMl5BanBnXkFtZTgwMDkyODI4NjM@._V1_.jpg"
            alt="A film"
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
                  Mon 26th | 6:30pm 9:30pm
                </p>
                <p className="text-4xl mb-3 font-lexend font-bold">
                  Spider-man: Into the Spiderverse
                </p>
                <LargeButtonLink href="/whats-on">
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
      </Carousel>
    </div>
  );
}
