'use client';

import Link from 'next/link';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

export default function NewsDropdown({
  years,
  onRight,
}: {
  years: number[];
  onRight?: boolean;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative flex-shrink-0 w-10 h-10">
      <button
        onClick={() => setShowDropdown((val) => !val)}
        className={`absolute text-3xl top-0 bottom-0 -right-0 ${
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
          <div
            className={`${
              onRight ? 'left-0' : 'right-0'
            } absolute top-8 z-20 bg-modal p-4 overflow-x-hidden overflow-y-auto max-h-64 w-max max-w-[90vw] mx-auto mt-2 border-white border-2 text-center flex flex-col gap-2`}
          >
            {years.map((year) => (
              <Link
                href={`/news/${year}`}
                key={year}
                onClick={() => setShowDropdown(false)}
                className="text-xl block"
              >
                {year} Archive
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
