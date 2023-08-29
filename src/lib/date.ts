import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export function getRelativeTimeString(dateString: string) {
  // https://gist.github.com/LewisJEllis/9ad1f35d102de8eee78f6bd081d486ad
  const timeMs = new Date(dateString).getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ];

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ];

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds),
  );

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat('en-GB', {
    numeric: 'auto',
  });
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

export function formatSecondsTimestamp(timestamp: bigint) {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}

export function getStartOfDaySecondTimestamp(): number {
  const date = new Date();
  date.setHours(0, 0);
  return Math.floor(date.getTime() / 1000);
}
export enum DateTimeFormat {
  TIME,
  WEEKDAY_DATE,
  DATE_MEDIUM,
  DATE_LONG,
}
export function formatDateTime(date: Date, format: DateTimeFormat): string {
  const dayjsDate = dayjs(date);

  switch (format) {
    case DateTimeFormat.TIME:
      return dayjsDate.format('h:mma');
    case DateTimeFormat.WEEKDAY_DATE:
      return dayjsDate.format('ddd Do');
    case DateTimeFormat.DATE_MEDIUM:
      return dayjsDate.format('D MMM YYYY');
    case DateTimeFormat.DATE_LONG:
      return dayjsDate.format('ddd Do MMM YYYY');
  }
}
