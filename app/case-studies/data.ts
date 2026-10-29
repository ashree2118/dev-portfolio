type CaseStudy = {
  name: string;
  slug: string;
  period?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    name: "TakeUForward",
    slug: "takeuforward",
    period: "January–April (remote), July–August (onsite) — year to be confirmed",
    image: "/takeuforward_logo.jpeg",
  },
  {
    name: "ezMeetup",
    slug: "ezmeetup",
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
