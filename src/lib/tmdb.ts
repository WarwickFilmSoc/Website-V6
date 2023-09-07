const tmdbImageUrlBase = 'https://image.tmdb.org/t/p/original/';

export function getTmdbImageUrl(url: string): string {
  return `${tmdbImageUrlBase}${url}`;
}
