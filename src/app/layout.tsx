import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Lexend, Poppins } from 'next/font/google';
import Footer from '@/components/layout/footer';
import { ReactNode } from 'react';
import FlowbiteTheme from './flowbite-theme';
import { Main } from '@/components/layout/main';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Warwick Student Cinema',
    default: 'Warwick Student Cinema',
  },
  description:
    'Welcome to your student-run, professional-standard cinema at Warwick. Come and watch the best and latest films six days week, or get involved with our five teams.',
  metadataBase: new URL(process.env.URL || 'https://warwick.film'),
};

export const viewport: Viewport = {
  themeColor: '#006295',
};

export default function RootLayout({
  children,
  ticketsModal,
}: {
  children: ReactNode;
  ticketsModal: ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${poppins.variable}`}>
      <FlowbiteTheme>
        <Main>
          {children}
          <Footer />
          {ticketsModal}
        </Main>
      </FlowbiteTheme>
    </html>
  );
}
