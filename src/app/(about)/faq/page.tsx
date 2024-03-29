import React from 'react';
import Link from 'next/link';
import FaqAccordion from '@/app/(about)/faq/faq-accordion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    "Here's some of our frequently asked questions. If you have any questions that aren't covered in the list, please don't hesitate to get in touch or email the Exec!",
};

export default function FrequentlyAskedQuestions() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about">About Us</Link>
      </p>
      <h1 className="mb-1">Frequently Asked Questions</h1>
      <p className="mb-4">
        Here&apos;s some of our frequently asked questions. If you have any
        questions that aren&apos;t covered in the list, please don&apos;t
        hesitate to&nbsp;
        <Link href="/exec" className="text-accent">
          get in touch
        </Link>
        &nbsp;or&nbsp;
        <a
          href="mailto:info@warwick.film"
          target="_blank"
          className="text-accent"
        >
          email the Exec
        </a>
        !
      </p>

      <FaqAccordion />
    </main>
  );
}
