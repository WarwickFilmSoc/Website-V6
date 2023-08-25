import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import coverImage from '@/assets/crew/teams/marketing-cover.jpg';
import instagramImage from '@/assets/crew/teams/marketing-instagram.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export default function Marketing() {
  return (
    <>
      <div className="-mt-24 h-96 overflow-hidden">
        <Image
          src={coverImage}
          alt="Some of the WSC Instagram posts"
          className="object-cover w-full h-96 blur-xs brightness-50"
          placeholder="blur"
        />
      </div>
      <main className="content-style -mt-32 sm:-mt-56 lg:-mt-20">
        <Image
          src={instagramImage}
          alt="The WSC Instagram"
          width={350}
          className="lg:float-right relative lg:ml-4 mb-4"
          placeholder="blur"
        />
        <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
          <Link href="/crew">Crew</Link>
        </span>
        <h1 className="mb-4 lg:mb-10 drop-shadow-lg">Marketing Team</h1>
        <p>
          The Marketing Team advertises WSC through digital formats such as our
          LCD and pre-show slideshows and social networks.
        </p>

        <p>
          The Marketing Team works under the Marketing Officer and works closely
          with the Publicity and IT teams. Responsibilities and functions
          include:
        </p>

        <ul>
          <li>
            Creating high-quality advertisements for every film screening to
            populate our pre-show and LCD screen slideshows, whilst maintaining
            a consistent, high-quality brand image.
          </li>
          <li>
            Finding interesting content to keep our <b>social network feeds</b>
            &nbsp; (
            <a
              href="https://www.facebook.com/wscfilmsoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            ,&nbsp;
            <a
              href="https://twitter.com/wscfilmsoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            , and&nbsp;
            <a
              href="https://www.youtube.com/user/warwickstudentcinema"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            ) up-to-date and relevant, including writing tantalising summaries
            of every film.
          </li>
          <li>
            <b>Editing together trailers</b> to generate excitement for the WSC
            programme each term as well as big events such as Allnighters. These
            works of art then get shown to thousands of our audience members
            before screenings and remain available on our&nbsp;
            <a
              href="https://www.youtube.com/user/warwickstudentcinema"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube page
            </a>
            &nbsp; for all eternity!
          </li>
          <li>
            <b>Producing promotional videos</b> to sell the society as a whole,
            showing the world what goes on behind the scenes. These videos are
            typically entered into &apos;Best Society&apos;-style competitions
            and are shown to our potential sponsors, so quality is of paramount
            importance!
          </li>
          <li>
            Innovating the way the society is publicised, discussing new ways to
            utilise technology to increase our visibility. You are encouraged to
            discuss any ideas you may have on the mailing list.
          </li>
        </ul>

        <p>
          There are two specialist roles within the Marketing Team with their
          own responsibilities. The Marketing Officer chooses who from the Team
          fills these positions:
        </p>

        <ul>
          <li>
            Digital Trailers Coordinator acquires trailers for all the films on
            our schedule and converts them into the correct format for playing
            on our new digital projector, editing them if needed. They must
            ensure there is always an appropriate number of trailers ready to
            play before films. They work closely with the Projection team to
            ensure the trailers are accessible and work correctly.
          </li>
          <li>
            Photography Coordinator ensures that photographs and videos are
            taken of all major WSC events, and that photos of the day-to-day
            workings of WSC are kept up-to-date, and that these are organised
            into our archives. They are the first port of call if anyone in the
            society needs photographs of specific things for the sake of
            publicity.
          </li>
        </ul>

        <div className="flex items-start gap-x-4 flex-col sm:flex-row justify-between">
          <p>
            If you are interested in getting involved in the team, please&nbsp;
            <a
              href={`mailto:${execTeam.marketingOfficer.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact the {execTeam.marketingOfficer.name},{' '}
              {getExecPositionNames(execTeam.marketingOfficer)}
            </a>
            .
          </p>
          <TeamOfficerCard position={execTeam.marketingOfficer} />
        </div>
      </main>
    </>
  );
}
