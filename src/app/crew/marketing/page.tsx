import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';

export default function Marketing() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">Marketing Team</h1>
      <p>
        The Marketing Team advertises WSC through digital formats such as our
        LCD and pre-show slideshows and social networks.
      </p>

      <p>
        The Marketing Team works under the Marketing Officer and works closely
        with the Publicity and IT teams. Responsibilities and functions include:
      </p>

      <ul>
        <li>
          Creating high-quality advertisements for every film screening to
          populate our pre-show and LCD screen slideshows, whilst maintaing a
          consistent, high-quality brand image.
        </li>
        <li>
          Finding interesting content to keep our <b>social network feeds</b> (
          <a href="https://www.facebook.com/wscfilmsoc">Facebook</a>,{' '}
          <a href="https://twitter.com/wscfilmsoc">Twitter</a>, and{' '}
          <a href="https://www.youtube.com/user/warwickstudentcinema">
            YouTube
          </a>
          ) up-to-date and relevant, including writing tantalising summaries of
          every film.
        </li>
        <li>
          <b>Editing together trailers</b> to generate excitement for the WSC
          programme each term as well as big events such as Allnighters. These
          works of art then get shown to thousands of our audience members
          before screenings and remain available on our{' '}
          <a href="https://www.youtube.com/user/warwickstudentcinema">
            YouTube page
          </a>{' '}
          for all eternity!
        </li>
        <li>
          <b>Producing promotional videos</b> to sell the society as a whole,
          showing the world what goes on behind the scenes. These videos are
          typically entered into &apos;Best Society&apos;-style competitions and
          are shown to our potential sponsors, so quality is of paramount
          importance!
        </li>
        <li>
          Innovating the way the society is publicised, discussing new ways to
          utilise technology to increase our visibility. You are encouraged to
          discuss any ideas you may have on the mailing list.
        </li>
      </ul>

      <p>
        There are two specialist roles within the Marketing Team with their own
        responsibilities. The Marketing Officer chooses who from the Team fills
        these positions:
      </p>

      <ul>
        <li>
          Digital Trailers Coordinator acquires trailers for all the films on
          our schedule and converts them into the correct format for playing on
          our new digital projector, editing them if needed. They must ensure
          there is always an appropriate number of trailers ready to play before
          films. They work closely with the Projection team to ensure the
          trailers are accessible and work correctly.
        </li>
        <li>
          Photography Coordinator ensures that photographs and videos are taken
          of all major WSC events, and that photos of the day-to-day workings of
          WSC are kept up-to-date, and that these are organised into our
          archives. They are the first port of call if anyone in the society
          needs photographs of specific things for the sake of publicity.
        </li>
      </ul>

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
    </main>
  );
}
