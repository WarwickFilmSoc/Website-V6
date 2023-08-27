import Image from 'next/image';
import map from '@/assets/home/map.jpg';
import LargeButtonLink from '@/components/large-button-link';

export default function WatchAFilm() {
  return (
    <section className="m-4 px-4 py-2 text-left w-3/5 flex-grow">
      <h2 className="text-2xl mb-1 text-center lg:text-left">
        Watch a <span className="text-accent">Film</span>
      </h2>
      <div className="flex gap-y-2 sm:gap-x-4 flex-col sm:flex-row items-center sm:items-start">
        <div>
          <Image
            src={map}
            alt="Map to get to Warwick Student Cinema"
            className="w-56 h-48 sm:h-auto object-cover"
          />
        </div>
        <div className="sm:w-96 grow text-center sm:text-left">
          <p className="mb-2">
            You don&apos;t need to be a member of the society or University to
            watch our films; everyone is welcome for up to £4.00 per ticket.
          </p>
          <p className="mb-2">
            Simply&nbsp;
            <a
              href="https://www.warwicksu.com/venues-events/events/4273/"
              rel="noopener"
              target="_blank"
              className="text-accent"
            >
              purchase a ticket online
            </a>
            &nbsp;and bring your Student ID on the day (if you&apos;re a Warwick
            Student), or bring cash and purchase your ticket from our friendly
            stewards.
          </p>
          <p className="mb-2">
            Find us in the L3 Chemistry Lecture Theatre on Library Road on
            the&nbsp;
            <a
              href="https://campus.warwick.ac.uk/search/623c88ba421e6f5928c0d9ad"
              target="_blank"
              rel="noopener"
              className="text-accent"
            >
              Campus Map
            </a>
            &nbsp;or&nbsp;
            <a
              href="https://goo.gl/maps/y1k5sbsnSxFRSTRN7"
              target="_blank"
              rel="noopener"
              className="text-accent"
            >
              Google Maps
            </a>
            . We&apos;re on the 2nd floor of the Science Concourse, directly
            opposite the library.
          </p>
          <LargeButtonLink href="/about">Find out More</LargeButtonLink>
        </div>
      </div>
    </section>
  );
}
