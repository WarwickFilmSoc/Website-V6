import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

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

export type ExecMember = {
  name: string;
  image: StaticImageData;
};

export type ExecPosition = {
  name: string;
  email: string;
  members: ExecMember[];
  description: ReactElement;
};

// Positions with an explicit key are used in other places in the website.
export type ExecTeam = {
  president: ExecPosition;
  filmsOfficer: ExecPosition;
  chiefProjectionist: ExecPosition;
  chiefDutyManager: ExecPosition;
  publicityOfficer: ExecPosition;
  technicalOfficer: ExecPosition;
  marketingOfficer: ExecPosition;
  itOfficer: ExecPosition;

  [key: string]: ExecPosition;
};

export const execTeam: ExecTeam = {
  president: {
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
  vicePresident: {
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
  treasurer: {
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
  filmsOfficer: {
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
  chiefProjectionist: {
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
  chiefDutyManager: {
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
  publicityOfficer: {
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
  technicalOfficer: {
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
  itOfficer: {
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
  marketingOfficer: {
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
  eventsAndSocials: {
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
};

export function getExecPositionNames(position: ExecPosition): string {
  if (position.members.length === 0) return 'unnamed';
  else if (position.members.length === 1) return position.members[0].name;
  else
    return `${position.members
      .slice(0, -1)
      .map((member) => member.name)
      .join(', ')} & ${position.members.slice(-1)[0].name}`;
}
