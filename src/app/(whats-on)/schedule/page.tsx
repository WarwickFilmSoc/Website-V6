import LargeButtonLink from '@/components/large-button-link';
import FilmSchedule from '@/app/(whats-on)/schedule/film-schedule';
import { getTermDateName } from '@/lib/term-dates';
import { getCurrentOrNextTerm } from '@/lib/term-dates-server';
import { Metadata } from 'next';
import WhatsOnIntroductoryText from '@/app/(whats-on)/whats-on/whats-on-introductory-text';

export const revalidate = 600; // Revalidate every 10m

export async function generateMetadata(): Promise<Metadata> {
  const currentTerm = await getCurrentOrNextTerm();
  if (!currentTerm)
    return {
      title: 'Term Not Found',
      description: 'That term could not be found.',
    };

  const termDateName = getTermDateName(currentTerm);
  return {
    title: 'Schedule',
    openGraph: {
      title: `${termDateName} at Warwick Student Cinema`,
    },
    description: `Read our full schedule for ${termDateName}.`,
  };
}

export default async function Schedule() {
  const currentTerm = await getCurrentOrNextTerm();

  return (
    <main className="max-w-9xl px-0 xs:px-0">
      <div className="mx-auto max-w-7xl px-4 xs:px-8">
        <LargeButtonLink
          href="/whats-on"
          className="mb-1 sm:mb-0 sm:float-right"
        >
          What&apos;s on View
        </LargeButtonLink>
        <h1 className="mb-1">Term Schedule</h1>
        <WhatsOnIntroductoryText />
      </div>

      {!currentTerm ? (
        <p>There is currently nothing scheduled at Warwick Student Cinema.</p>
      ) : (
        <FilmSchedule term={currentTerm} highlightSchedule />
      )}
    </main>
  );
}
