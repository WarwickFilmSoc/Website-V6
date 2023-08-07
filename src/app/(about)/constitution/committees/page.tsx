import styles from '../constitution.module.css';
import React from 'react';
import Link from 'next/link';

export default function Committees() {
  return (
    <main className={styles.constitution}>
      <p className="text-xl font-lexend uppercase !-mb-1">
        <Link href="/constitution" className="!text-white">
          Constitution
        </Link>
      </p>
      <h1>WSC Committees</h1>
      <p>Last Updated: June 2023</p>

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
          <a href="/resources/Committees%20(June%202023).pdf" target="_blank">
            Committees PDF
          </a>
        </li>
        <li>
          <Link href="/constitution/key-agreement">
            Key Allowances and Agreement
          </Link>
        </li>
      </ul>

      <p className="mt-8">
        The society shall have the following committees, in addition to the
        Executive Committee:
      </p>
      <ol>
        <li>Front of House Committee</li>
        <li>Projection Committee</li>
        <li>Publicity Committee</li>
        <li>Technical Committee</li>
        <li>IT Committee</li>
        <li>Marketing Committee</li>
      </ol>
      <p>
        Appropriate notification for the meeting of any committee shall be no
        less than 48 hours. Individual committees may define their own
        timescales if they consider this timescale to be impractically short.
      </p>
      <p>
        The committees shall have the following responsibilities and remits:
      </p>
      <ol>
        <li>
          <h2>Front of House Committee</h2>
          <ol>
            <li>All qualified DMs who are full members of WSC.</li>
            <li>
              Shall be the decision making body for FoH on any issues within
              their remit, led by the Chief Duty Manager who retains overall
              responsibility.
            </li>
            <li>
              Shall help the Chief Duty Manager(s) ensure all shows are covered
              by sufficient DMs and stewards.
            </li>
            <li>
              The Chief Duty Manager(s) shall be responsible for the creation
              and dissemination of the FoH meeting agenda.
            </li>
            <li>
              Matters of importance as deemed by the Chief Duty Manager(s) or
              Exec shall be voted on by the committee.
            </li>
            <li>
              A minimum of three full members may form a Qualification
              Committee, which itself has the power to qualify projectionists at
              Qualification Shows; where it is not possible to form a
              Qualification Committee with a minimum of three full members, the
              committee may propose a qualification to the Exec to be ratified.
            </li>
            <li>
              Can vote to propose a de-qualification to the Exec. However, the
              Chief Duty Manager(s) can decide that it is not appropriate to
              consult the committee in this case.
            </li>
            <li>
              Shall be key in the coordination and administration of the DM
              Training Scheme and shall decide upon the maximum number of
              trainees.
            </li>
            <li>
              Shall be key in the training of all stewards and DMs, and will
              discuss the progress of trainees.
            </li>
            <li>Shall help uphold FoH standards.</li>
            <li>
              Shall generally assist the Chief Duty Manager(s) when requested.
            </li>
            <li>
              Can propose to the Exec to remove a trainee DM from the training
              scheme, given appropriate cause and warning.
            </li>
            <li>
              When it is required for the proper execution of their duty,
              members shall be granted knowledge of the code to WSC&apos;s safe,
              on the understanding that they are not to share or change it.
            </li>
            <li>
              The Chief Duty Manager(s) may choose to revoke crew status from
              stewards and DMs who work fewer than 5 shows (during terms 1 and 2
              only). This will be reviewed termly, and they shall report to the
              FoH and Executive committees any changes in crew status.
            </li>
            <li>
              Should a duty manager not work a show for over 5 weeks, they may
              be required to work at least one NDM show, at the discretion of
              the committee.
            </li>
            <li>
              Duty managers inactive for over a term may be removed after proper
              warning. Any such changes shall be reported to the Projection and
              Executive committees.
            </li>
          </ol>
        </li>
        <li>
          <h2>Projection Committee</h2>
          <ol>
            <li>All qualified projectionists who are full members of WSC.</li>
            <li>
              Shall be the decision making body for the projectionists on any
              issues within their remit, led by the Chief Projectionist(s) who
              retains overall responsibility.
            </li>
            <li>
              Shall help the Chief Projectionist(s) ensure all shows are
              covered.
            </li>
            <li>
              The Chief Projectionist(s) shall be responsible for the creation
              and dissemination of the projection meeting agenda.
            </li>
            <li>
              Matters of importance as deemed by the Chief Projectionist(s) or
              Exec shall be voted on by the committee.
            </li>
            <li>
              A minimum of three full members may form a Qualification
              Committee, which itself has the power to qualify projectionists at
              Qualification Shows; where it is not possible to form a
              Qualification Committee with a minimum of three full members, the
              committee. may propose a qualification to the Exec to be ratified.
            </li>
            <li>
              Can vote to propose a de-qualification to the Exec. However, the
              Chief Projectionist(s) can decide that it is not appropriate to
              consult the committee in this case.
            </li>
            <li>
              Shall be key in the coordination and administration of the Digital
              Projection Training Scheme and shall decide upon the maximum
              number of trainees.
            </li>
            <li>
              Shall be key in the training of all digital projectionists, and
              will discuss the progress of trainees.
            </li>
            <li>Shall help uphold projection standards.</li>
            <li>
              Shall generally assist the Chief Projectionist(s) when requested.
            </li>
            <li>
              Can propose to the Exec to remove a trainee projectionist from the
              training scheme, given appropriate cause and warning.
            </li>
            <li>
              Shall work with each other to improve knowledge of projection.
            </li>
            <li>
              Should the Chief Projectionist not be 35mm qualified, the 35mm
              Projection Training Scheme shall be coordinated and administrated
              by the qualified 35mm projectionists collectively, who will report
              to the Chief Projectionist and the overall projection committee.
            </li>
            <li>
              The Chief Projectionist(s) may choose to revoke crew status from
              projectionists who work fewer than 5 shows (during terms 1 and 2
              only). This will be reviewed termly, and they shall report to the
              Projection and Executive committees any changes in crew status.
            </li>
            <li>
              Should a projectionist not work a show for over 5 weeks, they may
              be required to work at least one N-Proj show, at the discretion of
              the committee.
            </li>
            <li>
              Projectionists inactive for over a term may be removed after
              proper warning. Any such changes shall be reported to the
              Projection and Executive committees.
            </li>
          </ol>
        </li>
        <li>
          <h2>Publicity Committee</h2>
          <ol>
            <li>
              The Publicity Officer(s) may add any full member of WSC to the
              committee.
            </li>
            <li>
              The Publicity Officer(s) has the power to appoint any full member
              of the committee to any of the committee&apos;s specific roles.
            </li>
            <li>
              The Publicity Officer will award publicity committee members one
              complimentary ticket per 2 titles or 1 review.
            </li>
            <li>
              The Publicity Officer will award publicity committee members crew
              status for producing 15 graphics, 5 titles or 3 reviews per term.
              This will be reviewed termly.
            </li>
            <li>New roles can only be created with agreement from Exec.</li>
            <li>Shall assist the Publicity Officer(s) at all times.</li>
            <li>Shall work to produce all WSC publicity.</li>
            <li>Shall work on new publicity ideas.</li>
            <li>Shall encourage new people to become involved.</li>
            <li>Shall help train each other.</li>
            <li>Shall help compile the publicity budget.</li>
          </ol>
        </li>
        <li>
          <h2>Technical Committee</h2>
          <ol>
            <li>
              Any qualified projectionist who is a full member of WSC and wishes
              to join.
            </li>
            <li>Shall assist the Technical Officer(s) at all times.</li>
            <li>Shall carry out all technical work.</li>
            <li>Shall vote on large purchases or project ideas.</li>
            <li>
              Shall train each other in all areas of technical work needed.
            </li>
            <li>
              Shall help encourage others to become involved in the Technical
              Committee.
            </li>
            <li>Shall discuss the technical budget.</li>
            <li>Shall write all proposals for technical grants.</li>
          </ol>
        </li>
        <li>
          <h2>IT Committee</h2>
          <ol>
            <li>
              The IT Officer(s) may add any full member of WSC to the committee.
            </li>
            <li>
              The IT Officer(s) has the power to appoint any full member of the
              committee to any of the committee&apos;s specific roles.
            </li>
            <li>
              The IT Officer(s) may award committee members crew status or grant
              complimentary tickets for IT contributions at their discretion.
            </li>
            <li>New roles can only be created with agreement from Exec.</li>
            <li>Shall assist the IT Officer(s) at all times.</li>
            <li>Shall carry out all IT work.</li>
            <li>Shall vote on all large IT purchases or ideas.</li>
            <li>
              Shall help encourage others to become involved in the IT
              committee.
            </li>
            <li>Shall train each other in all areas of the IT systems.</li>
          </ol>
        </li>
        <li>
          <h2>Marketing Committee</h2>
          <ol>
            <li>
              The Marketing Officer(s) may add any full member of WSC to the
              committee.
            </li>
            <li>
              The Marketing Officer(s) has the power to appoint any full member
              of the committee to any of the committee&apos;s specific roles.
            </li>
            <li>
              The Marketing Officer(s) will award publicity committee members
              one complimentary ticket per post or slide design.
            </li>
            <li>
              The Marketing Officer(s) will award publicity committee members
              crew status for producing 5 posts or slides per term. This will be
              reviewed termly.
            </li>
            <li>New roles can only be created with agreement from Exec.</li>
            <li>Shall assist the Marketing Officer(s) at all times.</li>
            <li>Shall work to produce all WSC marketing.</li>
            <li>Shall work on new marketing ideas.</li>
            <li>Shall encourage new people to become involved.</li>
            <li>Shall help train each other.</li>
          </ol>
        </li>
      </ol>
    </main>
  );
}
