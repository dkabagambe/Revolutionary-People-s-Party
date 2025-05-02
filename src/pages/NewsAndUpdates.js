import React, { useState } from "react";
import "../styles/NewsAndUpdates.css";

const newsSections = {
  "NEC Meetings": [
    {
      agenda: "Review of party strategic plan and national agenda",
      progress:
        "Strategic goals for 2023–2025 reviewed; realignment underway for education and rural development.",
      feedback:
        "Need to simplify strategy language for community-level comprehension.",
      decisions:
        "Strategic plan updated with clearer timelines; public brief scheduled.",
    },
    {
      agenda: "Evaluation of leadership performance and accountability reports",
      progress:
        "Initial leadership audits completed; district-level gaps identified in participation and reporting.",
      feedback:
        "Some regional leaders lack timely reporting capacity-building required.",
      decisions:
        "Introduce bi-annual leadership scorecards; mentorship initiative approved.",
    },
    {
      agenda: "Formulation of policy positions and legislative priorities",
      progress:
        "Draft positions on healthcare and land reform submitted by policy team; public consultation pending.",
      feedback:
        "Ensure alignment between policy papers and grassroots concerns.",
      decisions: "Form special advisory group to refine policy proposals.",
    },
    {
      agenda: "Planning national campaigns, congresses, or electoral strategy",
      progress:
        "2025 general election framework finalized; provincial-level campaign teams mobilized.",
      feedback: "More media engagement and branding strategies needed.",
      decisions: "Launch national campaign training workshops in June.",
    },

    {
      agenda: "Financial oversight and budget approvals",
      progress:
        "Quarter 1 financial report approved; fundraising targets for Q2 set with new accountability protocols.",
      feedback: "Call for stricter monitoring of constituency funds usage.",
      decisions:
        "Initiate quarterly financial briefings open to party members.",
    },
  ],
  "General Assembly / National Congress": [
    {
      agenda: "Election or confirmation of national leadership",
      progress:
        "Leadership elections held in April; 85% turnout with regional representation improved.",
      feedback: "Need for more inclusive candidate vetting processes.",
      decisions: "Create vetting subcommittee and leadership code of conduct.",
    },
    {
      agenda: "Presentation and approval of party constitutional amendments",
      progress:
        "Amendments proposed by legal team presented; focus on term limits and transparency clauses.",
      feedback:
        "Delegates requested clearer language on disciplinary procedures.",
      decisions:
        "Approve proposed amendments with modifications; publish in party bulletin.",
    },
    {
      agenda: "Mobilization strategy and expansion of party membership",
      progress:
        "Membership increased by 20% since last congress; outreach in northern regions expanded.",
      feedback: "Youth and diaspora engagement needs strengthening.",
      decisions:
        "Launch digital membership platform; assign regional coordinators.",
    },
    {
      agenda:
        "National unity, reconciliation, and conflict resolution discussions",
      progress:
        "Initial consultations held; truth and unity forums piloted in three districts.",
      feedback:
        "Community elders stressed the need for traditional mediation roles.",
      decisions:
        "Roll out national dialogue program; partner with religious and cultural institutions.",
    },
  ],
  "District Committee Meetings": [
    {
      agenda: "Local implementation of national strategies",
      progress:
        "Programs on youth employment and agricultural support rolled out in 65% of districts.",
      feedback:
        "Implementation varies; some districts lack trained coordinators.",
      decisions:
        "Deploy additional field officers and hold monthly performance reviews.",
    },
    {
      agenda: "Identification of grassroots issues for upward reporting",
      progress:
        "Top issues reported include land disputes, school dropout rates, and health center shortages.",
      feedback: "Need better tools to aggregate and prioritize local feedback.",
      decisions:
        "Introduce a digital platform for real-time grassroots issue reporting.",
    },
    {
      agenda: "Community mobilization and civic education planning",
      progress:
        "10 community workshops held with 1,200+ participants; civic education manuals distributed.",
      feedback: "Demand for vernacular materials and mobile awareness units.",
      decisions:
        "Translate education content and expand outreach through local radio.",
    },
    {
      agenda: "Local candidate selection and election preparedness",
      progress:
        "Preliminary candidate lists compiled; 40% of slots filled with new, youth-driven entries.",
      feedback:
        "Clearer guidelines needed on vetting and nomination procedures.",
      decisions:
        "Finalize guidelines for candidate vetting; organize mock elections.",
    },
    {
      agenda: "Conflict mediation and internal coordination",
      progress:
        "Local reconciliation councils active in 12 districts; 35 cases resolved peacefully.",
      feedback:
        "Some regions require more robust conflict resolution training.",
      decisions:
        "Launch district mediation training and community peace forums.",
    },
  ],
  "Youth, Women, PWD Forums": [
    {
      agenda: "Special focus on inclusion policies and empowerment initiatives",
      progress:
        "Inclusion charter drafted and presented; 30% representation target set across party organs.",
      feedback:
        "Charter needs clearer enforcement mechanisms and regular monitoring.",
      decisions:
        "Establish an Inclusion Oversight Committee to monitor policy rollout.",
    },
    {
      agenda: "Leadership mentorship and training opportunities",
      progress:
        "Three national training workshops held; 500+ participants trained in public speaking, governance, and advocacy.",
      feedback:
        "Training access uneven; rural areas underrepresented in participation",
      decisions:
        "Decentralize mentorship programs and allocate funding for rural outreach.",
    },
    {
      agenda: "Organizing community outreach and engagement programs",
      progress:
        "15 outreach events conducted, reaching over 3,000 community members focus on rights awareness and voter education.;",
      feedback:
        "Strong community response, but follow-up support structures are lacking.",
      decisions:
        "Create post-event support groups and helplines for ongoing engagement",
    },
    {
      agenda: "Campaigning for representation in leadership structures",
      progress:
        "Representation quotas introduced in electoral guidelines; youth and women leaders nominated in over 60% of constituencies.",
      feedback:
        "Pushback from some local leaders on implementing quotas; need dialogue and sensitization.",
      decisions:
        "Launch sensitization tours and leadership dialogue sessions in contested areas.",
    },
  ],
  "Merit-Based Selection Principles Report": [
    {
      agenda: "Transparent Recruitment Processes",
      progress:
        "Public nomination forms launched online and distributed to districts; vetting guidelines disseminated",
      feedback:
        "Some constituencies report delays in receiving nomination materials.",
      decisions:
        "Develop a digital nomination portal and increase physical distribution teams.",
    },
    {
      agenda: "Educational and Professional Qualifications",
      progress:
        " Minimum academic standards and role-based criteria established for each leadership tier.",
      feedback:
        "Need mechanisms to verify professional documents more efficiently.",
      decisions:
        "Partner with academic institutions and HR experts for verification support.",
    },
    {
      agenda: "Community Engagement",
      progress:
        " Community feedback forums initiated in 40 districts to assess candidate credibility.",
      feedback:
        "Community input appreciated but requires structured documentation tools.",
      decisions:
        "Introduce community scorecards and standardize local assessment templates.",
    },
    {
      agenda: "Commitment to Party Ideals",
      progress:
        "Orientation sessions conducted for all new leaders on RPP mission and core values.",
      feedback:
        "Consistent reinforcement of party ideology still needed during candidate onboarding.",
      decisions:
        "Create a continuous learning platform on RPP values and policy priorities.",
    },
    {
      agenda: "Periodic Performance Reviews",
      progress:
        "Pilot performance review framework tested with 25 local leaders; results shared with NEC.",
      feedback:
        "Leaders request feedback training and more clarity on evaluation benchmarks.",
      decisions:
        "Scale up the review framework and introduce peer evaluation mechanisms.",
    },
  ],
  "Strategic Response Meetings Report": [
    {
      agenda: "Rapid response to national crises or political developments",
      progress:
        " Joint task force established during recent economic protests; public briefings held in five regions.",
      feedback:
        "Need faster coordination between headquarters and regional offices during emergencies.",
      decisions:
        "Set up regional emergency response units; develop crisis communication guide.",
    },
    {
      agenda: "Addressing internal disciplinary or governance issues",
      progress:
        " Four internal disciplinary cases concluded; revised code of conduct circulated.",
      feedback:
        "Calls for a more transparent disciplinary process and improved record-keeping.",
      decisions:
        "Appoint independent review panels and digitalize disciplinary case tracking.",
    },

    {
      agenda:
        "Repositioning on urgent matters affecting national stability or the party’s public image",
      progress:
        "Media team issued a unified party statement on recent constitutional controversies; message reached 2M+ via social media.",
      feedback:
        "Public engagement effective, but some felt the tone needed to be more empathetic.",
      decisions:
        "Train spokespersons on public messaging and empathetic communication.",
    },
  ],
};

const NewsAndUpdates = () => {
  const [activeTab, setActiveTab] = useState("NEC Meetings");

  return (
    <div className="news-updates">
      <h2>News and Updates</h2>

      <div className="tabs">
        {Object.keys(newsSections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={activeTab === key ? "active" : ""}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Agenda Item</th>
              <th>Progress Summary</th>
              <th>Feedback & Observations</th>
              <th>Key Decisions Taken</th>
            </tr>
          </thead>
          <tbody>
            {newsSections[activeTab].map((row, idx) => (
              <tr key={idx}>
                <td>{row.agenda}</td>
                <td>{row.progress}</td>
                <td>{row.feedback}</td>
                <td>{row.decisions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
