'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import warwickOpenDay from '@/assets/home/carousel/warwick-open-day.jpg';
import LargeButtonLink from '@/components/large-button-link';
import logoWhite from '@/assets/logos/logo-white.png';

export default function HeroCarousel() {
  return (
    <div className="h-[75vh] -mt-24 block">
      <Carousel slideInterval={10000} indicators={false}>
        <article className="h-full relative">
          <Image
            src={warwickOpenDay}
            alt="Eric and Daniel at a Warwick Open Day"
            className="absolute object-cover h-full"
            priority={true}
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-[#00000033] to-[#000000aa]" />
          <div className="absolute w-full top-16 bottom-64 flex items-center justify-center drop-shadow-md pt-12">
            <div className="flex items-center my-16 space-x-2">
              <div className="text-right">
                <h1 className="text-4xl text-right mb-3">
                  Welcome to
                  <span className="block font-bold">Your Student Cinema</span>
                </h1>
                <LargeButtonLink href="/whats-on">
                  View Our Schedule
                </LargeButtonLink>
              </div>
              <div className="p-2">
                <Image src={logoWhite} alt="Warwick Student Cinema Logo" />
              </div>
            </div>
          </div>
        </article>
        <article className="h-full relative">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTU4NjYwNzAxN15BMl5BanBnXkFtZTgwMDkyODI4NjM@._V1_.jpg"
            alt="Eric and Daniel at a Warwick Open Day"
            className="absolute object-cover h-full"
            width={3200}
            height={1800}
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-[#00000033] to-[#000000aa]" />
          <div className="absolute w-full top-16 bottom-64 flex items-center justify-center drop-shadow-md pt-12">
            <div className="flex items-center my-16 space-x-2 uppercase">
              <div className="text-right">
                <p className="text-lg font-bold capitalize">
                  Mon 26th | 6:30pm 9:30pm
                </p>
                <p className="text-4xl text-right mb-3">
                  Spider-man: Into the Spiderverse
                </p>
                <LargeButtonLink href="/whats-on">
                  Book Tickets Now
                </LargeButtonLink>
              </div>
              <div className="p-2">
                <Image src={logoWhite} alt="Warwick Student Cinema Logo" />
              </div>
            </div>
          </div>
        </article>
      </Carousel>
    </div>
  );
}
