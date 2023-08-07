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
    <section className="mb-20">
      <h2>
        Join the <span className="text-accent">Crew</span>
      </h2>
      <div className="flex mx-12 max-w-8xl h-24 space-x-3">
        <Image
          src={makingUpImage}
          alt="Projectionists making up film for a show"
          className="w-48 grow object-cover"
        />
        <p className="mt-2 max-w-lg">
          Come and join our team to make new friends, learn new skills and watch
          free films! With 5 teams to choose from, there’s something for
          everyone!
        </p>
        <Image
          src={dmsImage}
          alt="Duty managers counting the float after a show"
          className="w-48 grow object-cover"
        />
      </div>
      <div className="flex overflow-hidden justify-center items-start space-x-3 mb-4">
        <Image
          src={pubQuizImage}
          alt="Warwick Student Cinema hosting its pub quiz"
          className="w-64 grow object-cover mt-3"
        />
        <Image
          src={projectorsImage}
          alt="Some of the Warwick Student Cinema team at a pizza social"
          className="w-56 grow object-cover mt-3"
        />
        <Image
          src={pizzaSocialImage}
          alt="The 35mm and 70mm projectors in our projection box"
          className="w-96 grow object-cover"
        />
        <Image
          src={serverRackImage}
          alt="The server rack in our projection box"
          className="w-56 grow object-cover mt-3"
        />
        <Image
          src={popcornImage}
          alt="The Warwick Student Cinema team handing out free popcorn in the Piazza"
          className="w-64 grow object-cover mt-3"
        />
      </div>

      <LargeButtonLink href="crew">Find Out More</LargeButtonLink>
    </section>
  );
}
