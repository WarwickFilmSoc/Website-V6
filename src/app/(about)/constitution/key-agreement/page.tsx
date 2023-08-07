import styles from '../constitution.module.css';
import React from 'react';
import Link from 'next/link';

export default function KeyAgreement() {
  return (
    <main className={`mx-auto max-w-7xl px-2 ${styles.constitution}`}>
      <h1 className="text-4xl font-bold">WSC Key Allowances and Agreement</h1>

      <h2>Supporting Documents</h2>
      <ul>
        <li>
          <Link href="/constitution">Constitution</Link>
          &nbsp;
          <a
            href="/resources/WSC%20Constitution%20(March%202023).pdf"
            target="_blank"
          >
            (PDF)
          </a>
        </li>
        <li>
          <Link href="/constitution/executive-roles">
            Executive Roles and Responsibilities
          </Link>
          &nbsp;
          <a
            href="/resources/Executive%20Roles%20and%20Responsibilities%20(Februrary%202023).pdf"
            target="_blank"
          >
            (PDF)
          </a>
        </li>
        <li>
          <Link href="/constitution/committees">Committees</Link>
          &nbsp;
          <a href="/resources/Committees%20(June%202023).pdf" target="_blank">
            (PDF)
          </a>
        </li>
      </ul>

      <h2 className="!mt-8">Key Allowances</h2>
      <p>
        The following keys shall be issued to the appropriate members at the
        discretion of their respective committee head and President. All key
        holders must be members of WSC. All keys are subject to recall by the
        Executive Committee should it be deemed necessary, in spite of any
        qualifications held by the person in question.
      </p>
      <table
        className={`table-auto ${styles.keyTable} border-2 border-primary mt-2`}
      >
        <tr>
          <th>Position / Key</th>
          <th>Corridor</th>
          <th>Office</th>
          <th>Dual Proj/Office</th>
          <th>Corridor Key Box</th>
          <th>Technical Key Box</th>
          <th>DM Locker</th>
        </tr>
        <tr>
          <th className="font-normal">President</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <th className="font-normal">Vice-President</th>
          <td>✓</td>
          <td>✓</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Treasurer</th>
          <td>✓</td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
        </tr>
        <tr>
          <th className="font-normal">Films Officer</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Chief Projectionist</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Chief DM</th>
          <td>✓</td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
        </tr>
        <tr>
          <th className="font-normal">Publicity Officer</th>
          <td>✓</td>
          <td>✓</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Technical Officer</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">IT Officer</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td></td>
          <td>✓</td>
        </tr>
        <tr>
          <th className="font-normal">Marketing Officer</th>
          <td>✓</td>
          <td>✓</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Duty Managers</th>
          <td>✓</td>
          <td></td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th className="font-normal">Projectionists</th>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
          <td>✓</td>
          <td></td>
        </tr>
      </table>

      <h2 className="!mt-8">Key Agreement</h2>
      <p className="!mb-4">
        I understand that the keys I have been issued with shall remain the
        property of the University of Warwick Students&apos; Union and must be
        returned immediately upon the request of the WSC Exec, any Students
        Union Sabbatical Officer or the Societies Administrator. Keys must be
        returned to the WSC President, or their nominated representative, who
        must be an officer of WSC or the Students Union.
      </p>
      <p className="!mb-4">
        I agree to use these keys only to carry out official WSC business and
        understand that unofficial use, or non-return of keys, is a serious
        breach of conduct, and could result in disciplinary action in
        conjunction with the Students&apos; Union, the University or both.
      </p>
      <p className="!mb-4">
        This key agreement expires at noon on Thursday Week 10, Term 3, and so
        all keys loaned by this agreement must be returned before then, ahead of
        the summer vacation, unless you are a member of the WSC Exec at the
        time, in which case this agreement will roll over to the end of your
        term on the WSC Executive. I understand this and will return my keys
        before this deadline.
      </p>
      <p className="!mb-4">
        Keyholders are reminded that the University has Security Policies
        regarding keys to University premises. These policies apply to all
        keyholders, and you consent to abide by them by accepting custody of
        university keys. Important points include automatically returning keys
        when requested, not loaning your keys to others and leaving the area
        secure. Full documentation can be found on the University Security
        website:&nbsp;
        <a href="http://go.warwick.ac.uk/security" target="_blank">
          http://go.warwick.ac.uk/security
        </a>
        .
      </p>
      <p>
        If at any time I become aware that these keys have been lost or stolen,
        then I shall notify the WSC President immediately, to allow them to act
        accordingly.
      </p>
    </main>
  );
}
