import Link from 'next/link';
import Equipment from './equipment';
import victoriaProjectorImage from '@/assets/about/technical/victoria-projector.jpg';
import filmImage from '@/assets/about/technical/film.jpg';
import platterImage from '@/assets/about/technical/platter.jpg';
import amplifierImage from '@/assets/about/technical/amplifiers.jpg';
import dolbyDigitalImage from '@/assets/about/technical/dolby-digital.jpg';
import ap20Image from '@/assets/about/technical/ap20.jpg';
import maxImage from '@/assets/about/technical/max.jpg';
import Image from 'next/image';

export default function TechnicalSpecifications() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about" className="text-white">
          About Us
        </Link>
      </p>
      <h1 className="mb-1">
        Technical <span className="hidden sm:inline">Specifications</span>
        <span className="sm:hidden">Specs</span>
      </h1>
      <h2 id="sight" className="mt-0">
        Sight&hellip;
      </h2>

      <p>
        The first thing you should know about Warwick Student Cinema is that we
        do not show DVDs, Blu-rays or any other home cinema format media to our
        audience in L3. Only industry standard equipment is used; this means
        either showing either real film &ndash; both 35mm and 70mm &ndash; or
        DCI compliant digitally-projected movies.
      </p>

      <div className="flex gap-x-4 flex-col md:flex-row">
        <div>
          <h3>35mm and 70mm Film</h3>
          <p>
            Unlike many other cinemas &ndash; even those still able to show 35mm
            or 70mm film &ndash; Warwick Student Cinema usually uses a
            changeover system when running shows from these formats, in which
            two projectors are used alternately. Films are transported on spools
            of about twenty minutes each. A typical feature will have six or
            seven reels. One reel is played on the first projector and at the
            right moment at the end of this reel, we switch over to the second
            projector and so on. This moment is indicated by marks on the film
            (as made famous in <i>Fight Club</i>!) known as &lsquo;cue
            dots&rsquo;, which appear in the top right hand corner of the image.
            There are two sets of dots; the first is approximately eight seconds
            before the end of the reel and indicates to the projectionist when
            to start the film moving through the second projector. The second
            set, about seven seconds later, signals the time to shut off the
            first projector and begin showing the next reel of film. This
            results in an almost seamless changover that you, the audience,
            should not notice.
          </p>
        </div>
        <figure className="flex-shrink-0 md:mt-6 mb:md-2">
          <Image
            src={victoriaProjectorImage}
            alt="One of our Cinemeccanica Victoria 8 projectors"
            height={570}
            className="max-w-96 h-56 md:auto md:w-80 object-cover"
          />
          <figcaption>
            One of our Cinemeccanica Victoria 8 projectors
          </figcaption>
        </figure>
      </div>

      <div className="flex gap-x-4 flex-col-reverse md:flex-row">
        <figure className="flex-shrink-0 md:mb-2">
          <Image
            src={filmImage}
            alt="70mm 6-Track Dolby Stereo film"
            height={250}
            className="w-96 md:w-64 object-cover"
          />
          <figcaption>70mm 6-Track Dolby Stereo film</figcaption>
        </figure>
        <p>
          Not only are we able to project standard 35mm film, but also our
          projectors are capable of handling 70mm film. We are the only student
          cinema in the country capable of showing 70mm and one of only a
          handful of cinemas in the UK who show 70mm film on a regular basis.
          This provides an improved picture due to two reasons: firstly, the
          film is often in better condition than a 35mm print &ndash; as it will
          have been played far less &ndash; and secondly, because the film is
          larger, meaning the image is magnified less than 35mm.
        </p>
      </div>

      <h3 id="platter">Our Platter System</h3>
      <div className="flex gap-x-4 flex-col sm:flex-row">
        <figure className="flex-shrink-0 mt-1 sm:mb-2">
          <Image
            src={platterImage}
            alt="Philips ST-270 platter"
            height={400}
            className="w-80 sm:w-48 object-cover"
          />
          <figcaption>Philips ST-270 platter</figcaption>
        </figure>
        <p>
          Warwick Student Cinema is also able to operate with a long play
          system. This involves, in our case, a platter which was kindly given
          to us on permanent loan by the&nbsp;
          <a href="http://www.ppttrust.org/">Projected Picture Trust</a> in
          2002. The platter consists of three giant plates, each approximately
          54 inches in diameter. The entire film is spliced together and placed
          on one of the plates. The film then makes its way to one of our
          Victoria 8 projectors (from which it is projected on screen) via a
          circuitous route using a series of rollers, before going back to one
          of the other plates. This is particularly useful in the event of one
          of the projectors failing, an event which previously would have
          resulted in the cancellation of the film. Also, unlike any other
          playing system, films can immediately be shown again due to the fact
          that the film uptake is from the inside of the reel.
        </p>
      </div>

      <h3>Digital Cinema</h3>

      <p>
        Our society is also lucky enough to have installed the first 4K RGB
        laser projector in Coventry and Warwickshire, in February 2020. Unlike
        traditional cinema projectors (both digital and film), its light source
        comprises red, green and blue laser modules instead of a xenon arc lamp.
        This cutting-edge illumination technology facilitates superior black
        levels as well as a wider colour gamut to provide the best picture
        possible. The 4K resolution provides a four-fold increase in picture
        detail compared to standard 2K systems.
      </p>

      <p>
        The digital projector &ndash; a Barco SP4k-15 &ndash; is adapted for use
        with its B-mount high contrast lens and has an ICMP-X installed, which
        combines the roles of a digital cinema server and alternative content
        processing (such as the pre-film slideshow). Naturally, our digital
        projector does not operate using a changeover system as there are no
        reels of film to change over. Instead, the film arrives at the cinema on
        a hard drive, or is transfered electronically onto one of our film
        transit servers. The film, stored in a format known as DCP, is then
        &lsquo;ingested&rsquo; (uploaded) to the digital projector server; this
        takes about three-quarters of the time taken to play the whole of the
        film. A playlist on the server is then created, which includes
        auditorium automation (lights, moveable screen masking etc.), pre-film
        trailers and &ndash; of course &ndash; the feature film. This automation
        takes a lot of pressure off of the projectionist on the night!
      </p>

      <h2 id="sound">&hellip;and Sound</h2>
      <figure className="xs:float-right mt-1 xs:mt-0 xs:ml-4">
        <Image
          src={amplifierImage}
          alt="Our sound amplifiers"
          width={260}
          className="w-64 xs:w-48 sm:w-56 lg:w-36 object-cover"
        />
        <figcaption>Our sound amplifiers</figcaption>
      </figure>
      <p>
        The picture is only half of the cinema experience, the other being the
        sound. Warwick Student Cinema can play up to 5.1 surround; left, centre
        and right channels provide precise and clear positioning of dialogue,
        separate left and right surround channels help provide the feeling of
        immersion in the sound and give general atmosphere and finally a
        subwoofer/bass effects channel produces extra strong bass sounds which
        are particularly audible in action and special effects sequences. All
        our amplifiers are THX certified, as are our surround and subwoofer
        speakers. Our left, right and centre loudspeaker stacks are not an
        off-the-shelf system and were custom assembled from components by WSC
        (carefully chosen to best work with the space in L3) and so have no
        manufacturer THX certification as a whole, but only high-quality
        components specified elsewhere in THX-certified systems are used.
      </p>

      <p>
        Digital films all have a standard LPCM sound format, which is entirely
        uncompressed and lossless in order to give the highest quality audio
        possible. From film, we are capable of playing all industry-standard
        sound formats; this includes all three major digital systems
        &ndash;&nbsp;
        <Link href="/technical-specifications/sound-formats#dolby-digital">
          Dolby Digital
        </Link>
        ,&nbsp;
        <Link href="/technical-specifications/sound-formats#dts">
          Digital Theatre Systems (DTS)
        </Link>
        &nbsp; and&nbsp;
        <Link href="/technical-specifications/sound-formats#sdds">
          Sony Dynamic Digital Sound (SDDS)
        </Link>
        &nbsp;&ndash; as well as the older analogue formats. Analogue sound on
        35mm film is usually recorded optically and comprises the single-channel
        mono format as well as the stereo and analogue surround sound&nbsp;
        <Link href="/technical-specifications/sound-formats#dolby-digital">
          Dolby A
        </Link>
        &nbsp;and&nbsp;
        <Link href="/technical-specifications/sound-formats#dolby-sr">
          Dolby SR
        </Link>
        &nbsp; formats. 70mm film is presented with either fantastic
        six-channel&nbsp;
        <Link href="/technical-specifications/sound-formats#dolby-stereo">
          Dolby magnetic sound
        </Link>
        &nbsp;or crystal-clear&nbsp;
        <Link href="/technical-specifications/sound-formats#dts">
          DTS digital sound
        </Link>
        . Magnetic sound on 35mm is rare &ndash; but we can play it if the need
        arises!
      </p>

      <div className="flex gap-x-4 flex-col sm:flex-row">
        <figure className="flex-shrink-0 mt-1">
          <Image
            src={dolbyDigitalImage}
            alt="Film with Dolby Digital audio"
            height={250}
            className="w-80 sm:w-56 object-cover"
          />
          <figcaption>Film with Dolby Digital audio</figcaption>
        </figure>
        <p>
          When showing either 35mm or 70mm film, the sound readers pick up the
          information on the film print and send this to the relevant processor.
          For most formats this is the CP500, which can decode mono, Dolby A,
          Dolby SR and Dolby Digital sound &ndash; all of which share a combined
          reader built into to the Victoria 8 projectors. The DTS and SDDS
          systems both consist of separate readers (which are bolted onto the
          projectors as required) and processors.
        </p>
      </div>

      <div className="flex gap-x-4 flex-col sm:flex-row">
        <p>
          All sound is fed into our AP20 sound processor; when projecting film
          this will come from the relevant film sound processor and for digital
          shows this will come straight from the digital cinema server. The AP20
          allows us to make adjustments to volume etc. and the Dirac Live 2.0
          processing specially optimises the audio based on measurements of how
          sound behaves in L3, ensuring that all of our shows sound as good as
          can be. After processing, each channel of output goes into its own
          amplifier, which together provide more than enough power to drive all
          of the speakers around the auditorium.
        </p>
        <figure className="flex-shrink-0 mt-1">
          <Image
            src={ap20Image}
            alt="AP20 sound processor"
            height={370}
            className="w-96 h-36 sm:h-auto sm:w-48 object-cover"
          />
          <figcaption>AP20 sound processor</figcaption>
        </figure>
      </div>

      <div className="flex gap-x-4 flex-col-reverse sm:flex-row mt-4">
        <figure className="flex-shrink-0 mt-1">
          <Image
            src={maxImage}
            alt="Max lacing a film projector"
            height={380}
            className="w-96 sm:w-56 object-cover"
          />
          <figcaption>Max lacing a film projector</figcaption>
        </figure>
        <div>
          <p>
            But it is not just a crisp picture and clear sound that makes
            projection at Warwick Student Cinema what it is today. All of this
            equipment would be useless if it were not for the steady stream of
            dedicated technicians who maintain the equipment and for the
            projectionists who run it. These people all give up their time to
            first be trained and then, in turn, take on the task of training
            subsequent generations.
          </p>
          <p>
            If you&apos;re interested in getting involved, please see the&nbsp;
            <Link href="/crew/projection">Projection Team page</Link> for more
            information.
          </p>
        </div>
      </div>

      <Equipment />

      <p className="mt-4 text-sm">
        Originally by Amanda Window (technical team); updated by Timothy Green
        (chief projectionist 2011&ndash;12) and subsequently by Kieran Hall
        (chief projectionist 2017&ndash;19). Updated by Ethan Graham (chief
        projectionist 2022&ndash;23) and Josh Heng (IT officer 2023&ndash;24)
        during the upgrade to the new website.
      </p>
    </main>
  );
}
