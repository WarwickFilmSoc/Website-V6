import './globals.css';
import type { Metadata } from 'next';
import { Lexend, Poppins } from 'next/font/google';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

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
  title: 'Warwick Student Cinema',
  description: 'Welcome to your student cinema.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
