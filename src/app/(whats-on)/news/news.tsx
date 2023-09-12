import { getAuthedUser, isAuthedUserCrew } from '@/lib/auth';
import { getNews } from '@/lib/news';
import { NewsArticle, NewsArticleType } from '@prisma/client';
import styles from '@/app/(whats-on)/news/styles.module.css';
import { DateTimeFormat, formatDateTime } from '@/lib/date';

function NewsArticles({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="content-style">
      {articles.map((newsArticle) => (
        <article
          key={newsArticle.article_id}
          className={`${
            newsArticle.type === NewsArticleType.CREW
              ? 'bg-primary-darker/20'
              : 'bg-secondary/40'
          } border px-4 pb-2 mb-8 overflow-hidden ${styles.newsArticleStyle}`}
        >
          <h3 className="mt-4">{newsArticle.title}</h3>
          <p>
            {newsArticle.type === NewsArticleType.CREW && (
              <span>Crew News - </span>
            )}
            {newsArticle.author} - Last Updated&nbsp;
            {formatDateTime(
              new Date(newsArticle.modify_timestamp * 1000),
              DateTimeFormat.DATE_LONG,
            )}
            {newsArticle.old && <span> (Old)</span>}
          </p>
          <div dangerouslySetInnerHTML={{ __html: newsArticle.text }} />
        </article>
      ))}
    </div>
  );
}

export default async function News({ year }: { year?: number }) {
  const user = await getAuthedUser(false);
  const crew = isAuthedUserCrew(user);
  const [newArticles, oldArticles] = await getNews(year, crew);

  return (
    <>
      {newArticles.length === 0 && oldArticles.length === 0 && (
        <div className="mt-2">There are no news articles for this year.</div>
      )}

      {newArticles.length > 0 && (
        <div className="mt-4 mb-4">
          <h2 className="mb-2">Current News</h2>
          <NewsArticles articles={newArticles} />
        </div>
      )}

      {oldArticles.length > 0 && (
        <div className="mt-4">
          <h2 className="mb-2">Old News</h2>
          <NewsArticles articles={oldArticles} />
        </div>
      )}
    </>
  );
}
