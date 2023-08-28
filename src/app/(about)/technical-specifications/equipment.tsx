export function Credit({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3>Credit</h3>
      <ul>
        <li>
          Dolby Digital and DTS equipment installed by&nbsp;
          <a href="http://www.bell-theatre.com/" target="_blank" rel="noopener">
            Bell Theatre Services
          </a>
          .
        </li>
        <li>
          Additional audio equipment supplied by&nbsp;
          <a
            href="http://www.soundassociates.co.uk/"
            target="_blank"
            rel="noopener"
          >
            Sound Associates
          </a>
          .
        </li>
        <li>
          Lamps supplied by&nbsp;
          <a href="https://www.jackroe.com/" target="_blank" rel="noopener">
            Jack Roe (CS)
          </a>
          .
        </li>
        <li>
          Electronics and other similar equipment from&nbsp;
          <a
            href="https://uk.rs-online.com/web/"
            target="_blank"
            rel="noopener"
          >
            RS Components
          </a>
          .
        </li>
        <li>
          Dolby and the Double-D symbol are trademarks of Dolby Laboratories
          Licensing Corporation.
        </li>
        <li>
          Platter kindly loaned by the&nbsp;
          <a href="http://www.ppttrust.org/" target="_blank" rel="noopener">
            Projected Picture Trust
          </a>
          .
        </li>
        <li>
          DFP-2000 Sony Dynamic Digital Sound (SDDS) equipment kindly supplied
          on permanent loan by&nbsp;
          <a
            href="https://web.archive.org/web/20130701055758/http://www.sdds.com/"
            target="_blank"
            rel="noopener"
          >
            Sony UK
          </a>
          .
        </li>
        <li>Digital projector supplied and installed by Omnex Pro-Film.</li>
      </ul>
    </div>
  );
}
export default function Equipment() {
  return (
    <>
      <h2 id="equipment">Equipment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <h3>Sight</h3>
          <ul>
            <li>
              1x Barco SP4K-15 RGB laser digital cinema projector with
              high-contrast motorised zoom lens
            </li>
            <li>2x Cinemeccanica Victoria 8 35/70mm projectors</li>
            <li>1x Barco Alchemy ICMP-X integrated cinema media processor</li>
            <li>1x LANsat electronic content delivery server</li>
            <li>1x UniqueX electronic content delivery server</li>
            <li>1x Cinemeccanica electric rewinding bench</li>
            <li>1x Philips ST-270 platter</li>
          </ul>

          <Credit className="hidden md:block" />
        </div>
        <div>
          <h3>Sound</h3>
          <ul>
            <li>
              5x QSC ISA450 and 3x QSC ISA750 professional amplifiers (giving
              just over 11,000 watts total)
            </li>
            <li>
              3x JBL loudspeaker stacks for left, centre and right channels,
              each comprising 4638 LF and 2227/2352 HF sections
            </li>
            <li>4x JBL 4645B subwoofer loudspeakers</li>
            <li>
              1x JBL 5749 twin-driver subwoofer loudspeaker (effectively two
              4645Bs in one cabinet)
            </li>
            <li>8x JBL 8340a surround loudspeakers (4 per suround channel)</li>
            <li>
              1x DTS XD10 film sound processor with AES digital output module
            </li>
            <li>1x DTS 6DSV film sound processor as reserve</li>
            <li>2x 35mm DTS readers and 2x 70mm DTS readers</li>
            <li>
              1x Dolby CP500-70 film sound processor and 2x CAT689 Dolby CP500
              remotes
            </li>
            <li>1x Dolby MPU-1 mangnetic audio preamplifier</li>
            <li>
              2x Dolby/Cinemeccanica reverse scan analogue/digital 35mm sound
              readers
            </li>
            <li>
              1x Datasat AP20 sound processor with Dirac Live 2.0 room
              optimisation
            </li>
            <li>
              1x Sony DFP-D3000 SDDS film sound processor and 2x Sony DFP-R3000
              SDDS penthouse 35mm sound readers
            </li>
            <li>
              1x Sony DFP-D2000 SDDS processor and 2x DFP-R2000 penthouse 35mm
              SDDS readers as reserve
            </li>
            <li>4x Wharfedale Diamond 7.1 booth monitor loudspeakers</li>
            <li>1x Marantz CD-48 CD player</li>
            <li>1x Component Engineering MS100 booth monitor panel unit</li>
          </ul>
        </div>
        <Credit className="md:hidden" />
      </div>
    </>
  );
}
