import { BlogPostSummary } from '@/lib/blog';

export default function BlogPostCard({
  post,
  large = false,
}: {
  post: BlogPostSummary;
  large?: boolean;
}) {
  return (
    <a href={post.url} target="_blank" rel="noopener">
      <article
        className={`${
          large ? 'w-112 h-80' : 'w-96 h-64'
        } bg-cover rounded-lg relative overflow-hidden hover:scale-105`}
        style={{ backgroundImage: `url('${post.featureImage}')` }}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent to-[#000000aa]" />
        <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-end px-4 py-2 drop-shadow-md">
          <h3 className="normal-case font-bold text-lg">{post.title}</h3>

          <div className="flex space-x-2 justify-center">
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
