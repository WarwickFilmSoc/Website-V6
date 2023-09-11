'use client';

import Link from 'next/link';
import { getTermDateName } from '@/lib/term-dates';
import { TermDate } from '@prisma/client';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

export default function ArchiveDropdown({
  termYears,
}: {
  termYears: TermDate[][];
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDropdown((val) => !val)}
        className={`absolute text-3xl top-0 bottom-0 -right-4 sm:-right-6 ${
          showDropdown && 'z-30'
        }`}
      >
        {showDropdown ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {showDropdown && (
        <>
          <div
            className="fixed left-0 top-0 right-0 bottom-0 w-full h-full z-20"
            onClick={() => setShowDropdown(false)}
          />
          <div className="left-1/2 -translate-x-1/2 absolute top-8 xs:top-10 z-20 bg-modal p-4 overflow-x-hidden overflow-y-auto max-h-64 w-max max-w-[90vw] mx-auto mt-2 border-white border-2">
            {termYears.map((year) => (
              <div
                key={year[0].timestamp}
                className="flex gap-2 md:gap-8 justify-center mb-2 text-center"
              >
                {year.map((term) => (
                  <Link
                    href={`/schedule/${term.year}/${term.term}`}
                    key={year[0].timestamp}
                    onClick={() => setShowDropdown(false)}
                  >
                    {getTermDateName(term)}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
