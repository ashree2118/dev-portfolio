type StackItem = {
  name: string;
  icon: React.ReactNode;
};

const stacks: StackItem[] = [
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <rect width="24" height="24" rx="6" fill="#3178C6" />
        <path d="M7.3 8.5h9.4v2H13.1V19h-2.4v-8.5H7.3zm10 0c1.7 0 2.8.8 3 2.2h-2.1c-.1-.4-.4-.7-1-.7-.7 0-1 .3-1 .7 0 .5.6.7 1.6 1 1.5.4 2.8.9 2.8 2.8 0 1.8-1.5 3-3.6 3s-3.5-1-3.7-2.7h2.2c.1.6.6 1 1.5 1 .8 0 1.2-.3 1.2-.8 0-.5-.5-.7-1.6-1-1.7-.5-2.7-1.1-2.7-2.7 0-1.7 1.4-2.8 3.4-2.8" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <rect width="24" height="24" rx="6" fill="#F7DF1E" />
        <path d="M12.7 17.8c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.5 3.6 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1s-1.2.4-1.2 1c0 .7.4 1 1.5 1.5l.6.3c2.1.9 3.3 1.9 3.3 4 0 2.3-1.8 3.5-4.2 3.5-2.4 0-4-.9-4.8-2.5zm-9.2.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6V9.2H9v8.5c0 2.6-1.5 3.8-3.7 3.8-2 0-3.1-1-3.7-2.2z" fill="#111827" />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <ellipse cx="12" cy="6.5" rx="6.5" ry="3.5" fill="#60A5FA" />
        <path d="M5.5 6.5v4c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-4" fill="#60A5FA" opacity=".8" />
        <path d="M5.5 10.5v4c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5v-4" fill="#60A5FA" opacity=".6" />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="8" ry="3.3" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="8" ry="3.3" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3.3" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M8 7v10h2V11.2l5 5.8H17V7h-2v5.8L10 7z" fill="var(--panel-bg)" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="m12 2 8 4.6v10.8L12 22l-8-4.6V6.6z" fill="#539E43" />
        <path d="M12 6.4 8 8.7v4.7l4 2.3 4-2.3V8.7z" fill="#fff" opacity=".15" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M4.5 8.5h10.5M4.5 12h8.5M4.5 15.5h10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 8.5 19.5 12 16 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M12 3c2.4 2.7 3.8 5.3 3.8 8.4 0 3.8-2.1 6.7-3.8 8.6-1.8-2-3.8-4.8-3.8-8.6C8.2 8.3 9.6 5.7 12 3Z" fill="#10B981" />
        <path d="M12 5.5v13" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path d="M13.7 3.2 6.4 12.4c-.3.4-.4.9-.1 1.4l3.5 6.3c.3.6 1.1.6 1.4.1l6-14.6c.3-.8-.5-1.5-1.2-1.1Z" fill="#2D3748" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M12 4.5c-3.4 0-5.5 2.2-5.5 5.7v4.2c0 1.8 1.2 3.1 2.9 3.1.8 0 1.5-.2 2-.7l.2-.2.2.2c.5.5 1.2.7 2 .7 1.7 0 2.9-1.3 2.9-3.1v-4.2c0-3.5-2.1-5.7-5.5-5.7Z" fill="#336791" />
        <circle cx="10" cy="10" r="1" fill="#fff" />
        <circle cx="14" cy="10" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Redis",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="m4 9 8-3 8 3-8 3z" fill="#DC382D" />
        <path d="m4 13 8 3 8-3" stroke="#DC382D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 17 8 3 8-3" stroke="#DC382D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Zustand",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="#F59E0B" />
        <path d="M7 8h10l-10 8h10" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M8 10h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zM5 13h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2z" fill="#2496ED" />
        <path d="M18.5 13.5c.4-1.2 1.4-1.8 2.5-1.8.2.9 0 2-.8 2.7.6.2 1.2.2 1.8.1-.4 2.3-2.2 4-5 4H8c-2.1 0-3.4-1.2-3.4-3.1v-1.9Z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M7 14.5c2.7 1.7 7.3 1.7 10 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 11.8h1.3l.5-1.4h2.5l.5 1.4h1.3L11.8 6h-1.5zm2.2-2.4.8-2.3.8 2.3zm5-3.4h1.3v5.8h-1.3zm2.4 0H19c1 0 1.7.5 1.7 1.5 0 .6-.3 1.1-.8 1.3.6.2 1 .7 1 1.5 0 1.1-.8 1.6-1.9 1.6h-1.4zm1.2 2.3h.5c.5 0 .8-.2.8-.6 0-.4-.3-.6-.8-.6h-.5zm0 2.5h.6c.6 0 .9-.2.9-.7s-.3-.7-.9-.7h-.6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.17a10.94 10.94 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.79.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path d="M12 3.5a3 3 0 0 0-3 3V9h3z" fill="#F24E1E" />
        <path d="M9 9H6a3 3 0 1 0 0 6h3z" fill="#A259FF" />
        <path d="M12 9H9v3a3 3 0 1 0 3-3" fill="#1ABCFE" />
        <path d="M15 3.5h-3V9h3a3 3 0 1 0 0-5.5" fill="#FF7262" />
        <path d="M12 14.5H9V18a3 3 0 1 0 3-3.5" fill="#0ACF83" />
      </svg>
    ),
  },
];

export default function Stacks() {
  return (
    <section id="stacks" className="border-t border-dashed border-(--line-color) py-7">
      <p className="mb-3 text-[14px] text-(--text-muted)">Stack</p>
      <div className="flex flex-wrap gap-2">
        {stacks.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-(--chip-border) bg-(--chip-bg) px-2.5 py-1 text-[12px] text-(--chip-text)"
          >
            <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-(--chip-dot)">
              {tech.icon}
            </span>
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
