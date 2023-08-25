import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import coverImage from '@/assets/crew/teams/foh-cover.jpg';
import teamImage from '@/assets/crew/teams/foh-team.jpg';
import dmsImage from '@/assets/crew/teams/foh-dms.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export default function FrontOfHouse() {
  return (
    <>
      <div className="-mt-24 h-96 overflow-hidden">
        <Image
          src={coverImage}
          alt="L3 during a film"
          className="object-cover w-full h-96 blur-xs brightness-75"
          placeholder="blur"
        />
      </div>
      <main className="content-style -mt-32 sm:-mt-56 lg:-mt-20">
        <Image
          src={teamImage}
          alt="The Front of House team working on a show"
          width={350}
          className="lg:float-right relative lg:ml-4 mb-4"
          placeholder="blur"
        />
        <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
          <Link href="/crew">Crew</Link>
        </span>
        <h1 className="mb-4 lg:mb-10 drop-shadow-lg">Front of House Team</h1>
        <p>
          The Front of House team of Stewards and Duty Managers look after
          everything related to our audience and aim to provide them with the
          best service possible.
        </p>

        <h2>Stewarding</h2>
        <p>
          Stewards are essential to the society: without them, our shows would
          not be possible. Stewarding is also the easiest way to get involved
          with the society and comes with many perks:
        </p>

        <ul>
          <li>Earn free films for yourself and a guest!</li>
          <li>Work at the interface of the society and its members.</li>
          <li>
            Meet like-minded people who are interested in all sorts of films.
          </li>
          <li>
            Potentially move on to the highly transferable skill of Duty
            Managing (see below).
          </li>
          <li>
            Get to know people in other areas of the society - you might even
            find something else at WSC that you enjoy even more!
          </li>
        </ul>

        <p>
          The main roles for a steward are to sell and check tickets for
          admission. After that, you watch the film you volunteered for.
        </p>
        <p>
          So, what&apos;s the commitment? We ask that all new stewards work
          three shows within a two week window. This is to ensure you get to
          learn our ticketing system properly. After that, we ask you to
          volunteer once per fortnight. All stewards fulfilling this commitment
          are rewarded with free tickets (including for a guest) to each of our
          regular screenings.
        </p>

        <div className="flex items-start gap-x-4 flex-col sm:flex-row">
          <p>
            For more information or to sign up as a new steward,&nbsp;
            <a
              href={`mailto:${execTeam.chiefDutyManager.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact the {execTeam.chiefDutyManager.name},&nbsp;
              {getExecPositionNames(execTeam.chiefDutyManager)}
            </a>
            , who&apos;ll be pleased to receive your email!
          </p>
          <TeamOfficerCard position={execTeam.chiefDutyManager} />
        </div>

        <div className="flex flex-col sm:flex-row">
          <Image
            src={dmsImage}
            alt="DMs counting money after a show"
            width={300}
            className="w-auto sm:w-72 h-56 sm:h-auto mt-8 sm:mb-4 sm:mr-4 object-cover"
          />
          <div>
            <h2>Duty Managers (DMs)</h2>
            <p>
              The Front of House staff working a show are organised by a
              qualified Duty Manager (DM). The DM, together with the
              projectionist, is responsible for the running of that show. At a
              screening, the DM will:
            </p>
            <ul>
              <li>
                Train any new stewards on our ticketing system and membership
                selling
              </li>
              <li>Perform all relevant health and safety checks</li>
              <li>Liaise with the screening&apos;s projectionist</li>
              <li>Set up and oversee the tills throughout ticket selling</li>
              <li>Cash up the takings</li>
            </ul>
          </div>
        </div>

        <p>
          The DM is always on hand to resolve any problems that arise during the
          show. All DMs begin their involvement with Front of House as stewards
          before going on to the DM training scheme. Training as a DM requires
          greater commitment than stewarding, but it is an excellent way to
          become more involved with the society and learn all sorts of useful
          transferable skills.
        </p>
      </main>
    </>
  );
}
