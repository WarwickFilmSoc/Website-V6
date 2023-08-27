import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import coverImage from '@/assets/crew/projection-cover.jpg';
import projectorsImage from '@/assets/crew/projection-projectors.jpg';
import filmImage from '@/assets/crew/projection-film.jpg';
import meetingImage from '@/assets/crew/projection-meeting.jpg';
import soundImage from '@/assets/crew/projection-sound.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export default function Projection() {
  return (
    <>
      <div className="-mt-24 h-96 overflow-hidden">
        <Image
          src={coverImage}
          alt="Max making up film"
          className="object-cover w-full h-96 blur-xs brightness-50"
          placeholder="blur"
          priority
        />
      </div>
      <main className="content-style -mt-32 sm:-mt-56 lg:-mt-20">
        <Image
          src={projectorsImage}
          alt="Our two film projectors"
          width={350}
          className="lg:float-right relative lg:ml-4 mb-4"
          placeholder="blur"
          priority
        />
        <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
          <Link href="/crew" className="text-white">
            Crew
          </Link>
        </span>
        <h1 className="mb-4 lg:mb-10 drop-shadow-lg">
          Projection and Technical Teams
        </h1>
        <p>
          The projection team ensure that all films are projected to the
          society&apos;s highest standards and the technical team maintains
          WSC&apos;s equipment to minimise the chance that screenings are
          cancelled or delayed. WSC currently operates with a Barco digital
          projector and a changeover system of two Victoria 8 35mm projectors -
          full technical specifications can be found on the&nbsp;
          <Link href="/technical-specifications">technical specifications</Link>
          &nbsp;page.
        </p>
        <h2>Projection Team</h2>
        Want to get involved in the society in a more technical capacity? Then
        sign up to become a projectionist! The benefits of being a member of the
        projection team include:
        <ul>
          <li>Free films for you and a guest to all of our screenings.</li>

          <li>
            Learn a dying art! 35mm projection across the world is being
            replaced by digital.
          </li>

          <li>
            Get a key to the proj box! This means you are a valued member of our
            team and trusted enough to use all of our equipment without
            supervision.
          </li>

          <li>
            Meet loads of great people equally as committed to the society.
          </li>

          <li>Great to put on your CV.</li>
        </ul>
        <p>
          The projection team, led by the Chief Projectionist, is responsible
          for the actual presentation side of all films. Once a projectionist
          has signed up to a show it is their job to project the film to the
          highest possible quality, without causing damage to the film or our
          equipment - ensuring the audience has the best viewing experience
          possible.
        </p>
        <div className="flex flex-col md:flex-row">
          <Image
            src={filmImage}
            alt="Small reels of film on the making-up bench"
            width={300}
            className="w-full md:w-64 h-36 md:h-auto mb-4 md:mr-4 object-cover"
          />
          <p>
            This process starts when the film arrives. For film showings, the
            projectionist must firstly properly prepare the print (ideally this
            would happen several days before the showing). For digital, the
            projectionist must ingest the DCP from our servers and create a
            playlist. Then, on the day, the lecture theatre must be transformed
            into our cinema venue, complete with our full speaker system.
            Finally, the film must be shown properly to our audience, along with
            the relevant ads and trailers for the day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div>
            <p>
              The projection team also meet weekly where possible, where the
              previous week&apos;s screenings are discussed and the rota for the
              next week is finalised. This helps ensure that everyone is aware
              of the latest procedure changes and potential issues they may
              face.
            </p>
            <p>
              Qualified projectionists will normally take one trainee
              projectionist for each show and progressively ensure the trainee
              knows everything they need to know in order to be a qualified
              projectionist themself - including what to do when things to
              wrong! The commitment for trainee projectionists is ideally to
              cover one show a week so that all the knowledge they pick up is
              kept fresh. Once projectionists qualify they normally cannot
              project as regularly, merely due to the number of qualified
              projectionists.
            </p>
          </div>

          <Image
            src={meetingImage}
            alt="Eric leading a projectionist meeting"
            width={250}
            className="w-full h-48 sm:w-64 sm:h-auto mb-4 sm:ml-4 object-cover"
          />
        </div>
        <p>
          The training scheme sometimes has a waiting list (though if it does it
          is usually not very long). To become a trainee, you must first
          complete an initial training session - where the basic concepts and
          equipment are introduced, after which trainees can sign-up to project
          any show. Crew status (which allows free films to be obtained) is
          gained after the second show a trainee projects.
        </p>
        <div className="flex items-start gap-x-4 flex-col sm:flex-row">
          <p>
            If you would like to get involved in projection or for more
            information please&nbsp;
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
          <TeamOfficerCard position={execTeam.chiefProjectionist} />
        </div>
        <div className="flex flex-col md:flex-row">
          <Image
            src={soundImage}
            alt="The WSC sound rack"
            width={250}
            className="w-full h-56 md:w-72 sm:h-auto mt-8 md:mb-4 md:mr-4 object-cover"
          />

          <div>
            <h2>Technical Team</h2>
            <p>
              The technical team, led by the {execTeam.technicalOfficer.name},
              is responsible for making sure that our projection equipment is
              maintained and in full working order. The technical team also
              oversees upgrades in the equipment WSC possesses and makes
              recommendations for investments in equipment that would aid the
              projection team. Membership of the technical team is open to
              qualified projectionists - this is because their training enables
              them to have a better understanding and a much greater familiarity
              with our equipment. Our full list of technical specifications can
              be&nbsp;
              <Link href="/technical-specifications">found here</Link>!
            </p>
            <p>
              The technical team has semi-regular sessions where routine
              maintenance to equipment is carried out. Training is a regular
              part of these tech sessions as it is important for more
              experienced members to impart their knowledge to newer members.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4 flex-col sm:flex-row">
          <p>
            For more information, or if you wish to get involved in the
            technical team, please don&apos;t hesitate to&nbsp;
            <a
              href={`mailto:${execTeam.technicalOfficer.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact our {execTeam.technicalOfficer.name},&nbsp;
              {getExecPositionNames(execTeam.technicalOfficer)}
            </a>
            , who will be more than pleased to receive your email.
          </p>
          <TeamOfficerCard position={execTeam.technicalOfficer} />
        </div>
      </main>
    </>
  );
}
