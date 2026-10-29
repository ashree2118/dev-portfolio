import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "./data";

export const metadata = {
  title: "Case Studies | Anushree",
  description: "Explore detailed case studies of Anushree's projects.",
};

const featured = caseStudies.filter((study) => study.featured);
const more = caseStudies.filter((study) => !study.featured);

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`size-3.5 shrink-0 ${className}`}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-(--text-muted) focus-visible:ring-offset-4 focus-visible:ring-offset-(--page-bg)";

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--page-bg) text-(--text-primary)">
      <div className="side-lines-shell pointer-events-none fixed inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
        <div className="slanted-lines slanted-lines-left" />
        <div className="slanted-lines slanted-lines-right" />
      </div>

      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[720px] border-x border-(--line-color) px-5 py-10 md:px-6 md:py-14">
        <Link
          href="/"
          className={`group inline-flex items-center gap-1.5 rounded-sm text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) ${focusRing}`}
        >
          <ArrowIcon className="rotate-180 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>

        <header className="mt-12 pb-10">
          <h1 className="font-(family-name:--font-instrument-serif) text-5xl leading-none tracking-[-0.02em] text-balance text-(--text-primary) md:text-6xl">
            Case studies
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-pretty text-(--text-secondary)">
            A closer look at the projects I have built. Select a project to open its case study.
          </p>
        </header>

        <ul className="space-y-6" role="list">
          {featured.map((study, index) => (
            <li key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className={`group block rounded-xl border border-(--card-border) bg-(--panel-elevated) p-2 transition-colors duration-300 hover:border-(--chip-border) ${focusRing}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-(--card-border) bg-(--panel-muted)">
                  {study.image && (
                    <Image
                      src={study.image}
                      alt={`${study.name} project screens`}
                      fill
                      preload={index === 0}
                      sizes="(min-width: 768px) 656px, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.03]"
                    />
                  )}
                </div>

                <div className="px-3 pb-3 pt-5 md:px-4 md:pb-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-(family-name:--font-instrument-serif) text-3xl leading-tight tracking-[-0.01em] text-(--text-primary)">
                      {study.name}
                    </h2>
                    {study.period && (
                      <p className="text-xs text-(--text-muted)">{study.period}</p>
                    )}
                  </div>

                  {study.summary && (
                    <p className="mt-2 max-w-xl text-[15px] leading-6 text-pretty text-(--text-secondary)">
                      {study.summary}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                    {study.tags && (
                      <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Topics">
                        {study.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md border border-(--chip-border) bg-(--chip-bg) px-2 py-1 text-[11px] leading-none text-(--chip-text)"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-(--text-primary)">
                      Read case study
                      <ArrowIcon className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {more.length > 0 && (
          <section className="mt-16" aria-labelledby="more-projects">
            <h2
              id="more-projects"
              className="border-b border-(--line-color) pb-3 text-sm text-(--text-secondary)"
            >
              More projects
            </h2>
            <ul role="list">
              {more.map((study) => (
                <li key={study.slug} className="border-b border-(--line-color)">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className={`group -mx-2 my-1 flex items-center gap-4 rounded-lg px-2 py-3 transition-colors duration-200 hover:bg-(--chip-bg) ${focusRing}`}
                  >
                    <div className="relative aspect-[8/5] w-24 shrink-0 overflow-hidden rounded-md border border-(--card-border) bg-(--panel-muted) sm:w-28">
                      {study.image && (
                        <Image
                          src={study.image}
                          alt=""
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <span className="min-w-0 flex-1 font-(family-name:--font-instrument-serif) text-xl leading-tight text-(--text-primary) sm:text-2xl">
                      {study.name}
                    </span>
                    {study.period && (
                      <span className="shrink-0 text-xs tabular-nums text-(--text-muted)">
                        {study.period}
                      </span>
                    )}
                    <ArrowIcon className="text-(--text-muted) transition-[color,transform] duration-300 ease-out group-hover:text-(--text-primary) motion-safe:group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
