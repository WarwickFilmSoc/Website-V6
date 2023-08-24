import LargeButtonLink from '@/components/large-button-link';
import Image from 'next/image';
import pizzaSocialImage from '@/assets/home/crew/pizza-social.jpg';
import makingUpImage from '@/assets/home/crew/making-up.jpg';
import dmsImage from '@/assets/home/crew/dms.jpg';
import pubQuizImage from '@/assets/home/crew/pub-quiz.jpg';
import projectorsImage from '@/assets/home/crew/projectors.jpg';
import serverRackImage from '@/assets/home/crew/server-rack.jpg';
import popcornImage from '@/assets/home/crew/popcorn-piazza.jpg';

export default function JoinTheCrew() {
  return (
    <section className="mb-24">
      <Image
        src={makingUpImage}
        alt="Projectionists making up film for a show"
        className="h-24 object-cover mb-4 sm:hidden"
      />
      <h2>
        Join the <span className="text-accent">Crew</span>
      </h2>
      <div className="flex justify-center mx-12 mx-auto h-auto md:h-24 sm:gap-x-3">
        <Image
          src={makingUpImage}
          alt="Projectionists making up film for a show"
          className="w-40 lg:w-48 max-w-xl grow object-cover hidden sm:block"
        />
        <p className="w-full sm:w-80 md:w-auto mt-2 max-w-lg sm:max-w-lg mx-4">
          Come and join our team to make new friends, learn new skills and watch
          free films! With 5 teams to choose from, there’s something for
          everyone!
        </p>
        <Image
          src={dmsImage}
          alt="Duty managers counting the float after a show"
          className="w-40 lg:w-48 max-w-xl grow object-cover hidden sm:block"
        />
      </div>
      <div className="flex overflow-hidden justify-center items-start sm:gap-x-3 mb-4">
        <Image
          src={pubQuizImage}
          alt="Warwick Student Cinema hosting its pub quiz"
          className="w-64 grow object-cover mt-3 hidden sm:block"
        />
        <Image
          src={projectorsImage}
          alt="The 35mm and 70mm projectors in our projection box"
          className="w-56 grow object-cover mt-3 hidden sm:block"
        />
        <div className="w-96 max-w-lg grow whitespace-nowrap">
          <Image
            src={pizzaSocialImage}
            alt="Some of the Warwick Student Cinema team at a pizza social"
            className="object-cover hidden sm:block"
          />
          <LargeButtonLink href="crew" className="mt-4">
            Find Out More
          </LargeButtonLink>
        </div>
        <Image
          src={serverRackImage}
          alt="The server rack in our projection box"
          className="w-56 grow object-cover mt-3 hidden sm:block"
        />
        <Image
          src={popcornImage}
          alt="The Warwick Student Cinema team handing out free popcorn in the Piazza"
          className="w-64 grow object-cover mt-3 hidden sm:block"
        />
      </div>
      <Image
        src={dmsImage}
        alt="Duty managers counting the float after a show"
        className="h-24 object-cover mt-6 sm:hidden"
      />
    </section>
  );
}
