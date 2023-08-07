import LargeButtonLink from '@/components/large-button-link';
import { getLatestPosts } from '@/lib/blog';

export default async function BlogCarousel() {
  const posts = await getLatestPosts();

  return (
    <section className="mb-20">
      <h2 className="mb-4">
        Mise En Scene <span className="text-accent">Blog</span>
      </h2>
      <div className="flex justify-center align-center space-x-6 mb-4">
        {posts?.map((post) => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener">
            <article
              className="w-96 h-64 bg-cover rounded-lg flex flex-col justify-end bg-blend-multiply bg-[#bbb] px-4 py-2"
              style={{ backgroundImage: `url('${post.featureImage}')` }}
            >
              <h3 className="normal-case font-bold text-lg">{post.title}</h3>

              <div className="flex space-x-2 justify-center">
                <span>{post.publishedAtString}</span>
                <span>|</span>
                {post.primaryTag && (
                  <span className="capitalize">{post.primaryTag}</span>
                )}
              </div>
            </article>
          </a>
        ))}
      </div>
      <LargeButtonLink href="https://blog.warwick.film">
        Read More
      </LargeButtonLink>
    </section>
  );
}
