import styles from './constitution.module.css';
import React from 'react';
import Link from 'next/link';

export default function Constitution() {
  return (
    <main className={`mx-auto max-w-7xl px-2 ${styles.constitution}`}>
      <h1 className="text-4xl font-bold">
        Warwick Students&apos; Union Film Society Constitution
      </h1>
      <p>Last Updated: March 2023</p>

      <h2>Supporting Documents</h2>
      <ul>
        <li>
          <a
            href="/resources/WSC%20Constitution%20(March%202023).pdf"
            target="_blank"
          >
            Constitution PDF
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
        <li>
          <Link href="/constitution/key-agreement">
            Key Allowances and Agreement
          </Link>
        </li>
      </ul>

      <ol className="mt-8">
        <li>
          <h2>Name</h2>
          <p>
            The name of the organisation will be the Warwick Students&apos;
            Union Film Society, hereinafter referred to as WSC or Warwick
            Student Cinema.
          </p>
        </li>
        <li>
          <h2>Mission Statement</h2>
          <ul>
            <li>
              <p>The objectives of WSC shall be to:</p>
              <ul>
                <li>
                  Encourage interest in film as an art and a form of
                  entertainment.
                </li>
                <li>
                  Provide education and information in the methods of running a
                  cinema, including publicity, marketing, front of house
                  (hereafter referred to as FoH), projection and IT.
                </li>
                <li>
                  Support the national and international Film Society movement.
                </li>
              </ul>
            </li>
            <li>
              WSC shall have no political affiliations, and the programming of a
              film shall not constitute an endorsement of the ideas or beliefs
              expressed within.
            </li>
            <li>
              WSC shall be an autonomous, self-sustaining, non-profit
              organisation run by volunteers.
            </li>
          </ul>
        </li>
        <li>
          <h2>Accompanying Documents</h2>
          <ul>
            <li>
              <p>
                The following documents shall be distributed with the
                Constitution, and shall be considered to have the equivalent
                authority of the Constitution:
              </p>
              <ol>
                <li>
                  <Link href="/constitution/executive-roles" target="_blank">
                    Executive Roles and Responsibilities
                  </Link>
                </li>
                <li>
                  <Link href="/constitution/committees" target="_blank">
                    Committees
                  </Link>
                </li>
                <li>
                  <Link href="/constitution/key-agreement" target="_blank">
                    Key Allowances and Agreement
                  </Link>
                </li>
              </ol>
            </li>
            <li>
              The Accompanying Documents may be amended by the Executive
              Committee at their discretion.
            </li>
          </ul>
        </li>
        <li>
          <h2>Membership</h2>
          <ul>
            <li>
              <p>The following will be entitled to be members of WSC:</p>
              <ol>
                <li>
                  Full members: Current Warwick University Students, who are
                  also members of the Students&apos; Union and the
                  Students&apos; Union Societies Federation.
                </li>
                <li>
                  Associate members: Those persons who have associate membership
                  of both the societies federation and WSC.
                </li>
                <li>
                  Exec members: Elected officials who are full members of WSC.
                </li>
              </ol>
            </li>
            <li>
              Membership prices will be set by the Exec before the summer
              vacation for the following academic year.
            </li>
            <li>
              <p>The rights of a full member of WSC shall include:</p>
              <ol>
                <li>Standing for a position on the Exec.</li>
                <li>
                  Voting in WSC elections and at all WSC General Meetings, where
                  they will be identified by their student ID number.
                </li>
                <li>
                  Voting at all WSC meetings where they are a member of the
                  appropriate committee.
                </li>
                <li>
                  Participating in available crew positions as defined in the
                  supporting documents.
                </li>
                <li>
                  Discounted or members&apos; free tickets to WSC screenings.
                </li>
              </ol>
            </li>
            <li>
              <p>The rights of a WSC associate member shall include:</p>
              <ol>
                <li>
                  To participate at a non-decision making level in the
                  activities of WSC.
                </li>
                <li>
                  Discounted or members&apos; free tickets to WSC screenings.
                </li>
                <li>
                  Involvement in discussions on WSC business at the discretion
                  of the meeting Chair or Returning Officer.
                </li>
                <li>
                  Associate members are not entitled to vote at general meetings
                  or elections, however may vote at committee meetings with the
                  consent of the Chair.
                </li>
              </ol>
            </li>
            <li>
              Crew status shall be added and removed by the committee chairs in
              accordance with the Committees document. They should report any
              changes to their committees, who may call a vote to overturn
              decisions if necessary.
            </li>
          </ul>
        </li>
        <li>
          <h2>Exec Members</h2>
          <ul>
            <li>
              The day-to-day business of WSC shall be managed by the Exec,
              elected at the Annual General Meeting, or any subsequent General
              Meeting called as an election.
            </li>
            <li>
              <p>
                The Exec positions within WSC shall at all times consist of at
                least:
              </p>
              <ol>
                <li>President</li>
                <li>Treasurer</li>
                <li>Vice-President</li>
              </ol>
            </li>
            <li>
              At the discretion of the Executive committee, other Executive
              roles will be defined, in any number and combination, in the
              document&nbsp;
              <Link href="/constitution/executive-roles" target="_blank">
                Executive Roles and Responsibilities
              </Link>
              .
            </li>
            <li>
              The Exec members as defined here and in the above document, must
              fulfil the appropriate criteria and will carry out their
              designated job descriptions as detailed in&nbsp;
              <Link href="/constitution/executive-roles" target="_blank">
                Executive Roles and Responsibilities
              </Link>
              .
            </li>
            <li>
              <p>
                The Exec may decide upon any matter which has not yet been
                decided upon by a General Meeting. The Exec shall further be
                responsible for:
              </p>
              <ol>
                <li>
                  Organising the activities of WSC in such a way as to include
                  the greatest possible number of WSC members.
                </li>
                <li>
                  Directing the expenditure of WSC&apos;s funds in a responsible
                  fashion and in line with the aims, objectives and planned
                  activities of WSC.
                </li>
                <li>
                  Formulating and submitting any additional bids for funds from
                  the&nbsp;
                  <Link href="/constitution/committees" target="_blank">
                    standing committees
                  </Link>
                  , with detailed justification of the figures contained within
                  the bid.
                </li>
                <li>
                  Upholding the constitution of WSC and ensuring that its aims
                  and objectives reflect WSC activities.
                </li>
                <li>Effective publicity distribution.</li>
              </ol>
            </li>
            <li>
              If any Exec position is not filled at the Annual General Meeting,
              or if an Exec member resigns during their Exec term, the Exec are
              responsible for filling the position either by election or
              co-option, ensuring all interested parties are given sufficient
              notice.
            </li>
            <li>
              An Exec role may be filled by either one or two people, and must
              in either case be their sole Exec position. If two people hold a
              role, they will each have full Exec rights and responsibilities
              including a full vote, as defined in&nbsp;
              <Link href="/constitution/executive-roles" target="_blank">
                Executive Roles and Responsibilities
              </Link>
            </li>
            <li>
              Any member may have their privileges removed by the Exec. Members
              may appeal such decisions as outlined in section 11.
            </li>
          </ul>
        </li>
        <li>
          <h2>Committees</h2>
          <ul>
            <li>
              The committees of WSC shall be defined in the document&nbsp;
              <Link href="/constitution/committees" target="_blank">
                Committees
              </Link>
              , wherein the roles and remits of the various committees shall be
              enumerated.
            </li>
            <li>
              Committees may only be formed by agreement of the Exec and
              subsequent amendment of &nbsp;
              <Link href="/constitution/committees" target="_blank">
                Committees
              </Link>
              .
            </li>
            <li>
              Each committee shall fulfil their approved job descriptions in
              &nbsp;
              <Link href="/constitution/committees" target="_blank">
                Committees
              </Link>
              .
            </li>
            <li>
              Committees are able to make day to day decisions on the
              appropriate areas of WSC, but all decisions may be overturned by
              the Exec.
            </li>
            <li>
              All committee votes must pass with a majority - in the event of a
              tie, the committee head has the deciding vote. If there are two
              people serving in the committee head role, a tied vote means a
              vote fails to pass, unless both people vote the same way, in which
              case their deciding vote dictates the result.
            </li>
            <li>
              The Exec may set up any temporary committees at their discretion.
            </li>
          </ul>
        </li>
        <li>
          <h2>Committee Meetings</h2>
          <ul>
            <li>
              The President(s) will chair Exec meetings. If the/a President will
              be absent, they must notify the Exec and appoint a temporary
              Chair. Either the President(s) or the temporary Chair will have
              the casting vote. Only the President(s) can call an Exec meeting.
            </li>
            <li>
              All other committees will be chaired by the Exec officer(s)
              responsible or, in their absence, a temporary chair appointed by
              the Exec officer(s) responsible. Committee meetings may be called
              at any time; the committee Chair is responsible for ensuring all
              interested parties are given appropriate notification of meetings,
              the length of which shall be defined in&nbsp;
              <Link href="/constitution/committees" target="_blank">
                Committees
              </Link>
              , but shall not be less than 48 hours.
            </li>
            <li>
              The quorum for an Exec meeting shall be two thirds (rounded up) of
              its membership. Quorum for any other committee meeting shall be
              one third (rounded up) of its membership.
            </li>
            <li>
              Abstentions count towards quorum but cannot win the vote. If
              abstentions are the majority, the second-highest voted outcome
              wins.
            </li>
            <li>
              Committee meetings are open to all members of WSC who wish to
              attend.
            </li>
            <li>
              Exec meetings may go into closed session at the discretion of the
              Chair. All other WSC meetings should be entirely open.
            </li>
            <li>The Chair of each meeting has the casting vote.</li>
            <li>
              Minutes will be distributed to all committee members within one
              week. Once they are approved by the committee as accurate, they
              will be made publicly available on the website, bar Exec closed
              session.
            </li>
          </ul>
        </li>
        <li>
          <h2>General Meetings</h2>
          <ul>
            <li>
              The Exec shall call an Annual General Meeting (AGM) for the
              purpose of electing the new Exec and outlining plans for the
              future. The Exec shall give at least fourteen days&apos; notice of
              this meeting, and such notice shall include details of the
              elections to be held.
            </li>
            <li>
              At the AGM, the President(s) will give a report outlining the
              activities of WSC over the past year, and the Treasurer will give
              a report on the financial state of WSC.
            </li>
            <li>
              The quorum for both the AGM and other General Meetings shall be 20
              full members, or 1% of the total number of full members, whichever
              is greater, rounded up.
            </li>
            <li>
              The President(s) will chair the General Meetings and has the
              casting vote. Agenda items must be submitted to the President(s)
              no less than 24 hours before the meeting and an agenda must be
              circulated 24 hours before the meeting.
            </li>
          </ul>
        </li>
        <li>
          <h2>Voting Procedure</h2>
          <ul>
            <li>
              Voting at any WSC meeting shall be done by a show of hands, unless
              a secret ballot is requested.
            </li>
            <li>
              The motion shall be carried by a simple majority except where
              provisions in the constitution or accompanying documents specify
              otherwise. If abstentions are the majority, the vote is void.
            </li>
            <li>
              The Chair of the meeting shall preside over the counting of the
              votes, with the exception of elections, where the Returning
              Officer shall preside.
            </li>
          </ul>
        </li>
        <li>
          <h2>Elections Procedure</h2>
          <ul>
            <li>Only full members of WSC may vote or stand in elections.</li>
            <li>
              Any Exec election will be conducted as a secret ballot by single
              transferable vote, and all results shall be announced at the end.
              It is possible for the same candidate to run for more than one
              Exec position, although they may only hold one Exec position at a
              time. Anyone standing for more than one position must give a clear
              preference in their candidacy to the Returning Officer. This will
              allow the runner up to be announced as the successful candidate
              where appropriate.
            </li>
            <li>
              Two people may run for an Exec position on a joint ticket, and
              their election would result in both candidates being elected to
              the Exec position. It is possible to stand for more than one
              position and in a combination of single candidacies and joint
              tickets - if so, an order of preference must be sent to the
              Returning Officer, and all joint tickets must be ranked above
              single candidacies. A person cannot stand for the same role with
              both a single candidacy and a joint ticket.
            </li>
            <li>
              An appropriate Exec member (as specified in&nbsp;
              <Link href="/constitution/executive-roles" target="_blank">
                Executive Roles and Responsibilities
              </Link>
              &nbsp;shall act as Returning Officer in all elections unless they
              are standing, in which case the Exec will nominate a temporary
              Returning Officer. Any temporary Returning Officer must be a full
              member of WSC.
            </li>
            <li>
              Notice of elections shall be given by the Exec at least one week
              before the proposed election. Notification of the elections should
              be e-mailed to all WSC members and posted on the WSC website.
            </li>
            <li>
              Nominations should be emailed to the Returning Officer by the
              close of nominations. Full details, including closing date for
              nominations, shall be included in the notification of elections.
            </li>
            <li>
              Candidates will be given the option of a five minute hustings
              speech at the General Meeting and will be required to answer
              questions from the floor.
            </li>
            <li>
              The outgoing Exec member(s) is/are obliged to be available for
              consultation with the officer(s)-elect until the handover of the
              position is completed. The handover date shall be decided prior to
              the elections.
            </li>
            <li>
              In the event that no nominations are received for an Exec post,
              then the current holder(s) shall remain in office until the
              handover and the incoming Exec shall decide on the appropriate
              course of action.
            </li>
          </ul>
        </li>
        <li>
          <h2>Appeals Process</h2>
          <ul>
            <li>
              If any member concerned wishes a decision to be reconsidered, they
              may appeal against rulings by asking the Exec for a
              reconsideration of the decision, which shall be done by simple
              majority.
            </li>
            <li>
              If the member does not agree with the Exec decision, they may
              appeal to the Societies Officer at the Students&apos; Union who
              will launch an investigation in line with the Union Equal
              Opportunities Policy.
            </li>
          </ul>
        </li>
        <li>
          <h2>Keys</h2>
          <ul>
            <li>
              The issuing of keys shall be co-ordinated by the President(s) in
              accordance with the document&nbsp;
              <Link href="/constitution/key-agreement" target="_blank">
                Key Allowances and Agreement
              </Link>
              .
            </li>
            <li>
              All members issued with keys must sign the WSC key agreement set
              out in the document&nbsp;
              <Link href="/constitution/key-agreement" target="_blank">
                Key Allowances and Agreement
              </Link>
              .
            </li>
            <li>Keys will be administered by the WSC President(s).</li>
          </ul>
        </li>
        <li>
          <h2>The Students&apos; Union</h2>
          <ul>
            <li>
              WSC, its officers, its funds and all its activities shall be
              subject to the provisions of the Constitution, Regulations and
              policy of the University of Warwick Students&apos; Union.
            </li>
            <li>
              WSC shall abide by the Union&apos;s current Equal Opportunities
              Policy and Environmental Policy statement, which is included in
              the Students&apos; Union constitution.
            </li>
            <li>
              WSC shall not be wound up except by a resolution of a majority of
              those present at a Special General Meeting called for that
              purpose, or by the Students Union. In the event of WSC winding up,
              it is the wish of WSC that the remaining WSC funds and assets
              shall be devoted, in consultation with the British Film Institute,
              to aiding those with similar objectives to WSC.
            </li>
          </ul>
        </li>
      </ol>
    </main>
  );
}
