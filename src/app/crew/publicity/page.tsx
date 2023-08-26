import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import coverImage from '@/assets/crew/teams/publicity-cover.jpg';
import scheduleImage from '@/assets/crew/teams/publicity-schedule.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export default function Publicity() {
  return (
    <>
      <div className="-mt-24 h-96 overflow-hidden">
        <Image
          src={coverImage}
          alt="The publicity table in front of the cinema"
          className="object-cover w-full h-96 blur-xs brightness-50"
          placeholder="blur"
        />
      </div>
      <main className="content-style -mt-32 sm:-mt-56 lg:-mt-20">
        <Image
          src={scheduleImage}
          alt="The A0 publicity produced for the Summer 2023 term"
          width={350}
          className="lg:float-right relative lg:ml-4 mb-4"
          placeholder="blur"
        />
        <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
          <Link href="/crew" className="text-white">
            Crew
          </Link>
        </span>
        <h1 className="mb-4 lg:mb-10 drop-shadow-lg">Publicity Team</h1>
        <p>
          The publicity team are responsible for spreading the good word about
          WSC in attempt to make more people aware of our great service and
          programming and, ultimately, fill more seats at our screenings.
        </p>

        <p>
          There are several ways to get involved with producing and distributing
          publicity:
        </p>

        <ul>
          <li>
            <b>Writing film reviews</b> that will be printed in our termly
            programme booklet and posted on our website for all to read. This is
            an especially exciting opportunity for budding journalists to
            contribute their work to an award-winning publication, or indeed for
            the casual film lover who would like to offer their slant on
            Hollywood&apos;s latest.
          </li>

          <li>
            <b>Image and title acquisition</b> is a fairly easy way to help out,
            simply involving finding quality graphics of each film&apos;s title
            and some images from the film itself for use in our booklets and
            posters. Aesthetics are a key feature in any form of successful
            marketing, and a decent variety of eye-catching graphics help set
            WSC apart from the rest.
          </li>

          <li>
            <b>Editing</b> the booklet is a fun way to get a bit creative:
            designing page layouts using the review, title and image for each
            film to achieve a high quality level of presentation makes for
            rewarding work, especially when it is published on the printed page.
          </li>

          <li>
            <b>Designing</b> weekly posters and fliers lets people know
            what&apos;s coming soon to WSC in order to keep the masses informed
            and interested.
          </li>

          <li>
            <b>Distributing</b> publicity is essential to getting WSC noticed
            above all the other activity on campus. We need volunteers to take
            our publicity to residence kitchens around campus, as well as
            attacking departmental noticeboards with a staple gun!
          </li>
        </ul>
        <p>
          You can do as much or as little as you like, and your efforts will be
          rewarded with free tickets to our screenings, the opportunity to make
          friends and have fun at socials, and of course the satisfaction of
          seeing your work in all its glossy glory!
        </p>

        <div className="flex items-start gap-x-4 flex-col sm:flex-row justify-between">
          <p>
            <a
              href={`mailto:${execTeam.publicityOfficer.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email the {execTeam.publicityOfficer.name},&nbsp;
              {getExecPositionNames(execTeam.publicityOfficer)}
            </a>
            , for more information.
          </p>
          <TeamOfficerCard position={execTeam.publicityOfficer} />
        </div>
      </main>
    </>
  );
}
