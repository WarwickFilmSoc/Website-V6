export default function FilmLayoutDivider({ text }: { text: string }) {
  return (
    <div className="flex items-center md:mx-4 mb-6">
      <hr className="grow border-t-2 m-2 md:m-4 flex-shrink-0 w-4" />
      <h2 className="text-xl md:text-2xl mx-2 md:mx-4 text-center">{text}</h2>
      <hr className="grow border-t-2 m-2 md:m-4 flex-shrink-0 w-4" />
    </div>
  );
}
