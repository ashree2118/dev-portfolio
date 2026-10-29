import {
  BulletList,
  CaseStudyHero,
  CaseStudySection,
  Figure,
  NumberedList,
  PullQuote,
  Strong,
  SubHeading,
  Takeaway,
  TermGrid,
} from "./CaseStudyParts";

const meta = [
  {
    label: "Role",
    value: "UI/UX for the AI tutor, focus timer and Tufy. Rebrand and gamification with the team.",
  },
  { label: "Timeline", value: "Jan–Apr 2026 remote, Jul–Aug 2026 onsite" },
  { label: "Team", value: "Design team" },
  { label: "Scale", value: "About 1.5 million learners" },
];

const tags = ["Product design", "AI-powered learning", "Interaction design", "Gamification", "Visual identity"];

export default function TakeUForwardCaseStudy() {
  return (
    <div className="pb-12">
      <CaseStudyHero
        lead="Evolving the learning experience at TakeUForward"
        tags={tags}
        cover={{ src: "/case-studies/tuf-collage.webp", alt: "Collage of TakeUForward product screens", width: 2000, height: 1331 }}
        meta={meta}
      />

      <CaseStudySection id="overview" title="Overview">
        <p>
          TakeUForward helps students prepare for technical interviews and sharpen
          their problem-solving. About 1.5 million learners use it for their
          preparation.
        </p>
        <p>
          The product was growing, student feedback was coming in, and the audience
          was becoming more global. We wanted the platform to feel more welcoming,
          without breaking the routines existing learners rely on.
        </p>
        <p>
          I worked on four connected pieces: an <Strong>AI tutor</Strong> that guides
          students through problems, a <Strong>focus timer</Strong> for single
          questions, <Strong>gamification</Strong> that rewards steady practice,
          and <Strong>Tufy</Strong>, a mascot that gives the tutor a face. I also
          worked with the team on a wider visual rebrand.
        </p>
        <PullQuote label="The central question">
          How might we make coding practice feel more approachable and supportive,
          without taking away the challenge of learning?
        </PullQuote>
      </CaseStudySection>

      <CaseStudySection id="opportunity" title="Finding the opportunity">
        <p>
          We drew on user interviews and feedback, product analytics, competitor
          analysis, heuristic reviews, usability testing, and conversations with the
          team and stakeholders. Three opportunities came out of it.
        </p>
        <NumberedList
          items={[
            {
              title: "Feel more welcoming",
              detail: "Rethink a visual identity that leaned heavily on orange and glassmorphism.",
            },
            {
              title: "Help at the right moment",
              detail: "Make AI guidance contextual, and focused on helping students reason rather than just reach an answer.",
            },
            {
              title: "Keep students practicing",
              detail: "Give students tools to manage their sessions, see their progress and come back consistently.",
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="visual-identity" title="Refreshing the visual identity" role="with the design team">
        <p>
          The old interface used orange and glassmorphism almost everywhere. Together
          with the team, we moved the brand from orange to blue, with trust and
          approachability as the guiding qualities.
        </p>
        <p>
          It was more than a color swap. We used it to rethink how the product
          expresses itself through color, surfaces and hierarchy.
        </p>
        <Figure
          images={[
            { src: "/old-ui.svg", alt: "Previous TakeUForward problem page in orange", width: 1440, height: 1024, label: "Before" },
            { src: "/new-ui.svg", alt: "Updated TakeUForward problem page in blue", width: 1440, height: 900, label: "After" },
          ]}
          caption="A problem page before and after the rebrand."
        />
      </CaseStudySection>

      <CaseStudySection id="ai-tutor" title="An AI tutor that guides instead of solves" role="end-to-end UI/UX">
        <p>
          A good coding tutor does not just hand over a solution. It helps learners
          understand the problem, spot their mistakes and find their own approach. I
          designed the tutor around that idea: respond to where the student is,
          rather than treating every request as a question with one answer.
        </p>

        <SubHeading>Guidance that follows the student&apos;s progress</SubHeading>
        <p>
          The tutor lives in the code editor as a <Strong>Guide Me</Strong> button.
          When a student gets stuck, it adapts its help to where they are.
        </p>
        <TermGrid
          items={[
            { term: "Not started", detail: "Help them find a way in." },
            { term: "Started, but off track", detail: "Nudge them to rethink the approach." },
            { term: "Wrong submission", detail: "Help them find what is going wrong." },
            { term: "Partly solved", detail: "Guide them through the remaining steps." },
          ]}
        />
        <p>
          Hints come first. The full solution only appears when a student asks for
          it, so the tutor feels like a learning companion, not a shortcut.
        </p>
        <Figure
          columns={2}
          images={[
            { src: "/case-studies/tufy-entrypoint.webp", alt: "Guide Me button in the code editor", width: 953, height: 870 },
            { src: "/case-studies/tufy-entry-2.webp", alt: "Tufy introducing itself and personalization options", width: 1160, height: 714 },
          ]}
          caption="The Guide Me button in the editor, and Tufy's first-run screens where students personalize the tutor."
        />

        <SubHeading>Help wherever students are</SubHeading>
        <p>
          The tutor also appears in other parts of the platform, and its job changes
          with the task in front of the student.
        </p>
        <div className="overflow-x-auto rounded-lg border border-(--card-border)">
          <table className="w-full min-w-[440px] text-left text-sm leading-6">
            <thead className="border-b border-(--card-border) bg-(--panel-elevated)">
              <tr>
                <th scope="col" className="w-40 px-4 py-2.5 text-xs font-medium text-(--text-muted)">Where</th>
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-(--text-muted)">What the tutor does</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--line-color)">
              {[
                ["Code editor", "Guides students through the problem with hints that fit their progress."],
                ["Problem statement", "Simplifies the problem so it is easier to understand."],
                ["Submissions", "Explains the submission, its complexity and its efficiency."],
                ["Editorial video", "Explains a specific topic from the video."],
              ].map(([where, what]) => (
                <tr key={where}>
                  <th scope="row" className="px-4 py-3 align-top font-medium text-(--text-primary)">{where}</th>
                  <td className="px-4 py-3">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Students get help where they already are, instead of leaving their flow to
          look for it elsewhere.
        </p>
        <Figure
          images={[
            { src: "/case-studies/tufy-chat-collage.webp", alt: "AI tutor conversations moving from hints to pseudocode to full code", width: 1942, height: 1526 },
          ]}
          caption="A tutor conversation that steps from hints, to the algorithm and pseudocode, to the full code only when asked."
        />
      </CaseStudySection>

      <CaseStudySection id="focus-timer" title="A focus timer for each question" role="end-to-end UI/UX">
        <p>
          I designed a focus timer that lets students manage their time without
          leaving the problem. Students can:
        </p>
        <BulletList
          items={[
            "Start a timer for a single question.",
            "Pause, resume or restart it.",
            "Add more time when the countdown ends.",
            "Switch to a stopwatch to track elapsed time instead.",
          ]}
        />
        <p>
          Adding time matters most. When the clock runs out, students can keep
          working on the problem instead of abandoning the session.
        </p>
        <Figure
          images={[
            { src: "/case-studies/timer-1.webp", alt: "Focus timer states inside the problem page", width: 1260, height: 807 },
            { src: "/case-studies/timer-2.webp", alt: "Restart and resume controls next to a running timer", width: 1192, height: 641 },
          ]}
          caption="Timer states inside the problem page, and the restart and resume controls."
        />
      </CaseStudySection>

      <CaseStudySection id="gamification" title="Rewarding steady practice" role="with the design team">
        <p>
          Gamification links what students do on the platform to progress they can
          see. Four pieces work together.
        </p>
        <TermGrid
          items={[
            { term: "Coins", detail: "Earned through daily activities, learning and practice." },
            { term: "Streaks", detail: "Show consistency over time." },
            { term: "Leaderboards", detail: "Add a social side to progress." },
            { term: "Rewards", detail: "Coins can be spent on goodies and AI credits." },
          ]}
        />
        <p>
          The loop is simple: practice, earn coins, spend them on rewards. It is part
          of the practice experience, not a separate feature on the side.
        </p>
        <Figure
          columns={2}
          aspect="1 / 1"
          images={[
            { src: "/gami-1.png", alt: "Coin total, ranks and the monthly leaderboard", width: 721, height: 841 },
            { src: "/gami-2.png", alt: "Title progression earned by collecting trophies", width: 925, height: 737 },
          ]}
          caption="Coins, ranks and the monthly leaderboard, and titles earned by collecting trophies."
        />
      </CaseStudySection>

      <CaseStudySection id="tufy" title="Tufy, a face for the AI tutor" role="end-to-end design">
        <p>
          I wanted the tutor to have a recognizable face and personality, not just
          another chat window. That became Tufy, a mascot for the tutor and for
          TakeUForward&apos;s brand.
        </p>
        <p>
          Duolingo and GitHub&apos;s AI products showed me how a character can make a
          product memorable and an assistant feel approachable.
        </p>

        <SubHeading>Exploring directions</SubHeading>
        <p>
          I sketched many concepts before settling on one: a dog-like companion, a
          jellyfish-inspired tutor, and characters based on water and flame. Each was
          a different take on a friendly learning companion.
        </p>

        <SubHeading>A silhouette that stands on its own</SubHeading>
        <p>
          Recognizability was the main test. Tufy had to be identifiable without an
          accessory like a hat. Accessories can come and go, so the character itself
          had to be distinctive. Large, expressive eyes and an innocent smile keep it
          friendly, so it feels like it helps rather than intimidates.
        </p>
        <TermGrid
          items={[
            { term: "Distinctive silhouette", detail: "Recognizable without extra elements." },
            { term: "Friendly expression", detail: "Big eyes and a warm look." },
            { term: "Clear personality", detail: "Feels like both a companion and a tutor." },
            { term: "Flexible", detail: "Works across different parts of the product." },
          ]}
        />
        <Figure
          columns={2}
          aspect="1 / 1"
          images={[
            { src: "/case-studies/tufy-different-drafts.webp", alt: "Tufy drafts: jellyfish and water-drop characters, with the selected design marked", width: 2000, height: 1861 },
            { src: "/case-studies/tufy-final.webp", alt: "The final Tufy mascot", width: 540, height: 568 },
          ]}
          caption="Mascot drafts, from jellyfish to water-drop characters, and the final Tufy."
        />

        <SubHeading>Beyond the illustration</SubHeading>
        <p>
          I also explored Tufy in loading and empty states, moments that are usually
          purely functional. The goal was for Tufy to be part of the product&apos;s
          identity, not a mascot that shows up in one place.
        </p>
      </CaseStudySection>

      <CaseStudySection id="constraints" title="Designing for an established product">
        <p>
          With a large base of active learners, we were evolving a product people
          already used every day, not starting from scratch. Every new feature had to
          fit familiar workflows. The tutor had to make sense in each context, the
          timer needed clear controls in every state, and the mascot and rewards had
          to feel like part of the same product.
        </p>
        <p>
          That meant close collaboration across the design team, respect for the
          existing interface, and steady refinement as the product changed.
        </p>
      </CaseStudySection>

      <CaseStudySection id="outcomes" title="Outcomes">
        <p>
          The main pieces of this work shipped to the live product. After launch we
          gathered another round of user feedback, and the product keeps improving
          based on it.
        </p>
        <SubHeading>What I&apos;d measure next</SubHeading>
        <BulletList
          items={[
            "How many students use the tutor, come back to it, and find it helpful.",
            "Timer adoption, and which controls students actually use.",
            "Streak participation and coin-earning activity.",
            "Reward redemption and AI credit use.",
            "Feedback on the new visual identity and on Tufy.",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" title="Reflection">
        <p>
          This project brought together very different kinds of design work:
          evolving a visual identity, designing contextual AI interactions,
          supporting practice habits and creating a character.
        </p>
        <BulletList
          items={[
            <><Strong>Scale shapes every decision.</Strong> Changes had to fit the routines of students who already relied on the product.</>,
            <><Strong>Context is the interaction.</Strong> The same assistant has to behave differently when a student is reading a problem, writing code, reviewing a submission or watching a video.</>,
            <><Strong>Identity comes from form.</Strong> Tufy had to be recognizable from its shape alone, not its accessories.</>,
            <><Strong>Shipping is not the end.</Strong> Gathering feedback and refining is part of the work.</>,
          ]}
        />
        <Takeaway>
          My work at TakeUForward was about making coding practice more approachable
          and supportive, through contextual AI guidance, focused practice tools,
          motivating rewards and a distinctive identity. Together they support
          students not just while they solve one problem, but across their whole
          practice journey.
        </Takeaway>
      </CaseStudySection>
    </div>
  );
}
