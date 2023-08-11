import Link from 'next/link';

export default function FrontOfHouse() {
  return (
    <main>
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/crew">Crew</Link>
      </p>
      <h1 className="mb-1">Front of House Team</h1>
      <p>
        The Front of House team of Stewards and Duty Managers looks after
        everything related to our audience and aims to provide them with the
        best service possible.
      </p>

      <h3>Stewarding</h3>
      <p>
        Stewards are essential to the society; without them, our shows would not
        be possible. Stewarding is also the easiest way to get involved with the
        society, and comes with loads of perks:
      </p>

      <ul>
        <li>Earn free films for yourself and a guest!</li>
        <li>Work at the interface of the society and its members.</li>

        <li>
          Meet like-minded people who're interested in all sorts of films.
        </li>

        <li>
          Potentially move on to the highly transferrable skill of Duty Managing
          (see below).
        </li>

        <li>
          Get to know people in other areas of the society - you might even find
          something else at WSC that you enjoy even more!
        </li>
      </ul>

      <p>
        The main roles for a steward are to sell and check tickets for
        admission. After that, you watch the film you volunteered for.
      </p>
      <p>
        So, what's the commitment? We ask that all new stewards work three shows
        within a two week window. This is to ensure you get to learn our
        ticketing system properly. After that, we ask you to volunteer once per
        fortnight. All stewards fulfilling this commitment are rewarded with
        free tickets (including for a guest) to each of our regular screenings.
      </p>

      <p>
        For more information or to sign up as a new steward, contact the Chief
        Duty Manager who'll be pleased to receive your email!
      </p>
      <h3>Duty Managers (DMs)</h3>

      <p>
        The Front of House staff working a show are organised by a qualified
        Duty Manager (DM). The DM, together with the projectionist, is
        responsible for the running of that show. At a screening, the DM will:
      </p>
      <ul>
        <li>
          Train any new stewards on our ticketing system and membership selling;{' '}
        </li>
        <li>Perform all relevant health and safety checks;</li>
        <li>Liaise with the screening's projectionist;</li>
        <li>Set up and oversee the tills throughout ticket selling;</li>
        <li>Cash up the takings.</li>
      </ul>
      <p>
        The DM is always on hand to resolve any problems that arise during the
        show. All DMs begin their involvement with Front of House as stewards
        before going on to the DM training scheme. Training as a DM requires
        greater commitment than stewarding, but it is an excellent way to become
        more involved with the society and learn all sorts of useful
        transferrable skills.
      </p>
    </main>
  );
}
