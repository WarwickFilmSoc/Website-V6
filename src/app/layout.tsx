import './globals.css';
import type { Metadata } from 'next';
import { Lexend, Poppins } from 'next/font/google';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Providers from '@/app/providers';
import { ReactNode } from 'react';
import FlowbiteTheme from './flowbite-theme';

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
  description: 'Welcome to your student cinema.',
  openGraph: {
    title: 'Warwick Student Cinema',
    description: 'Welcome to your student cinema.',
  },
  metadataBase: new URL(process.env.URL || 'https://warwick.film'),
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
    <html lang="en">
      <body
        className={`${lexend.variable} ${poppins.variable} flex flex-col min-h-screen`}
      >
        <FlowbiteTheme>
          <Providers>
            <Header />
            {children}
            <Footer />
            {ticketsModal}
          </Providers>
        </FlowbiteTheme>
      </body>
    </html>
  );
}
