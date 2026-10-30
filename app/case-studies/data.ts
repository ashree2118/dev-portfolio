export type CaseStudy = {
  name: string;
  slug: string;
  period?: string;
  image: string;
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    name: "TakeUForward",
    slug: "takeuforward",
    period: "January–August 2026",
    image: "/case-studies/tuf-collage.webp",
    summary: "Designing an AI tutor that helps students think, not just code",
  },
  {
    name: "ezMeetup",
    slug: "ezmeetup",
    image: "/case-studies/meetup-collage.webp",
    summary: "Designing for the people behind the event",
  },
];
