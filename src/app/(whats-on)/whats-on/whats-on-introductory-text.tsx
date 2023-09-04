import Link from 'next/link';

export default function WhatsOnIntroductoryText() {
  return (
    <div className="mb-8">
      <p className="mb-2">
        Come and watch films in our fully-equipped L3 lecture theatre, and come
        to our other events throughout the term too! All our screenings are open
        to both members of the public and of Warwick University.
      </p>
      <p>
        Find out more about tickets, memberships and where to find us on
        our&nbsp;
        <Link href="/about" className="text-accent">
          about page
        </Link>
        . You can also pick up our free publicity at our table outside L3, or
        download them online&nbsp;
        <Link href="/publicity" className="text-accent">
          here
        </Link>
        .
      </p>
    </div>
  );
}
