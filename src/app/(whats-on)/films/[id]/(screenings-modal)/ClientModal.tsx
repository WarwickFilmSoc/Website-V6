'use client';

import { Modal } from 'flowbite-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FilmScreening } from './ScreeningModal';
import { DateTimeFormat, formatDateTime, timestampToDate } from '@/lib/date';
import { getGauge, getTicketLink } from '@/lib/film';
import { FilmSubtitles } from '@prisma/client';
import { FaLocationDot } from 'react-icons/fa6';
import { BsClockFill } from 'react-icons/bs';

export default function ClientModal({
  screening,
}: {
  screening: FilmScreening;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const closeHandler = () => {
    let query = new URLSearchParams(searchParams);
    query.delete('screening');
    router.replace(`${pathname}?${query}`);
  };

  return (
    <Modal dismissible onClose={closeHandler} show>
      <Modal.Header>{screening.film.title} Screening</Modal.Header>
      <Modal.Body>
        <div className="grid">
          <div className="row">
            <div className="text-bold text-xl flex items-center">
              <BsClockFill className="mr-2" />
              <span>
                {screening.timestamp
                  ? formatDateTime(
                      timestampToDate(screening.timestamp),
                      DateTimeFormat.DATETIME_MEDIUM,
                    )
                  : 'Unknown Date'}{' '}
              </span>
            </div>
            <div className="text-bold text-xl flex items-center">
              <FaLocationDot className="mr-2" />
              <span> L3 </span>
            </div>
          </div>

          <div className="my-4 space-x-2">
            {screening.gauge && (
              <span className="rounded-lg bg-gauge px-2 py-1 text-md font-bold font-lexend uppercase">
                {/* TODO: Assumes that all screenings on a given day will have same gauge - needs to be changed */}
                {getGauge(screening.gauge)}
              </span>
            )}

            {screening.film.subtitles === FilmSubtitles.EXPECTED && (
              <span className="rounded-lg bg-subtitle px-2 py-1 text-md font-bold font-lexend uppercase">
                Subtitled
              </span>
            )}
          </div>

          <div className="flex justify-center">
            {screening.union_event_id ? (
              <a
                href={getTicketLink(screening.union_event_id)}
                target="_blank"
                rel="noopener"
                className="bg-su font-bold font-lexend text-xl uppercase rounded-md px-2 py-2 w-full mx-2 sm:w-2/3 sm:mx-0 text-center hover:scale-105 "
              >
                Buy tickets on Warwick SU
              </a>
            ) : (
              <p>Tickets for this event are not available online.</p>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
