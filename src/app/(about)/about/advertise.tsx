import advertiseImage from '@/assets/about/about-advertise.jpg';
import Image from 'next/image';

export default function Advertise() {
  return (
    <section id="advertise">
      <h2>Advertise With Us</h2>
      <p className="mb-2">
        Warwick Student Cinema offers a variety of advertising opportunities for
        societies, student services and other commercial entities internal and
        external to the University of Warwick. Our rates are competitive as we
        exist entirely as a not-for-profit charitable service for the members of
        the University of Warwick. Money raised through advertising is invested
        into new equipment, maintenance costs and reducing ticket prices.
      </p>
      <Image
        src={advertiseImage}
        alt="A Spring Officer Elections advertisement in the pre-show slides"
        className="sm:float-right w-48 sm:ml-2 mb-2"
        width={200}
        priority
      />
      <p className="mb-2">
        If you are interested in promoting an event, a product or increasing
        awareness then we can offer advertising on our pre-show slides at the
        start of each screening, our LCD screens around the Science Concourse or
        in our poster and booklet publicity.
      </p>
      <p className="mb-2">
        Please contact the Executive at&nbsp;
        <a
          href="mailto:info@warwick.film"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          info@warwick.film
        </a>
        &nbsp;for more information.
      </p>
    </section>
  );
}
