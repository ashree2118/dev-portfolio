const stacks = [
  "TypeScript",
  "JavaScript",
  "SQL",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Zustand",
  "Docker",
  "AWS",
  "GitHub",
  "Figma",
];

export default function Stacks() {
  return (
    <section id="stacks" className="border-t border-dashed border-(--line-color) py-7">
      <p className="mb-3 text-[14px] text-(--text-muted)">Stack</p>
      <div className="flex flex-wrap gap-2">
        {stacks.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-md border border-(--chip-border) bg-(--chip-bg) px-2.5 py-1 text-[12px] text-(--chip-text)"
          >
            <span className="h-2 w-2 rounded-full bg-(--chip-dot)" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
