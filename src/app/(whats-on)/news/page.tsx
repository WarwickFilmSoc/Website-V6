import { Metadata } from 'next';
import News from './news';
import NewsDropdown from '@/app/(whats-on)/news/news-dropdown';
import { getNewsYears } from '@/lib/news';

export const revalidate = 120; // Revalidate every 2m

export const metadata: Metadata = {
  title: 'News',
  description: 'The latest Warwick Student Cinema news',
};

export default async function CurrentNews() {
  const years = await getNewsYears();

  return (
    <main>
      <div className="flex">
        <h1>News</h1>
        <NewsDropdown years={years} onRight />
      </div>

      <News />
    </main>
  );
}
