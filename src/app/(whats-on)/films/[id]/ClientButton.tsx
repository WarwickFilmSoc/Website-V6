'use client';

import { DateTimeFormat, formatDateTime } from '@/lib/date';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ClientScreeningButton({
  id,
  datetime,
}: {
  id: number;
  datetime: Date;
}) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);
  query.set('screening', id.toString());

  return (
    <Link
      className="border-white border-2 rounded-md px-2 py-1 hover:scale-105"
      href={{
        pathname: pathName,
        query: query.toString(),
      }}
      shallow
    >
      <time dateTime={datetime.toISOString()}>
        {formatDateTime(datetime, DateTimeFormat.TIME)}
      </time>
    </Link>
  );
}
