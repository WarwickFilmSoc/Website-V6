import Image from 'next/image';
import aboutUsImage from '@/assets/home/about-us.jpg';
import React from 'react';
import Link from 'next/link';

export default function AboutUsCard() {
  return (
    <section className="w-2/5 flex-grow">
      <Link
        href="/about"
        className="block bg-primary m-4 px-4 py-2 text-left text-center lg:text-left lg:w-full h-full group hover:-translate-y-1 hover:drop-shadow-sm"
      >
        <h2 className="text-2xl mb-1">About Us</h2>
        <div className="overflow-hidden">
          <Image
            src={aboutUsImage}
            alt="Eric and Daniel at a Warwick Open Day"
            className="mb-2"
          />
        </div>
        <p className="mb-2">
          Warwick Student Cinema is a nationally acclaimed, student run,
          professional standard cinema presented by the Warwick Film Society
          (aka FilmSoc).
        </p>
        <p className="mb-2">
          Using our industry standard 35mm, 70mm and digital equipment, we
          provide a top-quality cinema experience to the staff and students of
          the University of Warwick in Coventry, in addition to families and
          members of the general public.
        </p>
      </Link>
    </section>
  );
}
