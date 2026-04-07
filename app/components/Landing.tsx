const experience = [
  {
    company: "Takeuforward",
    role: "UI/UX Intern",
    period: "August 2025 - Present",
    location: "Delhi, India",
    points: [
      "Engineered the end-to-end UI for TUF Plus and Free mobile app, along with responsive desktop layouts that balanced performance and usability.",
      "Owned product engineering for Sheets and Track features used by 1M+ users, from interaction design to scalable component architecture.",
      "Redesigned user journeys across major touchpoints and translated product requirements into production-ready interfaces.",
    ],
  },
  {
    company: "Dodox",
    role: "Web Development Intern",
    period: "October 2025 - November 2025",
    location: "Delhi, India",
    points: [
      "Built production-grade frontend and backend features for real-world web applications with a strong focus on reliability.",
      "Resolved day-to-day bugs, API issues, and edge cases while keeping the codebase stable and maintainable.",
      "Collaborated through pull requests, reviews, and refactors that improved architecture and readability.",
    ],
  },
];

const projects = [
  {
    name: "Meetrix",
    period: "April 2026",
    stack: "React, Node.js, SQL, AWS EC2, Gemini AI, Google APIs",
    summary:
      "AI-powered group scheduling platform with an availability heatmap, smart overlap analysis, Google Calendar workflows, and production deployment on AWS EC2.",
    live: "https://meetrix.anushreesh.com",
    code: "https://github.com/ashree2118/gropumeeting",
  },
  {
    name: "Snippet",
    period: "February 2026",
    stack: "Next.js, TypeScript, Chrome Extension API, Prisma, PostgreSQL, Redis, Gemini AI",
    summary:
      "Developer productivity tool with a Chrome extension and dashboard for capturing snippets from the web, then auto-organizing them with AI.",
    live: "https://saveto-snippet.vercel.app/",
    code: "https://github.com/ashree2118/snippetvault",
  },
  {
    name: "Safire",
    period: "February 2025",
    stack: "TypeScript, ReactJS, TailwindCSS, Framer Motion",
    summary:
      "Landing experience for an AI-powered harassment detection system built around LLM and RAG concepts with polished motion and responsive UI.",
    live: "https://safire-five.vercel.app/",
    code: "https://github.com/ashree2118/Harrashment-Saver-Project1",
  },
];

const skills = {
  Languages: ["TypeScript", "JavaScript", "C/C++", "SQL", "HTML5", "CSS3"],
  "Frameworks & Tools": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Zustand",
  ],
  "Developer Stack": ["Git", "GitHub", "JWT", "bcrypt", "Brevo", "Multer", "Figma", "Spline"],
};

const achievements = [
  "Winner, runner-up, or finalist at 5+ national-level hackathons.",
  "Selected for Code Without Barriers mentorship program in the Azure AI track, sponsored by Microsoft and managed by Reskill.",
];

const quickStats = [
  { value: "1M+", label: "Users impacted through product work" },
  { value: "5+", label: "National hackathon finishes" },
  { value: "3", label: "Featured full-stack and UI projects" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#f5f0e8] flex overflow-x-hidden">
      <div className="slanted-lines hidden md:block" aria-hidden />

      <div className="relative min-w-0 flex-1 border-l border-r border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,137,53,0.2),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)] opacity-40" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
          <header className="flex flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#f0a35b]">Portfolio 2026</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Anushree</h1>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm text-[#d7c9b9]">
              <a className="rounded-full border border-white/10 px-4 py-2 hover:border-[#f0a35b] hover:text-white" href="#projects">
                Projects
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 hover:border-[#f0a35b] hover:text-white" href="#experience">
                Experience
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 hover:border-[#f0a35b] hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <main className="px-6 pb-16 md:px-10 md:pb-24">
            <section className="grid gap-10 border-y border-white/10 py-14 md:grid-cols-[1.4fr_0.8fr] md:py-20">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f0a35b]">UI/UX Intern • Full-Stack Builder</p>
                <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                  Designing thoughtful products and shipping them with code.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#d6c8b7] md:text-lg">
                  I’m Anushree, a computer science student in New Delhi focused on interface design, developer tools,
                  and product experiences that feel clear, fast, and intentional.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:ashree2118@gmail.com"
                    className="rounded-full bg-[#f0a35b] px-5 py-3 text-sm font-medium text-[#1c1208] transition hover:bg-[#ffc183]"
                  >
                    Let&apos;s work together
                  </a>
                  <a
                    href="https://github.com/ashree2118"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://anushree210.framer.media/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40"
                  >
                    UI/UX Work
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Quick Intro</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-[#e7dccf]">
                  <p>Based in New Delhi, India</p>
                  <p>B.Tech in Computer Science, Maharaja Surajmal Institute of Technology</p>
                  <p>CGPA 8.9</p>
                  <p>Focused on React, Next.js, Node.js, product design, and developer experience.</p>
                </div>

                <div className="mt-8 grid gap-3">
                  <a href="tel:+919810414231" className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-[#d6c8b7] hover:text-white">
                    +91 9810414231
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anushree-558056292/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-[#d6c8b7] hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/anushree210/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-[#d6c8b7] hover:text-white"
                  >
                    LeetCode
                  </a>
                </div>
              </div>
            </section>

            <section className="grid gap-4 py-10 md:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-[#0c1020] px-6 py-8">
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#b7a28d]">{stat.label}</p>
                </div>
              ))}
            </section>

            <section id="projects" className="border-t border-white/10 py-14">
              <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Selected Projects</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                    Product-minded builds with engineering depth
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#c8b9a9]">
                  Real projects across scheduling, developer tooling, and safety-focused UX. Placeholder visuals are
                  used for now, so we can swap in screenshots later.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f1d] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative h-52 border-b border-white/10 bg-[linear-gradient(135deg,#f0a35b_0%,#d36a2a_30%,#11192c_30%,#11192c_100%)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/80">
                        Dummy Preview 0{index + 1}
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
                        <p className="text-sm uppercase tracking-[0.28em] text-[#f8cfad]">{project.period}</p>
                        <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{project.name}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-7 text-[#dbcfbf]">{project.summary}</p>
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#a99581]">{project.stack}</p>

                      <div className="mt-6 flex gap-3">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-[#f0a35b] px-4 py-2 text-sm font-medium text-[#1c1208] hover:bg-[#ffc183]"
                        >
                          Live
                        </a>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white hover:border-white/40"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="experience" className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Experience</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                  Shipping interfaces people actually use
                </h3>
              </div>

              <div className="space-y-6">
                {experience.map((item) => (
                  <article key={item.company} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.company}</h4>
                        <p className="text-sm uppercase tracking-[0.18em] text-[#f0a35b]">{item.role}</p>
                      </div>
                      <div className="text-sm leading-6 text-[#d6c8b7] md:text-right">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[#dfd4c7]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#f0a35b]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-6 border-t border-white/10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border border-white/10 bg-[#0b1020] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Technical Skills</p>
                <div className="mt-6 space-y-6">
                  {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="text-lg font-medium text-white">{group}</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dfd4c7]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Achievements</p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-[#dfd4c7]">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#f0a35b]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f0a35b]">Education</p>
                  <h4 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Maharaja Surajmal Institute of Technology
                  </h4>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#f0a35b]">
                    B.Tech in Computer Science • 2023 - 2027
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#dfd4c7]">
                    Current CGPA: 8.9
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>
            </section>

            <section
              id="contact"
              className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,#f0a35b_0%,#b95823_40%,#11192c_40%,#11192c_100%)] px-6 py-10 md:px-10"
            >
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#1d1208]">Let&apos;s Build</p>
                  <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    Open to internships, freelance work, and ambitious product ideas.
                  </h3>
                </div>

                <div className="space-y-3 rounded-[1.8rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <a href="mailto:ashree2118@gmail.com" className="block text-sm text-[#fff1e3] hover:text-white">
                    ashree2118@gmail.com
                  </a>
                  <a href="tel:+919810414231" className="block text-sm text-[#fff1e3] hover:text-white">
                    +91-9810414231
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anushree-558056292/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-[#fff1e3] hover:text-white"
                  >
                    linkedin.com/in/anushree-558056292
                  </a>
                  <a
                    href="https://github.com/ashree2118"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-[#fff1e3] hover:text-white"
                  >
                    github.com/ashree2118
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <div className="slanted-lines hidden md:block" aria-hidden />
    </div>
  );
}
