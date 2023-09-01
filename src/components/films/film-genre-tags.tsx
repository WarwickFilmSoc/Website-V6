export default function FilmGenreTags({
  genreString,
  className,
}: {
  genreString: string;
  className: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-2 text-xs uppercase font-lexend ${className}`}
    >
      {genreString.split(',').map((genre) => (
        <span
          key={genre}
          className="block px-1.5 py-0.5 bg-primary group-hover:scale-105"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}
