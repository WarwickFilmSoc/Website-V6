import Image from 'next/image';
import map from '@/assets/home/map.jpg';

export default function Find() {
  return (
    <section id="find">
      <h2>Find Us</h2>
      <div className="flex gap-y-2 lg:gap-x-4 flex-col lg:flex-row items-start">
        <Image
          src={map}
          alt="Map to get to Warwick Student Cinema"
          className="w-64 h-48 lg:w-48 lg:h-96 object-cover"
        />
        <div className="lg:w-96 grow">
          <p className="mb-2">
            Our tills will usually be open 20 minutes before the scheduled film
            start time.
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
          <h3 className="mt-3 font-lexend font-bold text-2xl">
            Post/Deliveries
          </h3>
          <p className="mb-2">
            Films should be delivered to the Student Cinema Film Dump, on the
            Ground Floor of the Chemistry Building. Please email&nbsp;
            <a
              href="mailto:filmsofficer@warwick.film"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              filmsofficer@warwick.film
            </a>
            &nbsp;for more information.
          </p>
          <p>
            Other deliveries and post should be directed to&nbsp;
            <a
              href="https://goo.gl/maps/6nNEGLipWwZoYsxr6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              Student Union HQ
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
