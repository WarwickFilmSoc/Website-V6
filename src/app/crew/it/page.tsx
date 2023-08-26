import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';
import Image from 'next/image';
import coverImage from '@/assets/crew/it-cover.jpg';
import computersImage from '@/assets/crew/it-computers.jpg';
import serverRackImage from '@/assets/crew/it-server-rack.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export default function It() {
  return (
    <>
      <div className="-mt-24 h-96 overflow-hidden">
        <Image
          src={coverImage}
          alt="The WSC server rack"
          className="object-cover w-full h-96 blur-xs brightness-50"
          placeholder="blur"
        />
      </div>
      <main className="content-style -mt-32 sm:-mt-56 lg:-mt-20">
        <Image
          src={computersImage}
          alt="Some of the WSC desktop computers in the office"
          width={350}
          className="lg:float-right relative lg:ml-4 mb-4"
          placeholder="blur"
        />
        <span className="text-xl font-lexend uppercase drop-shadow-lg -mb-1">
          <Link href="/crew" className="text-white">
            Crew
          </Link>
        </span>
        <h1 className="mb-4 lg:mb-10 drop-shadow-lg">IT Team</h1>
        <p>
          Whether you are great with computers or can just about browse the web,
          WSC&apos;s IT Team needs you! If you aren&apos;t particularly
          technical, we need individuals who can write content for our website
          or tell us what&apos;s good and what needs to be improved - but
          we&apos;re also always happy to train you up.
        </p>

        <p>
          We are a group of individuals who are lucky enough to be able to work
          with our own custom built systems. Unlike other teams, we are not tied
          to show times so can often be found doing maintenance late at night!
        </p>

        <p>
          There&apos;s always loads to do, and you can get involved as much or
          as little as you wish - you just need to be able to use initiative and
          work independently if required. The work we do affects a large group
          of people - both WSC crew and the wider public/student body. Not only
          is this very rewarding, but it means we truly appreciate those who
          give up their time to fix and diagnose broken systems.
        </p>

        <p>
          Don&apos;t feel you have to only do IT - if you are involved in
          another area of WSC, come and visit us! Or, if you are interested in
          IT, it&apos;s a great opportunity to experience administration of
          systems in a real-world environment.
        </p>

        <div className="flex items-start gap-x-4 flex-col sm:flex-row justify-between">
          <p className="max-w-md">
            Find out more by&nbsp;
            <a
              href={`mailto:${execTeam.itOfficer.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contacting the {execTeam.itOfficer.name},{' '}
              {getExecPositionNames(execTeam.itOfficer)}
            </a>
            .
          </p>
          <TeamOfficerCard position={execTeam.itOfficer} />
        </div>

        <div className="flex flex-col sm:flex-row">
          <Image
            src={serverRackImage}
            alt="The WSC server rack"
            width={300}
            className="w-48 sm:w-56 h-56 sm:h-auto mt-8 sm:mb-4 sm:mr-4 object-cover"
          />
          <div>
            <h2>Hardware</h2>
            <p>
              We have our own server rack comprising of two Dell Xeon servers
              running Virtual Machines, a WSC-built storage server and several
              University hand-me-down machines. The office contains 3 user
              desktops and several printers and we have 4 EPOS till systems
              (including card scanners and receipt printers). We also use many
              Raspberry Pis for slideshow computers around the science concourse
              and at the start of each screening. Generally we run Ubuntu,
              Windows Server and Windows 10.
            </p>

            <h2>Websites</h2>
            <p>
              Our new public website (which you&apos;re on right now!) was
              written from scratch this year using NextJS (React) with Tailwind.
              We also have an older website written in PHP which is used for the
              crew-only areas such as rotas - however we&apos;re in the slow
              process of phasing this out too! Our websites provide publicity,
              crew sign ups (including show rotas), and our own custom EPOS
              system.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
