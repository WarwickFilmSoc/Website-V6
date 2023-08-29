import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms and conditions for all Warwick Student Cinema sales and screenings.',
};

export default function TermsAndConditions() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about" className="text-white">
          About Us
        </Link>
      </p>
      <h1>Terms and Conditions</h1>
      <h2>Ticketing Terms and Conditions</h2>
      <ol>
        <li>
          WSC tickets are valid only for the date and time specified on the
          ticket.
        </li>
        <li>
          Standard shows will be charged at £4.00 for University staff/students
          who are non-Members, £3.00 for Members and £4.00 for customers from
          outside the University.
        </li>
        <li>
          Non-standard shows (e.g. AllNighters, Pub Quizzes) will be charged at
          a rate decided by the WSC Exec.
        </li>
        <li>
          WSC reserve the right to withdraw offers such as &apos;Members First
          Film Free&apos;, &apos;Members Free Film&apos; at any point.
        </li>
        <li>
          A WSC Loyalty Card allows the customer one free film for every four
          films they pay to see. These cannot be used in conjunction with
          Five-Film-Passes. For full terms and conditions see&nbsp;
          <Link href="/terms-and-conditions#loyalty" className="text-accent">
            Loyalty Card Terms and Conditions
          </Link>
          .
        </li>
        <li>
          WSC reserve the right to refuse to refund a ticket once it has been
          purchased.
        </li>
        <li>
          WSC reserve the right to refuse entry to any customer, and this
          decision is solely at the discretion of the Duty Manager on the night.
        </li>
        <li>
          Any customer who is late (i.e. arrives after our tills has closed)
          will be required to pay a late-comer fee, should they wish to attend
          the film. Our standard late-comer charge is £5.00 for all customers,
          but the decision on whether to admit late-comers at all, and if so
          what price to charge them is solely at the discretion of the Duty
          Manager on the night.
        </li>
        <li>
          Transfers and refunds follow the&nbsp;
          <a
            href="https://www.warwicksu.com/your-union/tac/purchasing"
            target="_blank"
            rel="noopener"
          >
            Warwick SU Terms and Conditions of Purchasing policy
          </a>
          .
        </li>
      </ol>

      <h2 id="loyalty">Loyalty Card Terms and Conditions</h2>
      <ol className="mb-8 list-decimal">
        <li>
          A loyalty card stamp will be given upon the purchase of a ticket for
          any WSC theatrical screening or upon the redemption of the “member’s
          first film free” ticket.
        </li>
        <li>
          Stamps will not be issued for the purchase of latecomer tickets, or
          for any free (including – but not limited to – any promotional free
          tickets offered to members for selected screenings, but excluding the
          “member’s first film free” ticket) except at the sole discretion of
          WSC. Stamps will also not be issued for any non-theatrical events
          hosted by WSC such as pub quizzes.
        </li>
        <li>One stamp will be given per qualifying ticket purchased.</li>
        <li>
          Once four stamps have been collected by a customer, the completed
          loyalty card may be redeemed for entry to any single standard-priced
          WSC screening.
        </li>
        <li>
          Loyalty cards may not be redeemed for entry to special events
          (quizzes, AllNighters etc.) or to screenings where special pricing
          applies, and may not be used in conjunction with any other offer.
        </li>
        <li>
          WSC reserves the right to refuse to transfer collected stamps between
          loyalty cards.
        </li>
        <li>
          WSC reserves the right to refuse to add a stamp to a card after a
          customer has purchased their ticket and has left the tills.
        </li>
        <li>
          WSC loyalty cards – and any stamps contained thereon – have no cash
          value.
        </li>
        <li>Re-sale of any WSC loyalty cards or stamps is not permitted.</li>
        <li>
          WSC will review the effectiveness of the loyalty card scheme regularly
          and reserves the right to terminate the scheme without notice. In the
          event of such a termination, any completed loyalty cards may only be
          redeemed until the end of the academic year in which stamps cease to
          be issued.
        </li>
        <li>
          WSC reserves the right to amend these terms and conditions without
          prior notice.
        </li>
      </ol>
    </main>
  );
}
