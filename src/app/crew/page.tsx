import React from 'react';
import Link from 'next/link';
import crewImage from '@/assets/crew/crew.jpg';
import fohImage from '@/assets/crew/foh.jpg';
import projectionImage from '@/assets/crew/projection.jpg';
import publicityImage from '@/assets/crew/publicity.jpg';
import itImage from '@/assets/crew/it.jpg';
import marketingImage from '@/assets/crew/marketing.jpg';
import Image from 'next/image';
import LoginForm from '@/components/login-form';

const teams = [
  { name: 'Front of House', href: '/crew/front-of-house', image: fohImage },
  { name: 'Projection', href: '/crew/projection', image: projectionImage },
  { name: 'Publicity', href: '/crew/publicity', image: publicityImage },
  { name: 'IT', href: '/crew/it', image: itImage },
  { name: 'Marketing', href: '/crew/marketing', image: marketingImage },
];

export default function Crew() {
  return (
    <main>
      <div className="flex gap-4 lg:gap-8 flex-wrap-reverse">
        <div className="bg-primary max-w-full w-96 p-4 grow lg:grow-0">
          <h2>Login</h2>
          <p className="mb-4">
            If you have a Warwick Student Cinema account, please login here.
          </p>
          <LoginForm />
          <p className="mt-8">
            Not got an account?&nbsp;
            <Link href="/register" className="text-accent">
              Register Account
            </Link>
          </p>
        </div>
        <div className="w-128 grow">
          <Image
            src={crewImage}
            alt="The crew in the WSC office"
            className="object-cover h-36 mb-6"
            placeholder="blur"
            priority
          />
          <h1 className="mb-1">Join the Crew</h1>
          <p className="mb-2">
            The success of Warwick Student Cinema and the quality of service we
            are able to provide for our members is entirely down to members of
            the Crew who volunteer their time to help run every single show, and
            look after the day to day running of the society.
          </p>
          <p className="mb-2">
            Being Crew gives free films for you and a guest, teaches you new
            skills and welcomes you into the great behind-the-scenes community
            with fun socials and access to our office. With 5 teams to choose
            from, there’s something for everyone!
          </p>
          <p className="mb-2">
            Each of these teams has different roles available, plus the head of
            the team sits on the Exec. Getting involved in one area of the
            society need not limit you to that role - you can volunteer in
            several different aspects of the society if you wish, so long as you
            can find the time!
          </p>
        </div>
      </div>

      <div className="flex gap-4 text-center mt-8 flex-wrap justify-center xl:justify-between">
        {teams.map((team) => (
          <Link href={team.href} key={team.name} className="group">
            <p className="text-2xl font-lexend font-bold uppercase">
              {team.name}
            </p>
            <div className="w-56 h-36 overflow-hidden mt-1 mb-4 mx-auto">
              <Image
                src={team.image}
                alt={`The ${team.name} team`}
                width={220}
                className="w-56 h-36 object-cover group-hover:scale-105"
                placeholder="blur"
              />
            </div>

            <span className="mx-2 inline-block uppercase text-xl bg-primary px-4 py-1.5 rounded-md font-lexend font-bold group-hover:scale-105 group-hover:bg-primary-darker">
              Find out More
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
