export default function Membership() {
  return (
    <div>
      <h2>WSC Membership</h2>
      <p className="mb-2">
        WSC Members enjoy discounted tickets, the ability to join crew and
        additional benefits such as free, select films throughout the year.
        Plus, when you join, you&apos;ll get your first ticket free!
      </p>
      <p className="mb-2">
        Membership is handled by the&nbsp;
        <a
          href="https://www.warwicksu.com"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          Warwick Student Union
        </a>
        &nbsp;and expire at the end of the academic year - to join, you must
        have first paid the&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/societies-federation-membership/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          SU Societies Federation Fee
        </a>
        .
      </p>
      <p className="mb-1">
        Membership and the&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/societies-federation-membership/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          Societies Federation Fee
        </a>
        &nbsp;can be purchased online from Warwick SU or in cash from our
        stewards.
      </p>
      <table className="table-style">
        <thead>
          <tr>
            <th>Membership</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="font-normal">WSC Membership</th>
            <td>£4.00</td>
          </tr>
          <tr>
            <th className="font-normal">
              Societies Federation Fee - Undergraduate (1 Year)
            </th>
            <td>£20.00</td>
          </tr>
          <tr>
            <th className="font-normal">
              Societies Federation Fee - Postgraduate (1 Year)
            </th>
            <td>£10.00</td>
          </tr>
          <tr>
            <th className="font-normal">
              Societies Federation Fee - ERASMUS (1 Year)
            </th>
            <td>£8.00</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-1 text-xs">
        Pricing is accurate as of 1 September 2023. See&nbsp;
        <a
          href="https://www.warwicksu.com/societies-sports/societies/societies-federation-membership/"
          target="_blank"
          rel="noopener"
          className="text-accent"
        >
          Warwick SU
        </a>
        &nbsp;for updated prices and multi-year memberships.
      </p>
    </div>
  );
}
