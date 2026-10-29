function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-(--line-color) py-8">
      <h2 className="font-(--font-instrument-serif) text-2xl tracking-[-0.02em] text-(--text-primary)">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-(--text-secondary)">
        {children}
      </div>
    </section>
  );
}

function CaseStudyNote({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <p className="rounded-md border border-(--card-border) bg-(--panel-elevated) px-4 py-3 text-[13px] leading-6 text-(--text-muted)">
      <strong className="text-(--text-primary)">{label}: </strong>
      {children}
    </p>
  );
}

export default function TakeUForwardCaseStudy() {
  return (
    <div className="pb-12">
      <div className="py-7">
        <p className="font-(--font-instrument-serif) text-2xl text-(--text-primary)">
          Evolving the learning experience at TakeUForward
        </p>
        <p className="mt-2 text-xs leading-5 text-(--text-muted)">
          Product design · AI-powered learning · Interaction design · Gamification · Visual identity
        </p>

        <dl className="mt-5 grid gap-3 border-y border-(--line-color) py-4 text-xs leading-5 sm:grid-cols-2">
          <div>
            <dt className="text-(--text-muted)">Project</dt>
            <dd className="text-(--text-secondary)">TakeUForward</dd>
          </div>
          <div>
            <dt className="text-(--text-muted)">Timeline</dt>
            <dd className="text-(--text-secondary)">
              January–April (remote), July–August (onsite) — year to be confirmed
            </dd>
          </div>
          <div>
            <dt className="text-(--text-muted)">Team</dt>
            <dd className="text-(--text-secondary)">Design team</dd>
          </div>
          <div>
            <dt className="text-(--text-muted)">My role</dt>
            <dd className="text-(--text-secondary)">
              End-to-end UI/UX design for the AI tutor, focus timer, and Tufy mascot;
              collaborative work on the rebrand and gamification.
            </dd>
          </div>
        </dl>
      </div>

      <CaseStudySection id="overview" title="Overview">
        <img src="tuf-collage" alt="" />
        <p>
          TakeUForward is a coding education platform that helps students prepare
          for technical interviews and strengthen their problem-solving skills.
        </p>
        <p>
          As the product evolved, we wanted to improve the user experience,
          respond to student feedback, and make the platform more welcoming to a
          growing global audience.
        </p>
        <p>
          With approximately 1.5 million users relying on the platform for their
          preparation, the challenge was to evolve an established product while
          keeping the experience familiar and useful for existing learners.
        </p>
        <p>
          I worked on four connected areas of the experience: an AI tutor that
          guides students through problems, a focus timer for individual
          questions, gamification to encourage continued practice, and Tufy, a
          mascot designed to give the AI assistant a recognizable identity. I
          also collaborated with the team on a broader visual rebrand.
        </p>
        <p>
          <strong className="text-(--text-primary)">The central design question:</strong>{" "}
          How might we make coding practice feel more approachable, supportive,
          and engaging without taking away the challenge of learning?
        </p>
      </CaseStudySection>

      <CaseStudySection id="opportunity" title="Understanding the opportunity">
        <p>
          My approach combined user interviews and feedback, product analytics,
          competitor analysis, heuristic evaluation, usability testing, personal
          design exploration, and discussions with the team and stakeholders.
        </p>
        <p>These activities informed our work across the product experience.</p>
        <p>Three opportunities guided the design direction:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-(--text-primary)">Make the product feel more welcoming.</strong>{" "}
            Revisit the visual identity and the repeated use of orange and
            glassmorphism.
          </li>
          <li>
            <strong className="text-(--text-primary)">Support students at the moment they need help.</strong>{" "}
            Make AI guidance contextual, useful, and focused on helping students
            reason through problems.
          </li>
          <li>
            <strong className="text-(--text-primary)">Encourage continued practice.</strong>{" "}
            Give students tools to manage their sessions, recognize their
            progress, and engage with the platform more consistently.
          </li>
        </ul>
        <CaseStudyNote label="Research to document">
          The findings from these research activities need to be documented more
          specifically. In particular, the case study should eventually connect
          actual user feedback or analytics to the design decisions they
          informed.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection id="visual-identity" title="01 — Refreshing the visual identity">
        <h3 className="font-medium text-(--text-primary)">
          Moving beyond orange and ubiquitous glassmorphism
        </h3>
        <p>
          The existing interface relied heavily on orange and glassmorphism. As
          part of the team&apos;s effort to evolve the product, we explored a
          visual direction that felt more welcoming and better aligned with a
          student-focused learning platform.
        </p>
        <p>
          We collaborated on moving the brand from orange to blue, with trust
          and approachability as important considerations.
        </p>
        <p>
          This was not simply a colour replacement. It was an opportunity to
          reconsider how the product communicated its identity through its
          visual language.
        </p>
        <p>
          <strong className="text-(--text-primary)">My contribution:</strong>{" "}
          Collaborative work on the rebrand.
        </p>
        <p>
          The before-and-after screens will be especially important here. They
          can show the actual differences in colour, surfaces, hierarchy, and
          visual consistency without relying on subjective claims alone.
        </p>
        <CaseStudyNote label="Visuals">
          <img src="old-ui" alt="" />
          <img src="new-ui" alt="" />
      
        </CaseStudyNote>
        <CaseStudyNote label="Evidence to confirm">
          Which elements of the glassmorphism treatment were removed or changed,
          and whether the rebrand was based on specific user feedback, internal
          design evaluation, stakeholder direction, or a combination.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection
        id="ai-tutor"
        title="02 — Designing an AI tutor that guides instead of solves"
      >
        <h3 className="font-medium text-(--text-primary)">
          Helping students move forward without giving away the answer
        </h3>
        <p>
          A coding tutor should do more than provide a solution. It should help
          learners understand a problem, identify mistakes, and develop their
          own approach.
        </p>
        <p>
          I designed the AI tutor around this principle: provide guidance that
          responds to the student&apos;s current situation, rather than treating
          every request as a question with a single answer.
        </p>

        <h3 className="pt-2 font-medium text-(--text-primary)">
          Guidance that adapts to the student&apos;s progress
        </h3>
        <p>
          The tutor appears as a <strong className="text-(--text-primary)">Guide Me</strong>{" "}
          action within the coding editor. Students can use it when they are
          stuck and need help deciding what to do next.
        </p>
        <p>The experience accounts for different problem-solving states:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-(--text-primary)">Not started:</strong> Help the learner understand how to begin.</li>
          <li><strong className="text-(--text-primary)">Started but incorrect:</strong> Encourage them to reconsider their approach.</li>
          <li><strong className="text-(--text-primary)">Incorrect submission:</strong> Help them investigate what may be going wrong.</li>
          <li><strong className="text-(--text-primary)">Partially solved:</strong> Guide them through the remaining steps.</li>
        </ul>
        <p>
          The design intent was to provide hints and directions suited to each
          state, rather than immediately revealing a complete solution unless
          the student explicitly requested one.
        </p>
        <p>
          This approach makes the tutor&apos;s role closer to a learning
          companion than a shortcut to the answer.
        </p>

        <h3 className="pt-2 font-medium text-(--text-primary)">
          Extending assistance across the platform
        </h3>
        <p>
          The tutor was also integrated into other contexts, with its purpose
          changing to match the student&apos;s immediate task.
        </p>
        <div className="overflow-x-auto rounded-md border border-(--card-border)">
          <table className="w-full min-w-[440px] text-left text-xs leading-5">
            <thead className="bg-(--panel-elevated) text-(--text-primary)">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">Context</th>
                <th scope="col" className="px-3 py-2 font-medium">Intended role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--line-color)">
              <tr><td className="px-3 py-2">Coding editor</td><td className="px-3 py-2">Guide students through a problem using contextual hints.</td></tr>
              <tr><td className="px-3 py-2">Problem statement</td><td className="px-3 py-2">Simplify the problem so it is easier to understand.</td></tr>
              <tr><td className="px-3 py-2">Submissions</td><td className="px-3 py-2">Explain the submission, code complexity, and efficiency.</td></tr>
              <tr><td className="px-3 py-2">Editorial video</td><td className="px-3 py-2">Explain a specific topic from the video.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Rather than requiring students to leave their current workflow to seek
          help elsewhere, the experience brings assistance closer to the point
          where it is needed.
        </p>
        <p>
          <strong className="text-(--text-primary)">My contribution:</strong>{" "}
          End-to-end UI/UX design for the AI chat tutor.
        </p>
        <CaseStudyNote label="Visuals">
          <img src="tufy-entrypoint" alt="" />
          <img src="tufy-entry-2" alt="" />
          <img src="tufy-chat-collage" alt="" />
          
        <CaseStudyNote label="Evidence to confirm">
          The exact interaction logic, how each state is detected, and whether
          testing showed that students understood or benefited from the
          different guidance styles.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection
        id="focus-timer"
        title="03 — Designing a focus timer for individual questions"
      >
        <h3 className="font-medium text-(--text-primary)">
          Keeping time management within the practice experience
        </h3>
        <p>
          I designed a focus timer that lets students manage their time
          directly within the coding workflow.
        </p>
        <p>The feature supports several interactions:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Start a timer for an individual question.</li>
          <li>Pause or restart the timer.</li>
          <li>Add more time when the countdown runs out.</li>
          <li>Use a stopwatch to measure elapsed time instead.</li>
        </ul>
        <p>
          These controls give students flexibility in how they approach a
          practice session. The option to add time after the countdown ends also
          lets them continue working on a problem without having to abandon the
          session simply because the timer expired.
        </p>
        <p>
          The experience was designed around the practical needs of solving
          coding questions, keeping time-management controls accessible within
          the same workflow.
        </p>
        <p>
          <strong className="text-(--text-primary)">My contribution:</strong>{" "}
          End-to-end UI/UX design for the focus timer.
        </p>
        <CaseStudyNote label="Visuals">
          <img src="timer-1" alt="" />
          <img src="timer-2" alt="" />
          
        </CaseStudyNote>
        <CaseStudyNote label="Evidence to confirm">
          Whether the timer was primarily designed for interview simulation,
          self-paced practice, or both, and whether any usage data or user
          feedback was collected after launch.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection
        id="gamification"
        title="04 — Encouraging consistent practice through gamification"
      >
        <h3 className="font-medium text-(--text-primary)">
          Making progress visible and rewarding
        </h3>
        <p>
          We worked collaboratively on gamification to make continued practice
          more engaging.
        </p>
        <p>The system combines four elements:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-(--text-primary)">Coins:</strong> Rewards earned through different activities.</li>
          <li><strong className="text-(--text-primary)">Streaks:</strong> A way to represent consistency over time.</li>
          <li><strong className="text-(--text-primary)">Leaderboards:</strong> A social dimension to practice and progress.</li>
          <li><strong className="text-(--text-primary)">Goodies and AI credits:</strong> Ways to redeem earned coins for rewards, including AI credits.</li>
        </ul>
        <p>
          The idea was to connect students&apos; activity on the platform with
          visible progress and rewards.
        </p>
        <p>
          Rather than making gamification a disconnected feature, we wanted it
          to form part of the wider practice experience: students complete
          activities, earn coins, and can use those coins toward rewards.
        </p>
        <p>
          <strong className="text-(--text-primary)">My contribution:</strong>{" "}
          Collaborative work on gamification. The specific screens and
          decisions I personally owned should be identified before attributing
          individual elements to me.
        </p>
        <CaseStudyNote label="Visuals">
          <img src="gami-1" alt="" />
          <img src="gami-2" alt="" />
          
        </CaseStudyNote>
        <CaseStudyNote label="Evidence to confirm">
          The earning rules, how students discover the rewards, and whether
          analytics or feedback indicate any change in engagement or practice
          frequency.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection
        id="tufy"
        title="05 — Creating Tufy, a recognizable identity for the AI tutor"
      >
        <h3 className="font-medium text-(--text-primary)">
          From an AI feature to a character with personality
        </h3>
        <p>
          I wanted to explore how the AI tutor could have a recognizable face
          and personality, rather than being represented only through a
          conventional assistant interface.
        </p>
        <p>
          This led to Tufy, a mascot intended to represent the tutor and
          contribute to TakeUForward&apos;s brand identity.
        </p>
        <p>
          I looked at how products such as Duolingo and AI experiences
          associated with GitHub use recognizable characters and visual
          identities. This inspired me to explore how a character could help
          distinguish our product and make the assistant feel more approachable.
        </p>

        <h3 className="pt-2 font-medium text-(--text-primary)">
          Exploring different directions
        </h3>
        <p>
          I sketched multiple concepts, exploring different forms and figurines.
        </p>
        <p>
          The concepts included a dog-like companion, a jellyfish-inspired
          tutor, and water- or flame-inspired characters. Each direction offered
          a different way to express the personality of a friendly learning
          companion.
        </p>
        <p>
          Rather than settling immediately on one concept, I explored different
          shapes and forms to find something distinctive.
        </p>

        <h3 className="pt-2 font-medium text-(--text-primary)">
          Designing a silhouette that stands on its own
        </h3>
        <p>One of my main considerations was recognizability.</p>
        <p>
          I wanted Tufy to remain identifiable without depending on an
          accessory, such as a hat, to communicate its identity. Accessories
          could be added or removed, but the character itself needed to be
          distinctive enough to stand on its own.
        </p>
        <p>
          I explored large, expressive eyes and an innocent smile to convey
          friendliness. The overall character needed to feel approachable and
          consistent with the idea of an AI tutor that helps rather than
          intimidates.
        </p>
        <p>The design principles were:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-(--text-primary)">Distinctive silhouette:</strong> Recognizable without additional visual elements.</li>
          <li><strong className="text-(--text-primary)">Friendly expression:</strong> Large eyes and a warm, approachable appearance.</li>
          <li><strong className="text-(--text-primary)">Clear personality:</strong> A character that feels like a companion and tutor.</li>
          <li><strong className="text-(--text-primary)">Flexibility:</strong> A design that can work in different parts of the product.</li>
        </ul>

        <h3 className="pt-2 font-medium text-(--text-primary)">
          Thinking beyond the illustration
        </h3>
        <p>
          I also explored how Tufy could appear in product contexts such as
          loading and empty states. These are opportunities to bring the
          character into moments where the interface would otherwise be purely
          functional.
        </p>
        <p>
          The broader ambition was for Tufy to become a recognizable part of the
          product identity, rather than a mascot that appears only in one place.
        </p>
        <p>
          <strong className="text-(--text-primary)">My contribution:</strong>{" "}
          End-to-end UI/UX design for the mascot work.
        </p>
        <CaseStudyNote label="Visuals">
          <img src="tufy-final" alt="" />
          <img src="tufy-different drafts" alt="" />
          
        </CaseStudyNote>
        <CaseStudyNote label="Evidence to confirm">
          Why the final concept was selected over the alternatives, whether the
          mascot was tested with users, and which applications shipped versus
          remained explorations.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection id="constraints" title="06 — Designing for an established product">
        <p>
          The scale of TakeUForward made this work particularly challenging.
          With approximately 1.5 million users and students using the platform
          regularly for preparation, we were evolving an existing experience
          rather than designing a product from scratch.
        </p>
        <p>
          New features needed to fit into familiar workflows. The tutor had to
          make sense in different contexts, the timer needed clear controls
          across different states, and the mascot and gamification system needed
          to feel connected to the wider product.
        </p>
        <p>
          The work required collaboration across the design team, attention to
          the existing interface, and continued refinement as the product
          evolved.
        </p>
        <CaseStudyNote label="A useful example to add">
          A concrete example of a constraint or trade-off: for example, a
          design that changed after usability testing, an interaction
          simplified after team feedback, or a feature adapted to fit an
          existing workflow. This would make the scale-related challenge more
          tangible.
        </CaseStudyNote>
      </CaseStudySection>

      <CaseStudySection id="outcomes" title="07 — Outcomes and ongoing iteration">
        <p>
          The major areas of work were shipped, and we collected another round
          of user feedback after launch. We continue to improve the product
          based on ongoing feedback.
        </p>
        <p>
          At present, I do not have verified quantitative results to report. I
          would therefore avoid claiming that the work increased retention,
          engagement, learning outcomes, or conversion without supporting
          evidence.
        </p>
        <p>
          Instead, the outcome we can establish is that the work moved from
          design into the live product and continued to be refined after release.
        </p>
        <p>Future evaluation could include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>AI tutor adoption, repeat usage, and perceived helpfulness.</li>
          <li>Focus timer adoption and use of different timer controls.</li>
          <li>Participation in streaks and coin-earning activities.</li>
          <li>Reward redemption and AI credit usage.</li>
          <li>Qualitative feedback on the updated visual identity and Tufy.</li>
        </ul>
        <p>
          These are proposed measures for evaluating impact, not results
          already established by this project.
        </p>
      </CaseStudySection>

      <CaseStudySection id="reflection" title="Reflection">
        <p>
          This project brought together several aspects of product design:
          evolving an existing visual identity, designing contextual AI
          interactions, supporting practice habits, and exploring a mascot that
          could contribute to a recognizable brand.
        </p>
        <p>
          One of the most important considerations was the existing product
          scale. Improvements had to fit into the routines of students who
          already used the platform regularly.
        </p>
        <p>
          The AI tutor also highlighted the importance of context in interaction
          design. The same assistant needs to behave differently depending on
          whether a student is understanding a problem, writing code, reviewing
          a submission, or watching an explanation.
        </p>
        <p>
          Tufy presented a different design challenge: creating a character
          whose identity comes from its core form rather than relying on
          accessories.
        </p>
        <p>
          Finally, shipping the features was not the end of the work. Gathering
          feedback and continuing to refine the experience remains part of
          building a better learning product.
        </p>
        <div className="rounded-lg border border-(--card-border) bg-(--panel-elevated) p-5">
          <h3 className="font-medium text-(--text-primary)">The takeaway</h3>
          <p className="mt-2">
            My work at TakeUForward focused on making coding practice more
            approachable and supportive through contextual AI guidance, focused
            practice tools, motivational systems, and a distinctive visual
            identity.
          </p>
          <p className="mt-3">
            The result was a broader product experience designed to support
            students not just while they solve a problem, but throughout their
            practice journey.
          </p>
        </div>
      </CaseStudySection>
    </div>
  );
}
