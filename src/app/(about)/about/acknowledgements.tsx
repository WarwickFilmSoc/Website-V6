export default function Acknowledgements() {
  return (
    <div id="acknowledgements" className="md:col-span-2">
      <h2 className="text-2xl sm:text-3xl">Acknowledgements</h2>
      Most film-related metadata (including poster and backdrop images) used on
      this website is provided by&nbsp;
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent"
      >
        The Movie Database (TMDb)
      </a>
      .
      <p className="mt-2 mb-1">
        This new Warwick Student Cinema website was written in 2023 with the
        help of:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div>
          <h3 className="font-bold">Development</h3>
          <ul className="list-disc list-inside">
            <li>Josh Heng</li>
            <li>Arun Pattni</li>
            <li>Adam Skrzmowski</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Design</h3>
          <ul className="list-disc list-inside">
            <li>Ethan Graham</li>
            <li>Josh Heng</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Review</h3>
          <ul className="list-disc list-inside">
            <li>Olivia Lancastle</li>
            <li>Ethan Graham</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
