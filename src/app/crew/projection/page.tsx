import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';

export default function Projection() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">Projection and Technical Teams</h1>
      <p>
        The projection team ensures that all films are projected to the
        society&apos;s highest standards, whereas it is the responsibility of
        the technical team to maintain WSC&apos;s equipment to minimise the
        chance that screenings are cancelled or delayed due to equipment
        problems. WSC currently operates a changeover system of two Victoria 8
        35mm projectors, we also have the capability to use a long play system
        and have recently upgraded to digital projection as well.
      </p>
      <h2>Projection Team</h2>
      Want to get involved in the society in a more technical capacity? Then
      sign up to become a projectionist! The benefits of being a member of the
      projection team include:
      <ul>
        <li>Free films for you and a guest to all of our screenings.</li>

        <li>
          Learn a dying art! 35mm projection across the world is being replaced
          by digital.
        </li>

        <li>
          Get a key to the proj box! This means you are a valued member of our
          team and trusted enough to use all of our equipment without
          supervision.
        </li>

        <li>Meet loads of great people equally as committed to the society.</li>

        <li>Great to put on your CV.</li>
      </ul>
      <p>
        The projection team, led by the Chief Projectionist, is responsible for
        the actual presentation side of all films. Once a projectionist has
        signed up to a show it is their job to project the film to the highest
        possible quality, without causing damage to the film or our equipment;
        thus ensuring the audience has the most optimal viewing experience
        possible.
      </p>
      <p>
        This process starts when the film arrives. Firstly, the films
        projectionist must properly prepare the print (ideally this would happen
        several days before the showing). Then the film must be shown properly
        to the audience. Qualified projectionists will normally take one trainee
        projectionist for each show and progressively ensure the trainee knows
        everything they need to know in order to be a qualified projectionist
        themself. The commitment for trainee projectionists is ideally to cover
        one show a week, merely so that all the knowledge they pick up is kept
        fresh. Once projectionists qualify they normally cannot project as
        regularly, merely due to the number of qualified projectionists.
      </p>
      <p>
        The training scheme sometimes has a waiting list (though if it does it
        is usually not very long). To become a trainee, you must first complete
        an initial training session - where the basic concepts and equipment are
        introduced, after which trainees can sign-up to project any show. Crew
        status (which allows free films to be obtained) is gained after the
        second show a trainee projects.
      </p>
      <p>
        If you would like to get involved in projection or for more information
        please&nbsp;
        <a
          href={`mailto:${execTeam.chiefProjectionist.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          contact the {execTeam.chiefProjectionist.name},&nbsp;
          {getExecPositionNames(execTeam.chiefProjectionist)}
        </a>
        , who will gladly receive your email.
      </p>
      <h2>Technical Team</h2>
      <p>
        The technical team, led by the Technical Officer, is responsible for
        making sure that our projection equipment is maintained and in full
        working order. The technical team also oversees upgrades in the
        equipment WSC possesses and makes recommendations for investments in
        equipment that would aid the projection team. Membership of the
        technical team is open to qualified projectionists - this is because
        their training enables them to have a better understanding and a much
        greater familiarity with our equipment.
      </p>
      <p>
        The technical team has semi-regular sessions where routine maintenance
        to equipment is carried out. Training is a regular part of these tech
        sessions as it is important for more experienced members to impart their
        knowledge to newer members.
      </p>
      <p>
        <Link href="/technical-specifications">
          Read up on our Full Technical Specifications!
        </Link>
      </p>
      <p>
        For more information, or if you wish to get involved in the technical
        team, please don&apos;t hesitate to contact our Technical Officer at:,
        who will be more than pleased to receive your email.
      </p>
    </main>
  );
}
