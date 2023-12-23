import 'server-only';

import { getRelativeTimeString } from '@/lib/date';

export type BlogPostSummary = {
  id: string;
  title: string;
  url: string;
  featureImage: string;
  publishedAt?: string;
  publishedAtString?: string;
  primaryTag?: string;
};

export async function getLatestPosts(): Promise<BlogPostSummary[] | null> {
  let posts;

  if (!process.env.GHOST_URL || !process.env.GHOST_CONTENT_API_KEY) {
    return null;
  }

  try {
    const res = await fetch(
      `${process.env.GHOST_URL}/ghost/api/content/posts?` +
        new URLSearchParams({
          key: process.env.GHOST_CONTENT_API_KEY,
          include: 'tags',
          limit: '3',
          filter: 'visibility:public',
        }),
    );
    posts = (
      (await res.json()) as {
        posts: {
          slug: string;
          id: string;
          uuid: string;
          title: string;
          feature_image: string;
          feature_image_alt: string;
          feature_image_caption: string;
          featured: boolean;
          visibility: string;
          created_at: string;
          updated_at: string;
          published_at: string;
          url: string;
          access: boolean;
          primary_tag: {
            id: string;
            name: string;
            slug: string;
            visibility: string;
            url: string;
          };
        }[];
      }
    ).posts;
  } catch (err) {
    console.error(err);
    return null;
  }

  return posts
    .filter(
      (post) =>
        post.title && post.url && post.feature_image && post.published_at,
    )
    .map((post) => ({
      id: post.id,
      title: post.title as string,
      url: post.url as string,
      featureImage: post.feature_image as string,
      publishedAt: post.published_at as string,
      publishedAtString: getRelativeTimeString(post.published_at as string),
      primaryTag:
        post.primary_tag?.visibility === 'public'
          ? post.primary_tag.name
          : undefined,
    }));
}
