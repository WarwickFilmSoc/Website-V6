import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicity',
  description: '',
};

export default function WhatsOn() {
  return (
    <main>
      <h1 className="mb-1">What&apos;s On</h1>
      <p className="mb-2">Page Content</p>
    </main>
  );
}
