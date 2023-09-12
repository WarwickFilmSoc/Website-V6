import { Metadata } from 'next';
import News from '../news';
import { getNewsYears } from '@/lib/news';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import NewsDropdown from '@/app/(whats-on)/news/news-dropdown';

export const revalidate = 600; // Revalidate every 10m

export async function generateStaticParams() {
  const years = await getNewsYears();
  return years.map((year) => ({ year: year.toString() }));
}

export function generateMetadata({
  params: { year },
}: {
  params: { year: string };
}): Metadata {
  const yearInt = parseInt(year);
  if (!yearInt || isNaN(yearInt) || yearInt < 1950 || yearInt > 2100)
    return {
      title: `News`,
      description: `Warwick Student Cinema news`,
    };

  return {
    title: `${yearInt.toString().slice(-2)}/${(yearInt + 1)
      .toString()
      .slice(-2)} News`,
    description: `Warwick Student Cinema news from ${yearInt}/${yearInt + 1}`,
  };
}

export default async function NewsArchive({
  params: { year },
}: {
  params: { year: string };
}) {
  const yearInt = parseInt(year);
  if (!yearInt || isNaN(yearInt) || yearInt < 1950 || yearInt > 2100)
    return redirect('/news');
  const years = await getNewsYears();

  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/news">News</Link>
      </p>
      <div className="flex items-end">
        <h1>
          {year ? `${year}/${yearInt + 1} ` : ''}
          News
        </h1>
        <NewsDropdown years={years} />
      </div>

      <News year={yearInt} />
    </main>
  );
}
