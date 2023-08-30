import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tickets',
  description:
    'Tickets can either be purchased online from Warwick SU and collected on the day using your Student ID, or purchased in cash from our friendly stewards. Visit our website for more information.',
};

export default function Tickets() {
  return redirect('/about#tickets');
}
