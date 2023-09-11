import { Metadata } from 'next';
import NormalView from '@/app/(whats-on)/whats-on/normal-view';
import LargeButtonLink from '@/components/large-button-link';
import WhatsOnIntroductoryText from '@/app/(whats-on)/whats-on/whats-on-introductory-text';

export const revalidate = 600; // Revalidate every 10m

export const metadata: Metadata = {
  title: "What's On",
  description: "Find out what we're screening at Warwick Student Cinema next!",
};

export default function WhatsOn() {
  return (
    <main>
      <LargeButtonLink href="/schedule" className="mb-1 sm:mb-0 sm:float-right">
        Schedule View
      </LargeButtonLink>
      <h1 className="mb-1">What&apos;s On</h1>
      <WhatsOnIntroductoryText />
      <NormalView />
    </main>
  );
}
