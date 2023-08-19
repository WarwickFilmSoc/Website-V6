import Link from 'next/link';
import { execTeam, getExecPositionNames } from '@/data/exec';

export default function It() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">IT Team</h1>
      <p>
        Whether you are great with computers or can just about browse the web,
        WSC&apos;s IT Team needs you!
      </p>

      <p>
        We are a group of individuals who are lucky enough to be able to choose
        their working hours (we are not tied to show times), work with our own
        custom built systems and work with a lot of new and free equipment.
      </p>

      <p>
        If you aren&apos;t particularly technical, we need individuals who can
        input data onto our website, tell us what looks good / works sensibly,
        learn HTML, make new webpages or learn how to build computers -
        don&apos;t worry, we are happy to train you up!
      </p>

      <p>
        However, for those with technical aptitude, we divide into two sub-teams
        - the Website and Hardware groups, each with a maintenance and a new
        projects responsibility. There&apos;s always loads to do, and you can
        get involved as much or as little as you wish. Advances we make affect a
        large group of people and are therefore very rewarding, and broken
        systems cause a lot of trouble so we truly appreciate those who give up
        time to fix them.
      </p>

      <p>
        Don&apos;t feel you have to only do IT - if you are involved in another
        area of WSC, come and visit us, or if you are interested in IT it always
        helps to get a feel for our systems in their actual use environment!
      </p>

      <p>
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

      <h2>Hardware</h2>
      <p>
        We have our own server rack, comprising two Dell Xeon servers running
        Virtual Machines, a WSC-built storage server and several University
        hand-me-down machines. The office contains 3 machines (with remote
        desktop functionality), we have 4 till systems (including card scanners,
        receipt printers etc), 2 slideshow computers and the display screens
        outside the lecture theatre. The servers run Ubuntu or Windows Server,
        otherwise we have a mix of Operating Systems, with the general use
        machines running Windows 7 and tills on XP.
      </p>

      <h2>Website</h2>
      <p>
        Our website provides publicity, crew sign ups (including show rotas),
        and our own custom EPOS system. With a new website in the works and a
        mammoth undertaking, it&apos;s all hands on deck! We currently use
        PHP/MySQL and dabble with several other languages in order to get the
        job done.
      </p>
    </main>
  );
}
