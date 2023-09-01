import LargeButtonLink from '@/components/large-button-link';
import FilmSchedule from '@/app/(whats-on)/schedule/film-schedule';
import { getCurrentOrNextTerm, getTermDateName } from '@/lib/term-dates';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const currentTerm = await getCurrentOrNextTerm();
  if (!currentTerm)
    return {
      title: 'Term Not Found',
      description: 'That term could not be found.',
    };

  const termDateName = getTermDateName(currentTerm);
  return {
    title: `${termDateName} at Warwick Student Cinema`,
    description: `Read our full schedule for ${termDateName}.`,
  };
}

export default async function Schedule() {
  const currentTerm = await getCurrentOrNextTerm();

  return (
    <main className="max-w-9xl">
      <div className="mx-auto max-w-7xl">
        <LargeButtonLink href="/whats-on" className="float-right">
          Normal View
        </LargeButtonLink>
        <h1 className="mb-1">What&apos;s On - Term Schedule</h1>
        <p className="mb-6">
          Come and watch films in our fully-equipped L3 lecture theatre, and
          come to our other events throughout the term too. All our screenings
          are open to both members of the public and of Warwick University.
        </p>
      </div>

      {!currentTerm ? (
        <p>There is currently nothing scheduled at Warwick Student Cinema.</p>
      ) : (
        <FilmSchedule term={currentTerm} />
      )}
    </main>
  );
}
