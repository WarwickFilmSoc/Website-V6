export default function FilmLoadingCard({ className }: { className?: string }) {
  return (
    <article className={`group mb-6 animate-pulse ${className}`}>
      <div className="w-full h-40 overflow-hidden mb-2">
        <div className="w-full h-full object-cover bg-slate-700 "></div>
      </div>
      <div className="mb-3 h-8 w-1/2 bg-slate-700 rounded"></div>
      <div className="flex flex-row gap-4">
        <div className="h-4 w-20 bg-slate-700 rounded"></div>
        <div className="h-4 w-20 bg-slate-700 rounded"></div>
        <div className="h-4 w-20 bg-slate-700 rounded"></div>
      </div>
      <div className="mt-3 h-4 w-2/3 bg-slate-700 rounded"></div>
    </article>
  );
}
