"use client";

import { useState } from "react";

const experience = [
  {
    company: "TakeUforward",
    role: "UI/UX Intern",
    period: "Aug 2025 - April 2026",
    logo: "/takeuforward_logo.jpeg",
    summary: [
      "Engineered the end-to-end UI for the TUF Plus and Free mobile app, and built responsive desktop layouts balancing performance and usability.",
      "Owned product engineering for Sheets and Track features used by 1M+ users, from interaction design to scalable component architecture.",
      "Drove user journey redesign across key touchpoints, translating product requirements into intuitive, production-ready interfaces.",
    ],
  },
  {
    company: "Dodox",
    role: "Web Developer Intern",
    period: "Nov 2025 - Dec 2025",
    logo: "/dodox_in_logo.jpeg",
    summary: [
      "Contributed to production-grade web applications by implementing core frontend and backend features for reliable, real-world usage.",
      "Resolved day-to-day development issues across the codebase, including bug fixes, API integrations, and edge-case failures.",
      "Collaborated through pull requests, code reviews, and refactoring work to improve architecture, readability, and maintainability.",
    ],
  },
  {
    company: "Quvor",
    role: "UI/UX Intern",
    period: "Sept 2025 - Oct 2025",
    logo: "/quvor_logo.jpeg",
    summary: [
      "Designed the company landing page with a strong focus on user flow, visual hierarchy, and UX-led decision making.",
      "Created reusable UI components, structured layouts, and polished high-fidelity mockups aligned with the brand design system.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="experience" className="border-t border-dashed border-(--line-color) py-8">
      <p className="text-[14px] text-(--text-muted)">Experience</p>

      <div className="mt-4 space-y-2">
        {experience.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={`${item.company}-${index}`} className="py-2">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div className="flex items-start gap-3.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={40}
                    height={40}
                    loading="eager"
                    className="mt-0.5 block h-10 w-10 shrink-0 overflow-hidden rounded-full border border-(--card-border) bg-(--panel-elevated) object-cover"
                  />

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h2 className="text-[14px] leading-none tracking-[-0.01em] text-(--text-primary) font-(--font-instrument-serif)">
                        {item.company}
                      </h2>
                      <svg
                        className={`h-3.5 w-3.5 text-(--text-muted) transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <p className="mt-1 text-[14px] text-(--text-muted)">{item.role}</p>
                  </div>
                </div>

                <div className="shrink-0 pt-1 text-right text-[14px] text-(--text-muted)">
                  <p>{item.period}</p>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "mt-2 max-h-52 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-[3.4rem] border-l border-(--card-border) pl-3 text-[13px] leading-6 text-(--text-muted)">
                  {item.summary.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
