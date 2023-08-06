import LargeButtonLink from '@/components/large-button-link';

export default function TermEvents() {
  return (
    <section className="mb-20">
      <h2 className="mb-4">
        <span className="text-accent">Events</span> This Term
      </h2>

      <LargeButtonLink href="/whats-on">View Full Schedule</LargeButtonLink>
    </section>
  );
}
