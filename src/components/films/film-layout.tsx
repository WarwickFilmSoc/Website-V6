import { ReactNode } from 'react';
import FilmLoadingCard from '@/components/films/film-loading-card';

export default function FilmLayout({
  children,
  loading,
}: {
  children?: ReactNode | ReactNode[];
  loading?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      {loading && (
        <>
          <FilmLoadingCard />
          <FilmLoadingCard className="hidden sm:block" />
          <FilmLoadingCard className="hidden md:block" />
          <FilmLoadingCard className="hidden lg:block" />
        </>
      )}
      {children}
    </div>
  );
}
