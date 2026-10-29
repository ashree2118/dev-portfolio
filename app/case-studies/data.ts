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
    summary: "Evolving the learning experience at TakeUForward",
  },
  {
    name: "ezMeetup",
    slug: "ezmeetup",
    image: "/case-studies/meetup-collage.webp",
    summary: "Making events more social, from discovery to showing up together",
  },
];
