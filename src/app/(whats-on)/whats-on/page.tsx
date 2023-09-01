import { Metadata } from 'next';
import NormalView from '@/app/(whats-on)/whats-on/normal-view';

export const metadata: Metadata = {
  title: "What's On",
  description: "Find out what we're screening at Warwick Student Cinema next",
};

export default function WhatsOn() {
  return (
    <main>
      <h1 className="mb-1">What&apos;s On</h1>
      <p className="mb-6">
        Come and watch films in our fully-equipped L3 lecture theatre, and come
        to our other events throughout the term too. All our screenings are open
        to both members of the public and of Warwick University.
      </p>
      <NormalView />
    </main>
  );
}
