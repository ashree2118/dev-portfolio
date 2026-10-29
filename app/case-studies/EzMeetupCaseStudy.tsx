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

const meta = [
  { label: "Role", value: "End-to-end UI/UX designer" },
  { label: "Project", value: "Freelance client project" },
  { label: "Platform", value: "Mobile app" },
  { label: "Audience", value: "Gen Z and millennials" },
];

const tags = ["Product design", "Mobile app", "End-to-end UI/UX", "Interaction design"];

export default function EzMeetupCaseStudy() {
  return (
    <div className="pb-12">
      <CaseStudyHero
        lead="Making events more social, from discovery to showing up together"
        tags={tags}
        cover={{ src: "/case-studies/meetup-collage.webp", alt: "Collage of ezMeetup app screens", width: 2000, height: 1508 }}
        meta={meta}
      />

      <CaseStudySection id="overview" title="Overview">
        <p>Finding an event is easy. Finding people to go with is harder.</p>
        <p>
          ezMeetup helps people discover community events, host their own meetups
          and connect with others who are going. It brings discovery, hosting, group
          chats and a shared attendee map into one app. The map does more than show
          where an event is. It shows who else is going, so people can connect or
          tag along.
        </p>
        <p>
          I designed the end-to-end mobile UI: onboarding, discovery, hosting,
          attendee maps, group chats, profiles and safety check-ins.
        </p>
        <PullQuote label="The design challenge">
          How might we make discovering events easier, while helping people feel
          connected to the people they could go with?
        </PullQuote>
      </CaseStudySection>

      <CaseStudySection id="core-experience" title="Defining the core experience">
        <p>The product is built around three connected activities.</p>
        <NumberedList
          items={[
            {
              title: "Discover events",
              detail: "Browse meetups, check the details and find activities that match your interests.",
            },
            {
              title: "Host your own meetup",
              detail: "Create an event, share its details and schedule, and bring a community together.",
            },
            {
              title: "See who's going and connect",
              detail: "Explore a map of people attending the same event, and connect before you arrive.",
            },
          ]}
        />
        <p>
          Most event apps stop at &ldquo;Join event&rdquo;. ezMeetup asks what
          happens next: who else is going, where they are, and whether you could
          meet up or travel together. The attendee map is what connects discovery
          to actually going.
        </p>
      </CaseStudySection>

      <CaseStudySection id="visual-identity" title="A distinct visual identity">
        <SubHeading>Why teal</SubHeading>
        <p>
          I studied event discovery products such as District to understand the
          visual language of the category. Many of them leaned on orange, yellow or
          purple.
        </p>
        <p>
          For a Gen Z and millennial audience, I wanted ezMeetup to feel modern and
          welcoming. Teal balanced calm, trust and freshness, and set the product
          apart from the rest.
        </p>
        <p>
          I designed both dark and light themes with one consistent palette and set
          of patterns, so the same look works for social moments and practical
          event details alike.
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

      <CaseStudySection id="discovery" title="Helping people discover and join events">
        <p>
          People need enough information to decide whether an event is right for
          them. Event pages show the description, host, venue, date and time,
          schedule, capacity, who is attending and the location, laid out to scan
          quickly with a clear way to join.
        </p>
        <p>But joining is only the start.</p>
      </CaseStudySection>

      <CaseStudySection id="attendee-map" title="Turning an attendee list into a way to connect">
        <SubHeading>The shared attendee map</SubHeading>
        <p>
          The most distinctive part of ezMeetup is a map of the people going to the
          same event. It shows not just where the event is, but who else is going,
          so nobody has to show up alone.
        </p>
        <p>The map answers four questions:</p>
        <BulletList
          items={[
            "Where is the event?",
            "Who else is going?",
            "Where are they, relative to the venue?",
            "Could I meet someone, or join them on the way?",
          ]}
        />
        <p>
          It bridges the gap between deciding to go and making the event a shared
          experience.
        </p>
        <Figure
          images={[
            {
              src: "/case-studies/meetup-event.webp",
              alt: "Browse meetups, attendee map with distances, event details and the event group chat",
              width: 1682,
              height: 848,
            },
          ]}
          caption="Browsing meetups, the attendee map with distances, event details, and the event's group chat."
        />
      </CaseStudySection>

      <CaseStudySection id="hosting" title="Making it easy to host a meetup">
        <p>
          ezMeetup is also for people who want to organize events, not just attend
          them. Hosts fill in one structured flow, with the name, date, time, venue,
          capacity, schedule and photos, and publish. No separate tool is needed
          for each step.
        </p>
        <Figure
          images={[
            {
              src: "/case-studies/meetup-host.webp",
              alt: "Interest picker, host event form, photo upload and safety check-in screens",
              width: 1603,
              height: 1642,
            },
          ]}
          caption="Picking interests, the host flow from event details to photos, and the safety check-in."
        />
      </CaseStudySection>

      <CaseStudySection id="conversations" title="Keeping conversations with the event">
        <p>
          Each meetup has a group chat for its attendees. Hosts also get controls to
          edit event details and handle requests to join.
        </p>
        <p>
          Keeping the conversation inside the event links planning to showing up.
          The app is useful before the event starts, not only once people reach the
          venue.
        </p>
      </CaseStudySection>

      <CaseStudySection id="supporting-experiences" title="Supporting people through the whole journey">
        <p>
          Around the core flows, I designed onboarding, profiles, interests, friends
          and meetup history.
        </p>
        <p>
          After an event, a <Strong>safety check-in</Strong> lets attendees tell
          friends they reached home, are still on the way, or need help. Safety
          supports the experience. It is not the main purpose of the product.
        </p>
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

      <CaseStudySection id="reflection" title="Reflection">
        <p>
          ezMeetup pushed me to design a connected mobile experience around more
          than finding an event.
        </p>
        <BulletList
          items={[
            <><Strong>People are part of discovery.</Strong> The attendee map explored how location and social connection can help people feel comfortable meeting others, and even travel together.</>,
            <><Strong>Many journeys, one product.</Strong> Discovering, hosting, chatting and checking in after an event all had to fit together.</>,
            <><Strong>Consistency carries the experience.</Strong> Working end to end let me keep one visual identity across every screen.</>,
          ]}
        />
        <Takeaway>
          ezMeetup brings events and people closer together. It helps people discover
          what to attend, organize their own meetups, and connect with others going
          to the same place.
        </Takeaway>
      </CaseStudySection>
    </div>
  );
}
