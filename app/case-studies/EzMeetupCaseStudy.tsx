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
} from "./CaseStudyParts";
import { JourneyPastJoin } from "./CaseStudyDiagrams";

const meta = [
  { label: "Role", value: "End-to-end UI/UX designer" },
  { label: "Project type", value: "Freelance client project" },
  { label: "Audience", value: "Gen Z and millennials" },
];

const tags = ["Mobile product design", "End-to-end UI/UX"];

export default function EzMeetupCaseStudy() {
  return (
    <div className="pb-12">
      <CaseStudyHero
        lead="Designing for the people behind the event"
        tags={tags}
        cover={{ src: "/case-studies/meetup-collage.webp", alt: "Collage of ezMeetup app screens", width: 2000, height: 1508 }}
        meta={meta}
      />

      <CaseStudySection id="brief" title="The brief">
        <p>
          The client wanted a mobile app where people could discover community events,
          host their own meetups, and connect with others attending the same event.
        </p>
        <p>
          I saw an opportunity to link the event itself with the people going to it.
          Discovering something interesting to attend is one part of the experience;
          knowing who else is going, and having a chance to meet them, makes it more
          social.
        </p>
        <p>
          That idea shaped the product around three connected activities: discovering
          events, hosting meetups, and finding people attending the same event.
        </p>
        <PullQuote label="The design question">
          How might we help people discover events and connect with fellow attendees
          before they arrive?
        </PullQuote>
      </CaseStudySection>

      <CaseStudySection id="people" title="Designing the experience around people, not just events">
        <p>
          I approached ezMeetup as one mobile experience rather than a collection of
          event listings.
        </p>
        <p>The core journeys were:</p>
        <NumberedList
          items={[
            { title: "Discover", detail: "Browse events, explore their details, and decide which ones to attend." },
            { title: "Host", detail: "Create a meetup, share its information and schedule, and bring people together." },
            { title: "Connect", detail: "See other attendees on a shared map and explore opportunities to meet or travel together." },
          ]}
        />
        <p>
          The attendee map was the most distinctive part of the concept because it
          linked the first and third journeys. It extended the experience beyond
          choosing an event and toward discovering the people who might share it.
        </p>
        <JourneyPastJoin />
      </CaseStudySection>

      <CaseStudySection id="attendee-map" title="The attendee map: connecting event discovery to real-world plans">
        <SubHeading>The problem I wanted to address</SubHeading>
        <p>
          An event page can tell someone where an event is happening and when it
          starts. It doesn&apos;t help them understand who else is going or how they
          might meet them.
        </p>
        <p>I designed the shared attendee map to make that social side visible.</p>
        <p>
          It shows the event location alongside attendee markers and distances. Instead
          of seeing only a venue, users can explore where other people attending the
          same event are located relative to it.
        </p>
        <p>This supports a different set of questions:</p>
        <BulletList
          items={[
            "Who else is attending this event?",
            "Where are other attendees in relation to the venue?",
            "Is there someone I could meet or tag along with?",
          ]}
        />
        <p>
          The goal was to help people move from discovering an event to planning how
          they might experience it with others.
        </p>

        <SubHeading>Why a map?</SubHeading>
        <p>
          The map makes location part of the discovery experience itself. It provides
          spatial context that an attendee list alone would not communicate.
        </p>
        <p>
          The design brings the event venue, attendee markers, and distances into one
          view. This allows users to understand the relationship between the
          event and the people attending it without switching between separate screens.
        </p>
        <p>
          The map also fits into the broader journey: users can explore event details,
          see the shared map, and use the event&apos;s group chat to communicate.
        </p>
        <p>
          <Strong>The design decision:</Strong> Make attendees visible in the context of
          the event, rather than treating the attendee list as a separate piece of
          information.
        </p>
        <Figure
          images={[
            {
              src: "/case-studies/meetup-event.webp",
              alt: "Browse meetups, the map with distances, event details and the event group chat",
              width: 1682,
              height: 848,
            },
          ]}
          caption="Browsing nearby meetups, the map view with distances, event details with who's attending, and the event's group chat."
        />
      </CaseStudySection>

      <CaseStudySection id="communication" title="From the map to the conversation">
        <p>
          A map can show people in relation to an event, but the broader experience also
          needs a way for attendees to communicate.
        </p>
        <p>
          I designed group chat screens associated with meetups so people could converse
          around a shared event. The host interface also includes controls for editing
          event details and managing requests to join.
        </p>
        <p>
          These elements complement the map: the event page explains what is happening,
          the map adds context about who is going, and the chat provides a space for
          communication.
        </p>
        <p>Together, they form one journey instead of a standalone event listing.</p>
      </CaseStudySection>

      <CaseStudySection id="hosting" title="Making event hosting straightforward">
        <p>The product also needed to serve the people organizing events.</p>
        <p>
          I designed a structured hosting flow that lets users enter an event name,
          date, time, venue, capacity, schedule, and photos.
        </p>
        <p>
          Keeping these details together helps hosts prepare an event through one
          interface rather than navigating a disconnected set of screens.
        </p>
        <p>
          The hosting experience also supports the wider product: creating events
          is the starting point for discovery, attendance, and meeting other attendees.
        </p>
        <Figure
          images={[
            {
              src: "/case-studies/meetup-host-flow.webp",
              alt: "Interest picker, host event form and photo upload screens in dark and light themes",
              width: 1202,
              height: 1642,
            },
          ]}
          caption="Picking interests, then the host flow from event details to photos."
        />
      </CaseStudySection>

      <CaseStudySection id="visual-identity" title="Establishing a visual identity">
        <SubHeading>Choosing teal</SubHeading>
        <p>
          I conducted competitor analysis, including reviewing event-discovery products
          such as District.
        </p>
        <p>
          I wanted the product to feel modern and welcoming to its intended Gen Z and
          millennial audience. I chose teal because it conveyed the calm and trust I
          wanted while giving the app a fresh visual direction.
        </p>
        <p>
          Many apps in the category lean on orange, yellow or purple, so teal also set
          ezMeetup apart.
        </p>
        <p>
          I designed both dark and light themes, maintaining a consistent visual
          identity across onboarding, event discovery, profiles, and communication.
        </p>
        <p>
          Teal was a design choice based on this reasoning; it wasn&apos;t tested
          against other colors with users.
        </p>
        <Figure
          images={[
            {
              src: "/case-studies/meetup-teal.webp",
              alt: "Welcome, sign up, profile and settings screens in dark and light themes",
              width: 1612,
              height: 1643,
            },
          ]}
          caption="Welcome, sign up, profile and settings, in dark and light themes."
        />
      </CaseStudySection>

      <CaseStudySection id="supporting" title="Supporting the experience around the core journeys">
        <p>
          I designed onboarding, account creation, email verification, profile setup,
          interest selection, friends, and meetup history.
        </p>
        <p>
          These screens help users establish their profiles and navigate their activity
          within the app.
        </p>
        <p>
          I also designed post-event <Strong>safety check-ins</Strong>, where users can
          update their status and let friends know whether they have reached home, are
          still traveling, or need assistance.
        </p>
        <p>
          Safety was a supporting part of the product, not its primary purpose. The core
          experience remained event discovery, hosting, and meeting fellow attendees.
        </p>
        <Figure
          columns={2}
          aspect="1 / 2"
          images={[
            { src: "/case-studies/meetup-safety-dark.webp", alt: "Safety check-in screen in dark theme", width: 401, height: 809 },
            { src: "/case-studies/meetup-safety-light.webp", alt: "Safety check-in screen in light theme", width: 401, height: 809 },
          ]}
          caption="The post-event safety check-in, in dark and light themes."
        />
        <Figure
          images={[
            {
              src: "/case-studies/meetup-profile.webp",
              alt: "Profile, meetup history, settings and messages screens in dark and light themes",
              width: 1686,
              height: 1700,
            },
          ]}
          caption="Profile, meetups you hosted, settings and messages, in dark and light themes."
        />
      </CaseStudySection>

      <CaseStudySection id="outcomes" title="Outcomes">
        <p>
          I designed the complete end-to-end mobile UI: discovery, hosting, the attendee
          map, chat, profiles and safety.
        </p>
      </CaseStudySection>

      <CaseStudySection id="differently" title="What I'd do differently">
        <p>
          I would validate the attendee-map experience early with representative users,
          particularly whether the map helps them understand who else is attending and
          how they would initiate contact.
        </p>
        <p>
          I would also establish the location-sharing and privacy rules before
          finalizing the interface. Showing people on a map introduces questions about
          consent, location precision, and visibility that need to be resolved as part
          of the product experience, not left until implementation.
        </p>
        <p>
          Finally, I would agree on success criteria with the client at the beginning of
          the project. That would make it easier to evaluate whether the experience
          achieved its goals, rather than judging the work only by the completeness of
          the screens.
        </p>
        <Takeaway>
          ezMeetup explored how event discovery could become more social by connecting
          the event, its location, and the people attending it. My focus was to design a
          coherent mobile experience in which people could discover events, host their
          own meetups, and find others going to the same place.
        </Takeaway>
      </CaseStudySection>
    </div>
  );
}
