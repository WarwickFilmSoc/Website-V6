'use client';
import { Accordion } from 'flowbite-react';
import Link from 'next/link';

export default function FaqAccordion() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Who are Warwick Student Cinema?</Accordion.Title>
        <Accordion.Content>
          WSC is one of the largest societies on campus and is a cinema run by
          students, for the members and guests of the University of Warwick.
          Since we were founded back in 1973, we&apos;ve been showing a wide
          variety of films – from Hollywood blockbusters to the more obscure
          artistic films that didn&apos;t get the cinema release they deserved,
          as well as the classics that you want to see again.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Where do you show films?</Accordion.Title>
        <Accordion.Content>
          Films are screened in&nbsp;
          <a
            href="https://campus.warwick.ac.uk/search/623c88ba421e6f5928c0d9ad"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            Lecture Theatre 3 (L3)
          </a>
          &nbsp;on the Science Concourse. This is situated over the bridge from
          the library.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What films do you show, and how often do you show them?
        </Accordion.Title>
        <Accordion.Content>
          There are screenings on five or six nights each week with two shows on
          some nights. For more information, see&nbsp;
          <Link href="/whats-on" className="text-accent" target="_blank">
            our schedule
          </Link>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Where can I buy a ticket?</Accordion.Title>
        <Accordion.Content>
          Tickets can be bought online on the&nbsp;
          <a
            href="https://www.warwicksu.com/venues-events/events/4273/"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            Warwick SU website
          </a>
          . Tickets can also be bought in person from 20 minutes before the film
          starts in the Science Concourse corridor.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          How much does it cost to watch a film?
        </Accordion.Title>
        <Accordion.Content>
          A standard ticket costs £4 (£3.00 for members), but we offer a variety
          of discounted ticket prices as well as term passes. See&nbsp;
          <Link href="/about#tickets" className="text-accent" target="_blank">
            Ticket Prices
          </Link>
          &nbsp;for more information.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do I pay?</Accordion.Title>
        <Accordion.Content>
          We accept payment by cash at the tills on the night, but the easiest
          way to get a ticket is booking via the&nbsp;
          <a
            href="https://www.warwicksu.com/venues-events/events/4273/"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            Warwick SU website
          </a>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What is a loyalty card and how does it work?
        </Accordion.Title>
        <Accordion.Content>
          We have a loyalty card scheme, where you receive a stamp for every
          ticket you purchase at a standard screening. After collecting four
          stamps, you can redeem a free ticket! You can pick up a loyalty card
          from our publicity table on the Science Concourse or at our
          till.&nbsp;
          <Link
            href="/terms-and-conditions"
            className="text-accent"
            target="_blank"
          >
            Terms and conditions apply
          </Link>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          How much does it cost to become a society member?
        </Accordion.Title>
        <Accordion.Content>
          Membership costs £4 and lasts for the whole academic year in which you
          bought it. In order to become a member, you need to become a member of
          the Warwick SU Societies Federation. More information can be found on
          the&nbsp;
          <Link
            href="/about#membership"
            className="text-accent"
            target="_blank"
          >
            ticketing page
          </Link>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can I become a society member</Accordion.Title>
        <Accordion.Content>
          You can become a member of the society on the&nbsp;
          <a
            href="https://www.warwicksu.com/societies-sports/societies/filmsoc/#org-join"
            target="_blank"
            rel="noopener"
            className="text-accent"
          >
            Warwick SU Website
          </a>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the benefits or becoming a society member?
        </Accordion.Title>
        <Accordion.Content>
          Joining Warwick Student Cinema allows you to get even cheaper tickets
          to our films, for just £4! On top of that, you get a film for free
          when you become a member! We also show several films a year completely
          free to members!
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Can I buy multiple tickets?</Accordion.Title>
        <Accordion.Content>
          Yes. You can buy tickets for you and any guests.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Are staff welcome?</Accordion.Title>
        <Accordion.Content>
          Absolutely, and you get your first film for free! Just show your
          University card at the tills and ask for your free staff ticket.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is the general public welcome?</Accordion.Title>
        <Accordion.Content>
          Yes, the cinema is open to everyone!
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Can I reserve seating?</Accordion.Title>
        <Accordion.Content>
          We do not offer reserved seating, and tickets are sold on a first
          come, first served basis. There is usually plenty of space for you to
          sit with your friends, but if you want to guarantee seats together we
          would recommend arriving early. We typically start selling tickets at
          the tills twenty minutes before the advertised start time, and tickets
          are sold online as soon as the film is confirmed.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is the Cinema wheelchair accessible?</Accordion.Title>
        <Accordion.Content>
          There is space available for customers using wheelchairs, which can be
          found on the balcony level by the tables as you enter the cinema. If
          you require any assistance on the night, please don&apos;t hesitate to
          speak to a steward.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>So... do you show DVDs?</Accordion.Title>
        <Accordion.Content>
          No! We are proud to show cinema-format films digitally on our
          cutting-edge 4K RGB laser projector, and we also show 35mm film, for
          which we fully equipped with every commercially available professional
          digital cinema sound format (Dolby Digital, DTS and SDDS) – meaning if
          there&apos;s a digital soundtrack to a film, we&apos;ll be using it!
          We have over 8kW of amplification power so the speech on the
          soundtrack is crystal clear while the effects sound as the director
          intended. We also have the ability (and inclination!) to show films in
          70mm – a format not generally seen outside of the best cinemas in
          London&apos;s West End. Whenever we can, we will screen a film in 70mm
          for its improved picture and sound quality, and we usually schedule a
          70mm showing of older films during each of the Autumn and Spring
          terms.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Are you a licensed cinema?</Accordion.Title>
        <Accordion.Content>
          Yes! Warwick Student Cinema is a professional, licensed cinema.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can I help out at the cinema?</Accordion.Title>
        <Accordion.Content>
          There are plenty of opportunities to join the cinema crew, from
          stewarding to marketing to IT. Becoming a crew member comes with great
          perks too!&nbsp;
          <Link href="/crew" className="text-accent" target="_blank">
            Find out more about becoming a crew member
          </Link>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Why would I want to become crew?</Accordion.Title>
        <Accordion.Content>
          Becoming a crew member gives free films for you and a guest, teaches
          you new skills and welcomes you into the great behind-the-scenes
          community with fun socials and access to our office. With 5 teams to
          choose from, there&apos;s something for everyone!&nbsp;
          <Link href="/crew" className="text-accent" target="_blank">
            Find out more about the different opportunities on the crew.
          </Link>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          I think I lost an item at a screening; do you have it?
        </Accordion.Title>
        <Accordion.Content>
          If you wish to contact us to ask if we&apos;ve found an item, please
          email the Chief Duty Manager at&nbsp;
          <a href="mailto:chiefdm@warwick.film" className="text-accent">
            chiefdm@warwick.film
          </a>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Can I advertise at Warwick Student Cinema?
        </Accordion.Title>
        <Accordion.Content>
          Yes! We provide a variety of advertising opportunities. More
          information is available on our&nbsp;
          <Link
            href="/about#advertising"
            className="text-accent"
            target="_blank"
          >
            advertising page
          </Link>
          .
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          I have a film suggestion; can it go on the schedule?
        </Accordion.Title>
        <Accordion.Content>
          We always welcome suggestions for our schedule. Get in touch on
          the&nbsp;
          <Link href="/suggestions" className="text-accent" target="_blank">
            suggestions page
          </Link>
          !
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          I&apos;m a member of another Warwick society - can we collaborate?
        </Accordion.Title>
        <Accordion.Content>
          Absolutely! We are always looking to collaborate with other societies.
          Get in touch with the Vice President (
          <a href="mailto:vice-president@warwick.film" className="text-accent">
            vice-president@warwick.film
          </a>
          )
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
