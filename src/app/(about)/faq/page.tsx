import React from 'react';
import Link from 'next/link';
import FaqAccordion from '@/app/(about)/faq/faq-accordion';

export default function FrequentlyAskedQuestions() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
      <p className="mb-4">
        Here&apos;s some of our frequently asked questions. If you have any
        questions that aren&apos;t covered in the list, please don&apos;t
        hesitate to&nbsp;
        <Link href="/contact" className="text-accent">
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