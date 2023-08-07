import LargeButtonLink from '@/components/large-button-link';

export default function TermEvents() {
  return (
    <section className="mb-20">
      <h2 className="mb-2">
        <span className="text-accent">Events</span> This Term
      </h2>

      <div className="mb-4 text-lg">
        There are no remaining events this term. Please check back later!
      </div>

      <LargeButtonLink href="/whats-on">View Full Schedule</LargeButtonLink>
    </section>
  );
}
