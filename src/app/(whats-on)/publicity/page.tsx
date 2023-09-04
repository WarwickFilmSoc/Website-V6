import Link from 'next/link';
import { Metadata } from 'next';
import { execTeam, getExecPositionNames } from '@/data/exec';
import publicityImage from '@/assets/publicity/publicity.jpg';
import TeamOfficerCard from '@/app/crew/team-officer-card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Publicity',
  description:
    "Publicity for the current term can be collected for free at our publicity table in the Science Concourse. However, if you'd also like to download a digital version or see our past publicity, you can find it here!",
};

export default function Publicity() {
  return (
    <main>
      <h1 className="mt-1">Publicity</h1>
      <Image
        src={publicityImage}
        alt="The publicity table in front of L3"
        width={320}
        className="lg:float-right relative lg:ml-4 mb-4"
        placeholder="blur"
        priority
      />
      <p className="mb-2">
        Every term, the&nbsp;
        <Link
          href="https://dev.warwick.film/crew/publicity"
          className="text-accent"
        >
          publicity team
        </Link>
        &nbsp;produce a range of materials to advertise our events and ensure
        that everyone around campus knows about them. These are then sent to
        print and distributed at both our publicity table outside L3 and in
        various pub runs and other events throughout the year.
      </p>
      <p>
        From writing reviews to editing graphics to distributing publicity,
        there&apos;s always a huge range of jobs that need doing - if you&apos;d
        like to get involved,&nbsp;
        <a
          href={`mailto:${execTeam.publicityOfficer.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          email the {execTeam.publicityOfficer.name},&nbsp;
          {getExecPositionNames(execTeam.publicityOfficer)}
        </a>{' '}
        for more information.
      </p>
      <div className="mt-2 flex">
        <TeamOfficerCard position={execTeam.publicityOfficer} />
      </div>

      <h2 className="mt-8">Publicity Archive</h2>
      <p className="mb-4">
        Publicity for the current term can be collected for free at our
        publicity table in the Science Concourse. However, if you&apos;d also
        like to download a digital version or see our past publicity, you can
        find it here!
      </p>

      {/* TODO */}
      <p>There is currently no past publicity. Please check back later!</p>
    </main>
  );
}
