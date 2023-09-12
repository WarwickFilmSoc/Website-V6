import Link from 'next/link';

export default function Tickets({ showTitle }: { showTitle?: boolean }) {
  return (
    <div id="tickets">
      {showTitle && <h2>Tickets</h2>}
      <p className="mb-1">
        Tickets can either be purchased&nbsp;
        <a
          href="https://www.warwicksu.com/venues-events/events/4273/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          online from Warwick SU
        </a>
        &nbsp;and collected on the day using your Student ID, or purchased in
        cash from our friendly stewards.
      </p>
      <table className="table-style">
        <thead>
          <tr>
            <th>Ticket</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="font-normal">WSC Member</th>
            <td>£3.00</td>
          </tr>
          <tr>
            <th className="font-normal">University Member</th>
            <td>£4.00</td>
          </tr>
          <tr>
            <th className="font-normal">General Public</th>
            <td>£4.00</td>
          </tr>
          <tr>
            <th className="font-normal">Under 18s</th>
            <td>Free!</td>
          </tr>
          <tr>
            <th className="font-normal">Filled Loyalty Card</th>
            <td>Free!</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-1 text-xs">
        Tickets and loyalty cards are subject to our&nbsp;
        <Link
          href="/terms-and-conditions"
          className="text-accent"
          target="_blank"
        >
          Terms and Conditions
        </Link>
        . Special events such as the AllNighter will be advertised separately
        and may involve different pricing.
      </p>

      <h3 className="mt-3 font-lexend font-bold text-2xl">Term Pass</h3>
      <p className="mb-1">
        A term 1 pass allows free entry to all of our 70+ screenings in Term 1
        2023, excluding special events such as the AllNighter.
      </p>
      <table className="table-style">
        <thead>
          <tr>
            <th>Term Pass</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="font-normal">
              <a
                href="https://www.warwicksu.com/venues-events/events/4273/24401/"
                target="_blank"
                rel="noopener"
                className="text-accent"
              >
                Term 1 Film Pass (Members)
              </a>
            </th>
            <td>£25.00</td>
          </tr>
          <tr>
            <th className="font-normal">
              <a
                href="https://www.warwicksu.com/venues-events/events/4273/24401/"
                target="_blank"
                rel="noopener"
                className="text-accent"
              >
                Term 1 Film Pass (Non-Members)
              </a>
            </th>
            <td>£35.00</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-1 text-xs">
        Term passes are subject to our&nbsp;
        <Link
          href="/terms-and-conditions"
          className="text-accent"
          target="_blank"
        >
          Terms and Conditions
        </Link>
        .
      </p>
    </div>
  );
}
