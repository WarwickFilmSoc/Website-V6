import 'server-only';

import GhostContentApi from '@tryghost/content-api';
import { getRelativeTimeString } from '@/lib/date';

const api = new GhostContentApi({
  url: process.env.GHOST_URL || '',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0',
});

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
    posts = await api.posts.browse({
      limit: 3,
      include: ['tags'],
      filter: 'visibility:public',
    });
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
