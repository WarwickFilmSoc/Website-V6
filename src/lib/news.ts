import prisma from '@/lib/prisma';
import { NewsArticle, NewsArticleType } from '@prisma/client';
import dayjs from 'dayjs';

export async function getNews(
  year?: number,
  showCrewNews: boolean = false,
): Promise<[NewsArticle[], NewsArticle[]]> {
  let yearInt = year;
  if (!yearInt) {
    const date = new Date();
    yearInt = date.getMonth() < 8 ? date.getFullYear() - 1 : date.getFullYear();
  }

  const newsArticles = await prisma.newsArticle.findMany({
    where: {
      visible: true,
      type: showCrewNews ? undefined : { not: NewsArticleType.CREW },
      OR: [
        {
          AND: [
            {
              modify_timestamp: {
                gte: dayjs('2023-09-01').year(yearInt).startOf('day').unix(),
              },
            },
            {
              modify_timestamp: {
                lte: dayjs('2023-09-01')
                  .year(yearInt + 1)
                  .startOf('day')
                  .unix(),
              },
            },
          ],
        },
        ...(year
          ? []
          : [
              {
                old: false,
              },
            ]),
      ],
    },
    orderBy: [
      {
        old: 'asc',
      },
      {
        priority: 'asc',
      },
      { modify_timestamp: 'desc' },
    ],
  });

  return [
    newsArticles.filter((article) => !article.old),
    newsArticles.filter((article) => article.old),
  ];
}

let newsYearsCache: number[] | null = null;
export async function getNewsYears(): Promise<number[]> {
  if (newsYearsCache) return newsYearsCache;
  const years = [];

  const newsArticles = await prisma.newsArticle.findMany({
    where: {
      visible: true,
    },
    orderBy: { modify_timestamp: 'desc' },
  });

  let currentYear = null;
  for (const newsArticle of newsArticles) {
    const year = new Date(newsArticle.modify_timestamp * 1000).getFullYear();
    if (year !== currentYear) {
      if (currentYear) years.push(currentYear);
      currentYear = year;
    }
  }
  if (currentYear) years.push(currentYear);

  newsYearsCache = years;
  return years;
}
