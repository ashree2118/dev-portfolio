import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "./data";

export const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-(--text-muted) focus-visible:ring-offset-4 focus-visible:ring-offset-(--page-bg)";

export function ArrowIcon({ className = "" }: { className?: string }) {
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

export function CaseStudyCard({
  study,
  compact = false,
  preload = false,
  headingLevel = "h3",
}: {
  study: CaseStudy;
  compact?: boolean;
  preload?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group flex h-full flex-col rounded-xl border border-(--card-border) bg-(--panel-elevated) p-2 transition-colors duration-300 hover:border-(--chip-border) ${focusRing}`}
    >
      <div
        className={`relative overflow-hidden rounded-lg border border-(--card-border) bg-(--panel-muted) ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`}
      >
        {study.image && (
          <Image
            src={study.image}
            alt={`${study.name} project screens`}
            fill
            preload={preload}
            sizes={compact ? "(min-width: 768px) 330px, 100vw" : "(min-width: 768px) 656px, 100vw"}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "px-2.5 pb-2.5 pt-4" : "px-3 pb-3 pt-5 md:px-4 md:pb-4"}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <Heading
            className={`font-(family-name:--font-instrument-serif) leading-tight tracking-[-0.01em] text-(--text-primary) ${compact ? "text-2xl" : "text-3xl"}`}
          >
            {study.name}
          </Heading>
          {!compact && study.period && <p className="text-xs text-(--text-muted)">{study.period}</p>}
        </div>

        {study.summary && (
          <p
            className={`mt-2 text-pretty text-(--text-secondary) ${compact ? "text-sm leading-6" : "max-w-xl text-[15px] leading-6"}`}
          >
            {study.summary}
          </p>
        )}

        <div className={`flex flex-wrap items-end justify-between gap-4 ${compact ? "mt-auto pt-4" : "mt-5"}`}>
          {!compact && study.tags && (
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
          <span className={`inline-flex items-center gap-1.5 text-xs text-(--text-primary) ${compact ? "" : "ml-auto"}`}>
            Read case study
            <ArrowIcon className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
