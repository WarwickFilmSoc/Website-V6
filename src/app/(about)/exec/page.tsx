import Link from 'next/link';
import Image from 'next/image';
import { ExecPosition, execTeam } from '@/data/exec';
import { Metadata } from 'next';
import letterboxdLogo from '@/assets/logos/social/letterboxd-colour.svg';

export const metadata: Metadata = {
  title: 'The Exec Team',
  description:
    'The Executive Committee, or Exec, are a team of students elected at the end of Term 2 to oversee the society. There are currently 11 roles.',
};

export default function TheExecTeam() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about">About Us</Link>
      </p>
      <h1 className="mb-1">The Exec Team</h1>
      <p className="mb-2">
        The Executive Committee, or &apos;Exec&apos;, are a team of students
        elected at the end of Term 2 to oversee the society as per the&nbsp;
        <Link
          href="/constitution#elections"
          className="text-accent"
          target="_blank"
        >
          constitution
        </Link>
        . There are currently 11 roles, which are detailed in the&nbsp;
        <Link
          href="/constitution/exec-roles"
          className="text-accent"
          target="_blank"
        >
          Executive Roles and Responsibilities
        </Link>
        &nbsp;page. The Exec can be collectively contacted by emailing&nbsp;
        <a
          href="mailto:info@warwick.film"
          target="_blank"
          className="text-accent"
        >
          info@warwick.film
        </a>
        .
      </p>

      <div className="mt-4 mb-16 flex flex-wrap justify-center -mx-3 text-center">
        {Object.values(execTeam).map((position: ExecPosition) => (
          <article key={position.name} className="w-96 grow m-3 max-w-128">
            <h2>{position.name}</h2>
            <p className="text-sm">
              <a
                href={`mailto:${position.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                {position.email}
              </a>
            </p>

            <div className="m-2 h-auto sm:h-48 flex justify-center items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
              {position.members.map((member, i) => (
                <div key={i} className="h-32 sm:h-full relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-32 sm:h-full object-contain object-top w-auto bg-transparent"
                    priority
                  />
                  {member.letterboxd && (
                    <a
                      href={`https://letterboxd.com/${member.letterboxd}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src={letterboxdLogo}
                        alt="Letterboxd"
                        width={45}
                        height={45}
                        className="w-8 bg-transparent absolute top-2 right-2 hover:scale-105"
                        priority
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {position.description}
          </article>
        ))}
      </div>

      <div className="mt-4">
        <h2>How can I join the Exec?</h2>
        <p>
          The Exec is elected at the Annual General Meeting held in Term 2, as
          per the&nbsp;
          <Link
            href="/constitution#elections"
            className="text-accent"
            target="_blank"
          >
            constitution
          </Link>
          . If you wish to stand next year, more information will be available
          nearer to the time, but it&apos;s a good idea to start&nbsp;
          <Link href="/crew" className="text-accent">
            getting involved
          </Link>{' '}
          with the society as soon as possible so people know who you are!
        </p>
      </div>
    </main>
  );
}
