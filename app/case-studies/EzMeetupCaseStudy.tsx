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

function VisualPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-(--card-border) bg-(--panel-elevated) px-4 py-3 text-xs leading-5 text-(--text-muted)">
      {children}
    </div>
  );
}

export default function EzMeetupCaseStudy() {
  return (
    <div className="pb-12">
      <div className="py-7">
        <p className="font-(--font-instrument-serif) text-2xl text-(--text-primary)">
          Making events more social, from discovery to showing up together
        </p>
        <p className="mt-2 text-xs leading-5 text-(--text-muted)">
          Product design · Mobile app · End-to-end UI/UX · Interaction design
        </p>

        <dl className="mt-5 grid gap-3 border-y border-(--line-color) py-4 text-xs leading-5 sm:grid-cols-2">
          <div>
            <dt className="text-(--text-muted)">Project type</dt>
            <dd className="text-(--text-secondary)">Freelance client project</dd>
          </div>
          <div>
            <dt className="text-(--text-muted)">My role</dt>
            <dd className="text-(--text-secondary)">End-to-end UI/UX designer</dd>
          </div>
          <div>
            <dt className="text-(--text-muted)">Target audience</dt>
            <dd className="text-(--text-secondary)">Gen Z and millennials</dd>
          </div>
        </dl>
      </div>

      <CaseStudySection id="overview" title="Overview">
        <p>
          Discovering an event is easy. Finding people to go with can be a
          different story.
        </p>
        <p>
          ezMeetup was designed to help people discover community events, host
          their own meetups, and connect with others attending the same event.
        </p>
        <p>
          The product brings event discovery, event hosting, group conversations,
          and a shared attendee map into one experience. Instead of simply
          showing users where an event takes place, the map helps them see other
          people attending and explore opportunities to connect or tag along.
        </p>
        <p>
          I designed the end-to-end mobile UI, covering onboarding, event
          discovery, hosting, attendee maps, group chats, profiles, and safety
          check-ins.
        </p>
        <p>
          <strong className="text-(--text-primary)">The design challenge:</strong>{" "}
          How might we make discovering events easier while helping people feel
          more connected to the people they could experience them with?
        </p>
      </CaseStudySection>

      <CaseStudySection id="core-experience" title="01. Defining the core experience">
        <p>The product centred on three connected activities.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-(--card-border) bg-(--panel-elevated) p-4">
            <h3 className="font-medium text-(--text-primary)">Discover events</h3>
            <p className="mt-2 text-xs leading-5">
              Browse meetups, explore event details, and find activities that
              match your interests.
            </p>
          </div>
          <div className="rounded-md border border-(--card-border) bg-(--panel-elevated) p-4">
            <h3 className="font-medium text-(--text-primary)">Host your own meetup</h3>
            <p className="mt-2 text-xs leading-5">
              Create an event, share its details, publish a schedule, and bring
              a community together.
            </p>
          </div>
          <div className="rounded-md border border-(--card-border) bg-(--panel-elevated) p-4">
            <h3 className="font-medium text-(--text-primary)">See who&apos;s going and connect</h3>
            <p className="mt-2 text-xs leading-5">
              Explore a map of people attending the same event, discover
              potential companions, and connect with others before showing up.
            </p>
          </div>
        </div>
        <p>
          The attendee map was an important differentiator: it connected event
          discovery with the social experience of actually attending.
        </p>
        <p>
          Rather than ending the journey at “Join event,” ezMeetup explored
          what happens next — who else is going, where they are, and whether you
          could meet or travel together.
        </p>
      </CaseStudySection>

      <CaseStudySection id="visual-identity" title="02. Creating a distinct visual identity">
        <h3 className="font-medium text-(--text-primary)">
          Choosing teal for a fresh, trustworthy feel
        </h3>
        <p>
          I conducted competitor analysis, including looking at event-discovery
          products such as District, to understand the visual language of the
          category.
        </p>
        <p>
          I wanted ezMeetup to feel modern, welcoming, and appropriate for a
          Gen Z and millennial audience. Teal felt like a good balance between
          calmness, trust, and freshness, while offering a visual direction
          distinct from the orange, yellow, and purple palettes I associated
          with other products.
        </p>
        <p>
          I designed the interface in both dark and light themes, keeping the
          brand identity consistent across the experience.
        </p>
        <p>
          <strong className="text-(--text-primary)">My design focus:</strong>{" "}
          A recognisable colour palette, consistent interface patterns, and a
          visual language that could support both social interactions and
          practical event information.
        </p>
        <VisualPlaceholder>
          Visuals to add: competitor comparison, colour exploration, and
          selected dark- and light-theme screens.
        </VisualPlaceholder>
      </CaseStudySection>

      <CaseStudySection id="discovery" title="03. Helping users discover and join events">
        <p>
          The discovery experience needed to give users the information they
          needed to decide whether an event was right for them.
        </p>
        <p>
          I designed event detail screens featuring the event description,
          host, venue, date, time, schedule, capacity, attendee information, and
          location.
        </p>
        <p>
          The goal was to make event information easy to scan while giving users
          a clear path to joining.
        </p>
        <p>But joining an event was only the beginning of the experience.</p>
      </CaseStudySection>

      <CaseStudySection
        id="attendee-map"
        title="04. Turning an attendee list into an opportunity to connect"
      >
        <h3 className="font-medium text-(--text-primary)">The shared attendee map</h3>
        <p>
          One of the most distinctive features of ezMeetup was the map showing
          people attending the same event.
        </p>
        <p>
          The idea was to help users discover not only where an event was
          happening, but also who else was going.
        </p>
        <p>
          This adds a social dimension to event discovery. Users could explore
          the locations of other attendees and identify opportunities to
          connect or tag along rather than approaching an event as an isolated
          individual.
        </p>
        <p>The map experience was designed around a few key questions:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Where is the event taking place?</li>
          <li>Who else is attending?</li>
          <li>Where are other attendees located relative to the venue?</li>
          <li>Could I connect with someone or join them on the way?</li>
        </ul>
        <p>
          The attendee map helped bridge the gap between deciding to attend and
          making the event a shared experience.
        </p>
        <VisualPlaceholder>
          Visuals to add: event details, shared attendee map, attendee markers,
          and any related chat or connection flow.
        </VisualPlaceholder>
        <VisualPlaceholder>
          Evidence to add: Explain how attendee locations were obtained,
          whether users shared live or approximate locations, and how users
          initiated contact. Confirm the location-sharing and privacy rules
          before describing them as implemented behaviour.
        </VisualPlaceholder>
      </CaseStudySection>

      <CaseStudySection id="hosting" title="05. Making it easy to host a meetup">
        <p>
          ezMeetup was designed for people who wanted to organise events, not
          just attend them.
        </p>
        <p>
          I designed a structured event creation flow where hosts could enter
          the event name, date, time, venue, capacity, schedule, and photos.
        </p>
        <p>
          The goal was to give hosts a clear way to organise event information
          and publish a meetup without needing a separate tool for each part of
          the process.
        </p>
        <VisualPlaceholder>
          Visuals to add: host creation form, optional photo upload, and event
          creation confirmation.
        </VisualPlaceholder>
      </CaseStudySection>

      <CaseStudySection id="conversations" title="06. Keeping conversations connected to events">
        <p>
          The group chat gave attendees a way to communicate around a shared
          meetup.
        </p>
        <p>
          I designed chat interfaces and host controls for managing event
          details and requests to join. Keeping conversations within the event
          experience helps connect the planning stage with participation.
        </p>
        <p>
          The broader design intention was to make ezMeetup useful before the
          event begins, not only when users arrive at the venue.
        </p>
        <VisualPlaceholder>
          Visuals to add: group chat, event details editing, join requests, and
          host interactions.
        </VisualPlaceholder>
      </CaseStudySection>

      <CaseStudySection id="supporting-experiences" title="07. Supporting users throughout the journey">
        <p>
          Beyond discovery, hosting, and the attendee map, I designed
          supporting experiences including onboarding, profiles, interests,
          friends, and meetup history.
        </p>
        <p>
          I also designed post-event safety check-ins, where attendees could
          update their status and let friends know whether they had reached
          home, were still on their way, or needed assistance.
        </p>
        <p>
          Safety was a supporting part of the overall experience, rather than
          the product&apos;s primary purpose.
        </p>
        <VisualPlaceholder>
          Visuals to add: onboarding, profile setup, friends, meetup history,
          and safety check-in screens.
        </VisualPlaceholder>
      </CaseStudySection>

      <CaseStudySection id="reflection" title="Reflection">
        <p>
          ezMeetup challenged me to design a connected mobile experience around
          more than finding an event.
        </p>
        <p>
          The central opportunity was to make the people attending an event
          part of the discovery experience itself. The shared attendee map
          explored how location and social connection could work together to
          help users feel more comfortable connecting with others and
          potentially attending or travelling together.
        </p>
        <p>
          The project also required balancing several distinct journeys:
          discovering events, hosting meetups, managing conversations, and
          supporting users after an event.
        </p>
        <p>
          Working end to end allowed me to consider how these journeys fit
          together within one product and how a consistent visual identity
          could support the experience across different screens.
        </p>
        <div className="rounded-lg border border-(--card-border) bg-(--panel-elevated) p-5">
          <h3 className="font-medium text-(--text-primary)">The takeaway</h3>
          <p className="mt-2">
            ezMeetup was designed to bring events and people closer together —
            helping users discover what they want to attend, organise their
            own meetups, and find opportunities to connect with others going to
            the same place.
          </p>
        </div>
      </CaseStudySection>
    </div>
  );
}
