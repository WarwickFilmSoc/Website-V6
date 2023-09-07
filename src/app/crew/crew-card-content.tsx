import 'server-only';
import { getAuthedUser, isAuthedUserCrew } from '@/lib/auth';
import LoginForm from '@/components/login-form';
import Link from 'next/link';
import React from 'react';

type CrewResource = {
  name: string;
  url: string;
};

const crewResources: CrewResource[] = [
  { name: 'Old Website', url: 'https://warwick.film' },
  { name: 'Rotas', url: 'https://warwick.film/rotas/main' },
  { name: 'Film Tracker', url: 'https://warwick.film/films/dump' },
  { name: 'Show Status', url: 'https://warwick.film/status/mainjs' },
  { name: 'iLight Control', url: 'https://warwick.film/ilight/main' },
  { name: 'Wiki', url: 'https://wiki.warwick.film/wiki/Main_Page' },
  {
    name: 'Mailing Lists',
    url: 'https://lists.filmsoc.warwick.ac.uk/listinfo',
  },
  { name: 'Stall Signup', url: 'https://warwick.film/stall' },
];

export default async function CrewCardContent() {
  const user = await getAuthedUser(false);

  if (!user)
    return (
      <div>
        <h2>Login</h2>
        <p className="mb-4">
          If you have a Warwick Student Cinema account, please login here.
        </p>
        <LoginForm crewPage />
        <p className="mt-4">
          Not got an account?&nbsp;
          <Link href="/register" className="text-accent">
            Register Account
          </Link>
        </p>
      </div>
    );

  const crew = isAuthedUserCrew(user);
  if (crew)
    return (
      <div>
        <h2>Crew Resources</h2>
        <ul className="list-disc pl-4 text-lg">
          {crewResources.map((resource) => (
            <li key={resource.url}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener"
                className="hover:font-bold"
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div>
      <h2>Join Crew</h2>
      <p className="mb-4">
        Interested in joining the crew? Click on an individual team to find out
        more and contact the corresponding Team Officer in person or by email.
      </p>
      <p className="mb-4">
        Joining crew is a great opportunity to meet more people, learn new
        skills and watch free films.
      </p>
    </div>
  );
}
