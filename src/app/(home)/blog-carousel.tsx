import LargeButtonLink from '@/components/large-button-link';
import { getLatestPosts } from '@/lib/blog';
import BlogPostCard from '@/app/(home)/blog-post-card';

export default async function BlogCarousel() {
  const posts = await getLatestPosts();

  return (
    <section className="mx-4">
      <h2 className="mb-4">
        Mise En Scène <span className="text-accent">Blog</span>
      </h2>
      {posts ? (
        posts.length === 3 ? (
          <div className="flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 flex-col md:flex-row">
            <BlogPostCard post={posts[0]} />
            <BlogPostCard post={posts[1]} large />
            <BlogPostCard post={posts[2]} />
          </div>
        ) : (
          <div className="flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 flex-col md:flex-row">
            {posts?.map((post) => <BlogPostCard post={post} key={post.id} />)}
          </div>
        )
      ) : (
        <div className="text-xl mb-4">A Warwick Filmsoc Blog</div>
      )}

      <LargeButtonLink href="https://blog.warwick.film">
        Read More
      </LargeButtonLink>
    </section>
  );
}
