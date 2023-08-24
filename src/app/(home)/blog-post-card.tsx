import { BlogPostSummary } from '@/lib/blog';

export default function BlogPostCard({
  post,
  large = false,
}: {
  post: BlogPostSummary;
  large?: boolean;
}) {
  return (
    <a href={post.url} target="_blank" rel="noopener" className="shrink">
      <article
        className={`${
          large
            ? 'w-72 sm:w-128 md:w-64 lg:w-96 xl:w-112 h-56 md:h-72 xl:h-80'
            : 'w-64 sm:w-96 md:w-56 lg:w-72 xl:w-96 h-48 md:h-60 xl:h-64'
        } bg-cover rounded-lg relative overflow-hidden hover:scale-105`}
        style={{ backgroundImage: `url('${post.featureImage}')` }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent to-[#000000aa]" />
        <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-end px-4 py-2 drop-shadow-md">
          <h3 className="normal-case font-bold text-lg">{post.title}</h3>

          <div className="flex gap-x-2 justify-center">
            <span>{post.publishedAtString}</span>
            <span>|</span>
            {post.primaryTag && (
              <span className="capitalize">{post.primaryTag}</span>
            )}
          </div>
        </div>
      </article>
    </a>
  );
}
