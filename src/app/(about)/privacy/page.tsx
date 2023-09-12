import Link from 'next/link';
import { Metadata } from 'next';
import { execTeam, getExecPositionNames } from '@/data/exec';
import TeamOfficerCard from '@/app/crew/team-officer-card';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Data Protection at Warwick Student Cinema.',
};

export default function Privacy() {
  return (
    <main className="content-style">
      <p className="text-xl font-lexend uppercase -mb-1">
        <Link href="/about" className="text-white">
          About Us
        </Link>
      </p>
      <h1>Privacy</h1>
      <h2>What Data do we Hold on You?</h2>
      <p>
        The data we hold on you depends on where we got it from. In general,
        conatct information for members will have come from the Students’ Union.
        Data on University members who are not members of WSC will have come
        from the University. Additional data on anyone who has a website logon
        will have have been provided by you directly.
      </p>

      <h3>Warwick Student Cinema Members and Student Union Members</h3>
      <p>
        Contact information for the majority of our members comes from Warwick
        SU. We check hourly that all the data we hold is up to date with the
        data that the Students’ Union hold on you. To change your mailing
        preference or email address, visit the SU website.
      </p>
      <p>
        E-mails sent to members make use of the BCC field to keep all members
        anonymous. A log is kept of e-mails sent and the addresses they were
        sent to for identifying technical problems and to keep a record of any
        communication we have had with any members via this method.
      </p>

      <h3>University of Warwick Card Holders</h3>
      <p>
        When a member of the University attends a show, their student or staff
        status and name is validated using the University’s address book. This
        information is then cached on our system to make it more efficient next
        time you attend a show and to allow us to compile attendance statistics.
        To update your name, change your preferred name with the University.
      </p>

      <h3>Website Users</h3>
      <p>
        When you create an account on our website, you may be given the option
        to provide additional information about yourself. This information may
        be in addition to information collected about you from the University
        and SU. The additional information you have provided directly can be
        amended by you through the WSC website.
      </p>
      <p>
        The option is also available to disable synchronisation of your data
        with the SU. In this case, all data held on you can be updated through
        the WSC website.
      </p>

      <h2>Who Has Access to This Data?</h2>
      <p>
        The only people that have access to all the information held on you are
        our system administrators and the exec.
      </p>

      <h2>What Other Information do we Collect</h2>
      <p>
        When you use our website, we collect information about what pages are
        visited, where you are viewing the website from and any errors that
        occurred. This allows us to compile statistics about who visits our
        website and how they are using it, and helps us fix issues quickly as
        soon as they occur.
      </p>

      <p>
        If you logon to the website, we also store a cookie on your computer.
        This cookie is used to identify your session whilst you are logged on.
        The cookie contains no actual information about you or the session
        itself.
      </p>

      <h2>Who Can I Contact for More Information?</h2>
      <p>
        Please email the {execTeam.itOfficer.name},{' '}
        {getExecPositionNames(execTeam.itOfficer)}, at&nbsp;
        <a
          href={`mailto:${execTeam.itOfficer.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {execTeam.itOfficer.email}
        </a>
        .
      </p>
      <TeamOfficerCard position={execTeam.itOfficer} />
    </main>
  );
}
