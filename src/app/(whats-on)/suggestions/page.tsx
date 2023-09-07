import TeamOfficerCard from '@/app/crew/team-officer-card';
import aboutImage from '@/assets/about/about-image.jpg';
import { execTeam } from '@/data/exec';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Suggestions',
  description: 'Suggest a film to be shown at WSC',
};

export default function Suggestions() {
  return (
    <main>
      <Image
        src={aboutImage}
        alt="Eric writing Warwick Filmsoc Presents on our chalkboard"
        width={400}
        className="md:float-right md:ml-2 mb-2 w-72 lg:w-96"
        placeholder="blur"
        priority
      />
      <h1 className="mb-1">Film Suggestions</h1>
      <p className="mb-2">
        Each term&apos;s schedule is organised at the end of the previous term
        by our Films Officers. When determining the schedule, the Films Officers
        try to provide a variety of different genres and a mix of new and old
        films, whilst also factoring in everyone&apos;s suggestions sent to them
        or added to the Forums Film Suggestions Category.
      </p>
      <p className="mb-2">
        Once a provisional schedule is finalised, these will be posted into the
        Forums for review and a series of public scheduling meetings will be
        held to ensure that our schedule is the best that it can be.
      </p>
      <h2 className="text-xl font-lexend uppercase">Have your say!</h2>
      <p>
        Tell us what films you want to see on&nbsp;
        <a
          href="https://discourse.warwick.film/c/films/film-suggestions"
          rel="noopener"
          target="_blank"
          className="text-accent"
        >
          our forums
        </a>
        &nbsp;or by contacting the {execTeam.filmsOfficer.name}.
      </p>
      <div className="mt-4 flex">
        <TeamOfficerCard position={execTeam.filmsOfficer} />
      </div>
    </main>
  );
}
