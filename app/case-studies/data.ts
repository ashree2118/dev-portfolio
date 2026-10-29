export type CaseStudy = {
  name: string;
  slug: string;
  period?: string;
  image?: string;
  summary?: string;
  tags?: string[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    name: "TakeUForward",
    slug: "takeuforward",
    period: "January–August 2026",
    image: "/case-studies/tuf-collage.webp",
    summary: "Evolving the learning experience at TakeUForward",
    tags: ["Product design", "AI-powered learning", "Gamification", "Visual identity"],
    featured: true,
  },
  {
    name: "ezMeetup",
    slug: "ezmeetup",
    image: "/case-studies/meetup-collage.webp",
    summary: "Making events more social, from discovery to showing up together",
    tags: ["Product design", "Mobile app", "End-to-end UI/UX", "Interaction design"],
    featured: true,
  },
  {
    name: "Autocode",
    slug: "autocode",
    period: "August 2026",
    image: "/autocode.png",
  },
  {
    name: "CodeEX",
    slug: "codeex",
    period: "June 2026",
    image: "/codeex.png",
  },
  {
    name: "Meetrix",
    slug: "meetrix",
    period: "April 2026",
    image: "/meetrix.png",
  },
  {
    name: "Snippet",
    slug: "snippet",
    period: "Feb 2026",
    image: "/snippet.png",
  },
  {
    name: "Echosphere",
    slug: "echosphere",
    period: "2025",
    image: "/echo.png",
  },
  {
    name: "Safire",
    slug: "safire",
    period: "Feb 2025",
    image: "/safire.png",
  },
];
