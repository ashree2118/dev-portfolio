import {
  BulletList,
  CaseStudyHero,
  CaseStudySection,
  Figure,
  PullQuote,
  Strong,
  SubHeading,
  Takeaway,
  TermGrid,
  Testimonial,
} from "./CaseStudyParts";
import { HintLadder } from "./CaseStudyDiagrams";

const meta = [
  {
    label: "Role",
    value: "End-to-end UI/UX for the AI tutor, focus timer and Tufy. Rebrand and gamification with the team.",
  },
  { label: "Timeline", value: "Jan–Apr 2026 remote, Jul–Aug 2026 onsite" },
  { label: "Team", value: "Design team" },
  { label: "Scale", value: "1.5 million+ learners" },
];

const tags = ["Product design", "AI-powered learning", "Interaction design"];

export default function TakeUForwardCaseStudy() {
  return (
    <div className="pb-12">
      <CaseStudyHero
        lead="Designing an AI tutor that helps students think, not just code"
        tags={tags}
        cover={{ src: "/case-studies/tuf-collage.webp", alt: "Collage of TakeUForward product screens", width: 2000, height: 1331 }}
        meta={meta}
      />

      <CaseStudySection id="challenge" title="The challenge">
        <p>
          Coding practice is full of moments when students get stuck. They might not
          understand what a problem is asking, struggle to find an approach, or submit
          code that doesn&apos;t work.
        </p>
        <p>
          An AI assistant can help, but there&apos;s a tension: if it immediately
          provides the answer, it may solve the immediate problem without helping the
          student learn how to solve the next one.
        </p>
        <p>
          At TakeUForward, we wanted to improve the learning experience while
          supporting students in their preparation. My focus was to design an AI tutor
          that could provide help at the right moment without taking over the
          problem-solving process.
        </p>
        <PullQuote label="The design question">
          How might we help students get unstuck while keeping them actively involved
          in solving the problem?
        </PullQuote>
      </CaseStudySection>

      <CaseStudySection id="approach" title="My approach">
        <p>
          I worked on the AI tutor&apos;s end-to-end UI/UX, drawing on user interviews
          and feedback, product analytics, competitor analysis, heuristic evaluation,
          usability testing, and team discussions.
        </p>
        <p>The design direction centered on three principles:</p>
        <BulletList
          items={[
            <><Strong>Meet students where they are.</Strong> A student who hasn&apos;t started needs different guidance from someone who has written code but received an incorrect result.</>,
            <><Strong>Guide before giving answers.</Strong> Hints and directions should help students reason through the problem, with the full solution available when explicitly requested.</>,
            <><Strong>Make help contextual.</Strong> Students need different kinds of assistance depending on whether they&apos;re understanding a problem, coding, reviewing a submission, or watching an explanation.</>,
          ]}
        />
        <p>These principles shaped the tutor&apos;s interaction design.</p>
      </CaseStudySection>

      <CaseStudySection id="student-state" title="Designing for the student's current state">
        <SubHeading>One tutor, different kinds of guidance</SubHeading>
        <p>
          A generic chat interface gives students a place to ask questions, but it
          doesn&apos;t necessarily account for where they are in the problem-solving
          process.
        </p>
        <p>I designed the tutor around four student states:</p>
        <TermGrid
          items={[
            { term: "Not started", detail: "Help the student understand the problem and find a way to begin." },
            { term: "Started, but off track", detail: "Encourage the student to reconsider their approach instead of immediately replacing it with a solution." },
            { term: "Incorrect submission", detail: "Help the student investigate what might be going wrong." },
            { term: "Partially solved", detail: "Guide the student through the remaining steps." },
          ]}
        />
        <p>
          The key design decision was to treat these as different learning situations,
          rather than responding to every student in the same way.
        </p>
        <p>
          A beginner may need help understanding the problem. Someone who has already
          written code may benefit more from a targeted hint. A student who has solved
          part of the problem needs help progressing from where they are, not starting
          over.
        </p>
        <p>
          <Strong>Why this matters:</Strong> The goal was not simply to make AI
          assistance available. It was to make that assistance appropriate to the
          student&apos;s current task.
        </p>
        <Figure
          columns={2}
          images={[
            { src: "/case-studies/guide-me-editor.webp", alt: "Guide Me button in the code editor", width: 936, height: 870 },
            { src: "/case-studies/tufy-intro.webp", alt: "Tufy introducing itself and personalization options", width: 1160, height: 714 },
          ]}
          caption="Where students ask for help: the Guide Me button in the editor, and Tufy's first-run screens."
        />
      </CaseStudySection>

      <CaseStudySection id="learning-interaction" title="Designing the tutor as a learning interaction">
        <SubHeading>Help should move the student forward</SubHeading>
        <p>
          I designed the tutor as a guide, not a shortcut. Help comes in steps: a hint
          first, then help reasoning through the next step, and the full solution only
          when the student asks for it.
        </p>
        <HintLadder />
        <p>
          The important distinction is between <Strong>giving information and
          supporting progress</Strong>. The interface needs to help students understand
          what to do next while leaving room for them to think and act.
        </p>
        <p>The conversation below shows this in practice.</p>
        <Figure
          images={[
            { src: "/case-studies/tufy-chat-collage.webp", alt: "AI tutor conversations moving from hints to pseudocode to full code", width: 1942, height: 1526 },
          ]}
          caption="A tutor conversation that steps from hints, to the algorithm and pseudocode, to the full code only when asked."
        />
      </CaseStudySection>

      <CaseStudySection id="contexts" title="One assistant across different learning contexts">
        <p>
          The tutor also appears in different parts of the product. Its purpose changes
          according to what the student is doing.
        </p>
        <div className="overflow-x-auto rounded-lg border border-(--card-border)">
          <table className="w-full min-w-[440px] text-left text-sm leading-6">
            <thead className="border-b border-(--card-border) bg-(--panel-elevated)">
              <tr>
                <th scope="col" className="w-40 px-4 py-2.5 text-xs font-medium text-(--text-muted)">Context</th>
                <th scope="col" className="px-4 py-2.5 text-xs font-medium text-(--text-muted)">Design purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--line-color)">
              {[
                ["Coding editor", "Guide the student through a problem using contextual hints."],
                ["Problem statement", "Simplify the problem to make it easier to understand."],
                ["Submissions", "Explain the submission, including complexity and efficiency."],
                ["Editorial video", "Explain a specific topic from the video."],
              ].map(([context, purpose]) => (
                <tr key={context}>
                  <th scope="row" className="px-4 py-3 align-top font-medium text-(--text-primary)">{context}</th>
                  <td className="px-4 py-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          This required thinking beyond the chat window itself. The same assistant
          needed to fit into different workflows and provide the kind of help relevant
          to each one.
        </p>
        <p>
          For example, a student reading a problem statement may need clarification
          before attempting it. A student reviewing a submission may want to understand
          its complexity or efficiency. Someone watching an editorial may need a
          particular concept explained without losing track of the lesson.
        </p>
        <p>
          The design goal was to bring assistance closer to the student&apos;s current
          task rather than treating every interaction as a generic conversation.
        </p>
      </CaseStudySection>

      <CaseStudySection id="tufy" title="Giving the tutor a personality through Tufy">
        <SubHeading>Making the assistant recognizable</SubHeading>
        <p>
          I also designed Tufy, a mascot that gives the AI tutor a recognizable face and
          adds to TakeUForward&apos;s identity.
        </p>
        <p>
          I explored several character directions, including a jellyfish-inspired tutor
          and water- or flame-inspired forms. The aim was to create something friendly
          and distinctive rather than another generic assistant symbol.
        </p>
        <p>
          One principle guided the exploration: Tufy should be recognizable from its
          core shape, not depend on an accessory to establish its identity.
        </p>
        <p>
          I explored large eyes and an innocent smile to communicate a friendly,
          approachable personality.
        </p>
        <p>
          I also explored how Tufy could appear in different product contexts, including
          loading and empty states.
        </p>
        <Figure
          columns={2}
          aspect="1 / 1"
          images={[
            { src: "/case-studies/tufy-different-drafts.webp", alt: "Tufy drafts: jellyfish and water-drop characters, with the selected design marked", width: 2000, height: 1861 },
            { src: "/case-studies/tufy-mascot.webp", alt: "The final Tufy mascot", width: 540, height: 568 },
          ]}
          caption="Character directions, from jellyfish to water-drop forms, and the final Tufy."
        />
      </CaseStudySection>

      <CaseStudySection id="practice" title="Supporting the wider practice experience">
        <p>
          Alongside the tutor, I designed a focus timer that lets students start, pause,
          resume, and restart timing for an individual question, add time when the
          countdown ends, or use a stopwatch instead.
        </p>
        <p>
          This keeps time management inside the problem-solving workflow, so students
          don&apos;t need a separate tool.
        </p>
        <Figure
          images={[
            { src: "/case-studies/timer-states.webp", alt: "Focus timer states inside the problem page", width: 1260, height: 807 },
            { src: "/case-studies/timer-controls.webp", alt: "Restart and resume controls next to a running timer", width: 1186, height: 600 },
          ]}
          caption="Focus timer and stopwatch inside the problem page, and the restart and resume controls."
        />
        <p>
          I also collaborated with the design team on gamification, including coins,
          streaks, leaderboards, and rewards. Coins can be used toward goodies and AI
          credits, connecting activity on the platform with visible progress and
          rewards.
        </p>
        <Figure
          columns={2}
          aspect="1 / 1"
          images={[
            { src: "/case-studies/rewards-leaderboard.webp", alt: "Coin total, ranks and the monthly leaderboard", width: 721, height: 841 },
            { src: "/case-studies/rewards-titles.webp", alt: "Title progression earned by collecting trophies", width: 925, height: 737 },
          ]}
          caption="Coins, ranks and the monthly leaderboard, and titles earned by collecting trophies."
        />
        <p>
          The wider product also underwent a visual rebrand. Working with the team, we
          moved from an interface that relied heavily on orange and glassmorphism to a
          blue direction chosen to feel more welcoming and trustworthy.
        </p>
        <Figure
          images={[
            { src: "/case-studies/rebrand-before.webp", alt: "Previous TakeUForward problem page in orange", width: 1440, height: 1024, label: "Before" },
            { src: "/case-studies/rebrand-after.webp", alt: "Updated TakeUForward problem page in blue", width: 1440, height: 900, label: "After" },
          ]}
          caption="A problem page before and after the rebrand."
        />
        <p>
          These areas supported the broader goal of improving the practice experience,
          with the AI tutor at the center of my work.
        </p>
      </CaseStudySection>

      <CaseStudySection id="established-product" title="Fitting into an established product">
        <p>
          With 1.5 million+ learners already preparing on the platform, the work had to
          fit into an existing product, not start from scratch. The tutor had to make
          sense in each context, the timer needed clear controls across its states, and
          the mascot and rewards had to feel part of the same product.
        </p>
      </CaseStudySection>

      <CaseStudySection id="outcomes" title="Outcomes and ongoing learning">
        <p>
          The major pieces of work shipped to the live product, and we collected another
          round of user feedback after launch. The team continues to improve the
          experience.
        </p>
        <Testimonial
          author="Striver"
          byline="Building TakeUForward"
          handle="@striver_79"
          href="https://x.com/striver_79/status/2091066628301869155"
        >
          <p>Last day of internship for @anushree210 (Design)</p>
          <p>
            She contributed to one of the most important things in Zenkai – TUFY! Along
            with it, landing pages as well.
          </p>
          <p>
            Good luck 🤞 You brought in a lot of energy, team&apos;s going to miss it. Hope
            to have you back next year 🙌
          </p>
        </Testimonial>
        <p>
          There are no verified numbers yet on retention, learning outcomes or
          engagement. To evaluate the design, I would look at:
        </p>
        <BulletList
          items={[
            "How students use and return to the tutor.",
            "Whether the tutor's guidance helps students progress without prematurely revealing answers.",
            "Which tutor contexts students find most useful.",
            "How students use the focus timer and its different controls.",
            "Whether feedback identifies problems with the mascot or updated visual identity.",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="differently" title="What I'd do differently">
        <p>
          With the benefit of hindsight, I would make the evaluation of the tutor&apos;s
          learning experience an explicit part of the design process.
        </p>
        <p>
          Adoption alone would not tell me whether the tutor was helping students learn.
          I would want to understand whether students could continue solving problems
          after receiving a hint, whether they understood the guidance, and when they
          felt the tutor was giving too much or too little help.
        </p>
        <p>
          I would also document the relationship between each student state, the
          guidance shown, and the intended learning outcome more explicitly. That would
          make the design rationale easier to evaluate and the interaction easier to
          refine.
        </p>
        <Takeaway>
          This work taught me to think about AI assistance as an interaction-design
          problem, not just a chat interface. The important question was not simply what
          the assistant could answer, but how it could help students make progress while
          remaining active participants in their own learning.
        </Takeaway>
      </CaseStudySection>
    </div>
  );
}
