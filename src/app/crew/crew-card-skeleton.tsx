export default function CrewCardSkeleton() {
  return (
    <div className="group animate-pulse flex flex-col gap-4 justify-around h-full">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="h-4 bg-primary-darker rounded" />
      ))}
    </div>
  );
}
