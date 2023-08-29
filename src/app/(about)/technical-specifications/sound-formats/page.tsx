import Link from 'next/link';
import Image from 'next/image';
import dolbyStereo from '@/assets/about/technical/sound-dolby-stereo.svg';
import dolbyStereoSr from '@/assets/about/technical/sound-dolby-stereo-sr.svg';
import dolbyDigital from '@/assets/about/technical/sound-dolby-digital.svg';
import dts from '@/assets/about/technical/sound-dts.svg';
import sdds from '@/assets/about/technical/sound-sdds.svg';
import sdds8 from '@/assets/about/technical/sound-sdds-8.svg';
import datasatDigitalSound from '@/assets/about/technical/sound-datasat-digital-sound.svg';
import dolbyStereo70 from '@/assets/about/technical/sound-dolby-stereo-70.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sound Formats - Technical Specifications',
  description:
    'Here at Warwick Student Cinema, we are very proud of our projecting capabilities, being able to project nearly every sound format ever made for both 35mm and 70mm film.',
};

export default function SoundFormats() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/technical-specifications" className="text-white">
          Technical Specifications
        </Link>
      </p>
      <h1 className="mb-1">Sound Formats</h1>
      <p>
        Here at Warwick Student Cinema, we are very proud of our projecting
        capabilities, being able to project nearly every sound format ever made
        for both 35mm and 70mm film.
      </p>
      <h2 id="dolby-stereo">Dolby Stereo</h2>
      <Image
        src={dolbyStereo}
        alt="Dolby Stereo"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        Before Dolby Stereo, the vast majority of 35mm cinema sound was optical
        mono audio printed on the film. This was largely the case until 1975,
        when Dolby released Dolby Stereo. This combined their A-type noise
        reduction with matrix encoding to extrapolate 4 channels of audio from
        the 2 waveforms present on 35mm film. These are Left, Right, Centre, and
        Surround. This was used on nearly every film in the late 1970s and was
        still used into the early 1990s.
      </p>
      <h2 id="dolby-sr">Dolby Spectral Recording (SR)</h2>
      <Image
        src={dolbyStereoSr}
        alt="Dolby Spectral Recording (SR)"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        Dolby SR, or Spectral Recording, was released in 1986 and was an
        improvement on the existing Dolby Stereo. It used the new Dolby S noise
        reduction to further decrease noise and new, more complex, matrix
        encoding. It still uses the optical waveforms on 35mm and the 4 matrixed
        channels as before. This would replace the other sound format on the
        print, however older Dolby Stereo equipment could still decode this with
        passable results.
      </p>
      <h2 id="dolby-digital">Dolby Digital</h2>
      <Image
        src={dolbyDigital}
        alt="Dolby Digital"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        Dolby Digital was released in late 1992 using AC-3 compression of a
        bitrate of 320kbit/s. This encoded 5 full band channels of audio and one
        sub channel. These being Left, Right, Centre, Subwoofer, Left Surround,
        and Right Surround. This was printed along side Dolby SR, allowing it to
        revert if there was damage on the digital track. SRD as it was known as
        (Spectral Recording Digital) went to become the most popular sound
        format on film, being on nearly every 35mm print made after 1994.
      </p>
      <h2 id="dts">Digital Theatre Systems (DTS)</h2>
      <Image
        src={dts}
        alt="Digital Theatre Systems (DTS)"
        className="mt-1 sm:float-right sm:ml-4 w-56 md:w-64 mb-2 bg-transparent"
        width={300}
      />
      <p>
        DTS or digital theatre systems was the first widely available digital
        sound format, being released with Jurassic Park in 1993. It uses
        timecode that is printed next to the optical sound track and the audio
        comes on CDs, which are synced to the print. DTS used the APT-x100 audio
        codec and at a bitrate of 882kbit/s. This is a higher fidelity than
        Dolby Digital and people often praise DTS for sounding superior to Dolby
        Digital. It is quite common for 35mm films to have both soundtracks on
        them. Because the printed track is just timecode, this was also adapted
        for use on 70mm prints, taking over from 6 track magnetic sound.
      </p>
      <h2 id="sdds">Sony Dynamic Digital Sound (SDDS)</h2>
      <Image
        src={sdds}
        alt="Sony Dynamic Digital Sound (SDDS)"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        SDDS was the last sound format to be released in late 1993. It is the
        highest fidelity format, using the ATRAC codec (using later revisions as
        technology improved) and used a bitrate of 2,200kbit/s. This is to
        accommodate 12 total channels on the film. This data was printed
        continuously on the very edge of the film. For most prints, there are 6
        full band channels. Left, Right, Centre, LFE (low frequency effects),
        Left Surround, and Right Surround. There is also embedded in the data
        stream 4 higher compressed backup tracks that were mirrored on each side
        of the film encase of damage to one side of the print. This increases
        the amount of damage needed for it to fully drop out to the analogue
        backup. All 3 sound formats can be on one print, and it is quite common
        for high budget films to come on all 3.
      </p>
      <h2 id="sdds-8">Sony Dynamic Digital Sound (SDDS) - 8 Channel</h2>
      <Image
        src={sdds8}
        alt="Sony Dynamic Digital Sound (SDDS) - 8 Channel"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        This is the same format as before but it utilises 2 extra full band
        channels to recreate the large format sound used on 70mm film in the
        1940s to 1970s. These are a Left Centre and a Right Centre and are
        designed to expand the width of the centre channel, allowing the panning
        of actors voices as they walk across the screen. This would be
        particularly noticeable on large screens, hence why it was used on 70mm
        in the past. As this has a different audio mixing to the standard 5.1
        used by the other formats, this was less popular and only around 170
        films being mixed for this. We sadly do not have Left Centre and Right
        Centre channels here at WSC so we mix these down when playing films in 8
        channels.
      </p>
      <h2 id="datasat-digital-sound">Datasat Digital Sound</h2>
      <Image
        src={datasatDigitalSound}
        alt="Datasat Digital Sound"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        In 2008, DTS sold off its cinema division to Datasat Digital
        Entertainment. This included DTS Digital Sound. This format is just a
        rebranding of DTS and all the technology and equipment is the same.
      </p>
      <h2 id="dolby-stereo-70">Dolby Stereo 70mm Six Track</h2>
      <Image
        src={dolbyStereo70}
        alt="Dolby Stereo 70mm Six Track"
        className="mt-1 sm:float-right sm:ml-4 w-64 md:w-72 mb-2 bg-transparent"
        width={300}
      />
      <p>
        In 1976, the same A-type noise reduction was used on magnetic audio on
        70mm film. There are 6 tracks of audio on 70mm film. These were
        traditionally Left, Left Centre, Centre, Centre Right, Right, and
        Surround. Dolby changed this with the introduction of 6 track Dolby
        Stereo by replacing the Left Centre and Right Centre with ‘Baby Boom’
        channels. These were stereo subwoofer channels, the first discreet
        subwoofer channel in cinema. This is referred to as format 42. Dolby
        also created a second format, that used the baby boom channels for split
        surround by using a crossover. This allowed stereo surround on 70mm
        film, however this was much less popular as it required a new mix of the
        film to be created verses the 35mm prints. This is referred to as format
        43.
      </p>
      <p className="mt-8 text-sm">
        By Ethan Graham (chief projectionist 2022&ndash;23).
      </p>
    </main>
  );
}
