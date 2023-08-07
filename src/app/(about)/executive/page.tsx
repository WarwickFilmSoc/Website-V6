import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ReactElement, ReactNode } from 'react';

import oliviaLancastleImage from '@/assets/exec/olivia-lancastle.jpg';
import danielKallinImage from '@/assets/exec/daniel-kallin.jpg';
import ethanDougalImage from '@/assets/exec/ethan-dougall.jpg';
import zainMothupiImage from '@/assets/exec/zain-mothupi.jpg';
import dillanPatelImage from '@/assets/exec/dillan-patel.jpg';
import ericLiuImage from '@/assets/exec/eric-liu.jpg';
import jamesPattImage from '@/assets/exec/james-patt.jpg';
import sophieCooperImage from '@/assets/exec/sophie-cooper.jpg';
import alexPointonImage from '@/assets/exec/alex-pointon.jpg';
import adamSkrzymowskiImage from '@/assets/exec/adam-skrzymowski.jpg';
import joshHengImage from '@/assets/exec/josh-heng.jpg';
import jayPatelImage from '@/assets/exec/jay-patel.jpg';
import tomasCaldonImage from '@/assets/exec/tomas-caldon.jpg';

type ExecPosition = {
  name: string;
  email: string;
  members: {
    name: string;
    image: StaticImageData;
  }[];
  description: ReactElement;
};

const execPositions: ExecPosition[] = [
  {
    name: 'President',
    email: 'president@warwick.film',
    members: [
      {
        name: 'Olivia Lancastle',
        image: oliviaLancastleImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Olivia Lancastle</span> is the figurehead of
        WSC and is responsible for ensuring the smooth day-to-day running of its
        activities. She chairs exec meetings and carries out general
        administration work.
      </p>
    ),
  },
  {
    name: 'Vice-President',
    email: 'vice-president@warwick.film',
    members: [
      {
        name: 'Daniel Kallin',
        image: danielKallinImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Daniel Kallin</span> minutes exec and
        general meetings, books rooms for WSC activities and ensures that emails
        get a response. Daniel also co-ordinates stands at Students&apos; Union
        events.
      </p>
    ),
  },
  {
    name: 'Treasurer',
    email: 'treasurer@warwick.film',
    members: [
      {
        name: 'Ethan Dougal',
        image: ethanDougalImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Ethan Dougall</span> manages the finances of
        the Society. With the help of the Students&apos; Union, he budgets and
        ensures that we are not spending more money than we have.
      </p>
    ),
  },
  {
    name: 'Films Officers',
    email: 'filmsofficer@warwick.film',
    members: [
      {
        name: 'Zain Mothupi',
        image: zainMothupiImage,
      },
      {
        name: 'Dillan Patel',
        image: dillanPatelImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Zain Mothupi</span> and&nbsp;
        <span className="font-bold">Dillan Patel</span> are our contacts with
        film distributors, ordering the films we show and ensuring their timely
        arrival and departure. They also order our film trailers and posters.
      </p>
    ),
  },
  {
    name: 'Chief Projectionist',
    email: 'chiefprojectionist@warwick.film',
    members: [
      {
        name: 'Eric Liu',
        image: ericLiuImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Eric Liu</span> is responsible for making
        sure there is a projectionist for each show as well as organising the
        training and administration of projectionists along with the rest of the
        Projection Committee.
      </p>
    ),
  },
  {
    name: 'Chief Duty Manager',
    email: 'chiefdm@warwick.film',
    members: [
      {
        name: 'James Patt',
        image: jamesPattImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">James Patt</span> is responsible for making
        sure there are enough Front of House staff for each WSC event and
        oversees the admin, qualification and training of Duty Managers and
        Stewards.
      </p>
    ),
  },
  {
    name: 'Publicity Officer',
    email: 'publicityofficer@warwick.film',
    members: [
      {
        name: 'Sophie Cooper',
        image: sophieCooperImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Sophie Cooper</span> is responsible for
        overseeing the production of all WSC publicity material. She is also in
        charge of putting film posters up in the cabinets around the
        Students&apos; Union.
      </p>
    ),
  },
  {
    name: 'Technical Officer',
    email: 'technicalofficer@warwick.film',
    members: [
      {
        name: 'Alex Pointon',
        image: alexPointonImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Alex Pointon</span> keeps all of our
        equipment in good working order, ensuring that any broken equipment is
        fixed promptly. He is also responsible for planning upgrades to our
        facilities.
      </p>
    ),
  },
  {
    name: 'IT Officers',
    email: 'itofficer@warwick.film',
    members: [
      {
        name: 'Adam Skrzymowski',
        image: adamSkrzymowskiImage,
      },
      {
        name: 'Josh Heng',
        image: joshHengImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Adam Skrzymowski</span> and&nbsp;
        <span className="font-bold">Josh Heng</span> are responsible for
        managing all our IT and networking infrastructure, as well as keeping
        our websites online and up-to-date.
      </p>
    ),
  },
  {
    name: 'Marketing Officer',
    email: 'marketingofficer@warwick.film',
    members: [
      {
        name: 'Jay Patel',
        image: jayPatelImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Jay Patel</span> maintains our social media
        and slides shown on our screens and before shows, making everyone aware
        of our events.
      </p>
    ),
  },
  {
    name: 'Events & Socials Coordinator',
    email: 'events@warwick.film',
    members: [
      {
        name: 'Tomas Caldon',
        image: tomasCaldonImage,
      },
    ],
    description: (
      <p>
        <span className="font-bold">Tomas Caldon</span>, a.k.a Minister of Fun,
        organises and administers regular socials, writes quizzes and
        co-ordinates events.
      </p>
    ),
  },
];

export default function TheExecutiveTeam() {
  return (
    <main>
      <h1>The Executive Team</h1>
      <p className="mb-2">
        The Executive Committee, or &apos;Exec&apos;, are a team of students
        elected at the end of Term 2 to oversee the society as per the&nbsp;
        <Link
          href="/constitution#elections"
          className="text-accent"
          target="_blank"
        >
          constitution
        </Link>
        . There are currently 11 roles, which are detailed in the&nbsp;
        <Link
          href="/constitution/executive-roles"
          className="text-accent"
          target="_blank"
        >
          Executive Roles and Responsibilities
        </Link>
        &nbsp;page. The Exec can be collectively contacted by emailing&nbsp;
        <a
          href="mailto:info@warwick.film"
          target="_blank"
          className="text-accent"
        >
          info@warwick.film
        </a>
        .
      </p>

      <div className="mt-4 mb-16 flex flex-wrap justify-center -mx-3 text-center">
        {execPositions.map((position: ExecPosition) => (
          <article key={position.name} className="w-96 grow m-3 max-w-128">
            <h2>{position.name}</h2>
            <p className="text-sm">
              <a
                href={`mailto:${position.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                {position.email}
              </a>
            </p>

            <div className="h-48 m-2 flex justify-center items-center space-x-4">
              {position.members.map((member, i) => (
                <Image
                  key={i}
                  src={member.image}
                  alt={member.name}
                  className="h-full object-contain"
                />
              ))}
            </div>

            {position.description}
          </article>
        ))}
      </div>

      <div className="mt-4">
        <h2>How can I join the Exec?</h2>
        <p>
          The Exec is elected at the Annual General Meeting held in Term 2, as
          per the&nbsp;
          <Link
            href="/constitution#elections"
            className="text-accent"
            target="_blank"
          >
            constitution
          </Link>
          . If you wish to stand next year, more information will be available
          nearer to the time, but it&apos;s a good idea to start&nbsp;
          <Link href="/crew" className="text-accent">
            getting involved
          </Link>{' '}
          with the society as soon as possible so people know who you are!
        </p>
      </div>
    </main>
  );
}
