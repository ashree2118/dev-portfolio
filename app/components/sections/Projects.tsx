"use client";

import Image from "next/image";

const projects = [
  {
    name: "Autocode",
    period: "August 2026",
    image: "/autocode.png",
    stack: ["TypeScript", "Node.js", "Anthropic API", "PostgreSQL", "pgvector", "Docker", "MCP"],
    points: [
      "Built a Claude Code style autonomous agent using RAG, tool calling, memory, Docker sandboxes, and MCP to resolve GitHub issues, test fixes, and open PRs.",
    ],
    code: "https://github.com/ashree2118/ai",
  },
  {
    name: "CodeEX",
    period: "June 2026",
    image: "/codeex.png",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "Docker", "WebSockets"],
    points: [
      "A Production-grade asynchronous online judge with BullMQ, Docker sandboxing, Redis, PostgreSQL, WebSockets, isolation, retries, caching, and load testing.",
    ],
    live: "https://code-executer-green.vercel.app/",
    code: "https://github.com/ashree2118/code-executer",
  },
  {
    name: "Meetrix",
    period: "April 2026",
    image: "/meetrix.png",
    stack: ["React", "Node.js", "SQL", "AWS EC2", "Gemini AI", "Google APIs"],
    points: [
      "AI-powered group scheduling platform that finds optimal meeting times, syncs with Google Calendar, and automates invites with Google Meet integration.",
    ],
    live: "https://meetrix.anushreesh.com/",
    code: "https://github.com/ashree2118/gropumeeting",
  },
  {
    name: "Snippet",
    period: "Feb 2026",
    image: "/snippet.png",
    stack: ["Next.js", "TypeScript", "Chrome Extension API", "Prisma", "PostgreSQL", "Redis", "Gemini AI"],
    points: [
      "AI-powered code snippet manager with a Chrome extension that captures, organizes, and retrieves developer snippets using automatic tagging and search.",
    ],
    live: "https://saveto-snippet.vercel.app",
    code: "https://github.com/ashree2118/snippetvault",
  },
  {
    name: "Echosphere",
    period: "2025",
    image: "/echo.png",
    stack: ["TypeScript", "React", "TailwindCSS", "Framer Motion", "Zustand"],
    points: [
      "Voice-first PG management platform featuring intuitive dashboards for residents, owners, and technicians with a modern, responsive user experience.",
    ],
    live: "https://echosphere-gray.vercel.app",
    code: "https://github.com/ashree2118/echosphere",
  },
  {
    name: "Safire",
    period: "Feb 2025",
    image: "/safire.png",
    stack: ["Next.js", "RAG", "Redis", "Docker", "Node.js", "MongoDB", "Puppeteer", "Prisma"],
    points: [
      "Real-time AI platform that flags online harassment, captures evidence automatically, and surfaces it through a clean dashboard.",
    ],
    live: "https://safire-five.vercel.app",
    code: "https://github.com/ashree2118/Harrashment-Saver-Project1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-(--line-color) py-10">
      <div className="mb-6">
        <p className="text-sm text-(--text-secondary)">Projects</p>
      </div>

      <div className="grid gap-5 p-[26px] md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            className="overflow-hidden rounded-[8px] border border-(--card-border) bg-(--panel-elevated)"
          >
            <div className="relative m-2 overflow-hidden rounded-[8px] border border-(--card-border) bg-(--panel-muted)">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                width={640}
                height={300}
                className="h-40 w-full object-fill
                "
              />
            </div>

            <div className="p-[12px]">
              <div className="px-3 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-(--font-instrument-serif) text-[18px] leading-[1.08] tracking-[-0.02em] text-(--text-primary)">
                      {project.name}
                    </h4>
                  </div>

                  <p className="shrink-0 text-[12px] text-(--text-muted)">
                    {project.period}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-(--chip-bg) px-2 py-0.5 text-[11px] text-(--chip-text)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3">
                  <div className="space-y-2 text-[14px] leading-5 text-(--text-secondary)">
                    {project.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs"
                    style={{
                      backgroundColor: "var(--button-primary-bg)",
                      color: "var(--button-primary-text)",
                    }}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"
                      />
                    </svg>
                    Website
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs"
                    style={{
                      backgroundColor: "var(--button-primary-bg)",
                      color: "var(--button-primary-text)",
                    }}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}