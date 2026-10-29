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

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={`group flex h-full flex-col rounded-xl border border-(--card-border) bg-(--panel-elevated) p-2 transition-colors duration-300 hover:border-(--chip-border) ${focusRing}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-(--card-border) bg-(--figure-bg)">
        <Image
          src={study.image}
          alt={`${study.name} project screens`}
          fill
          sizes="(min-width: 768px) 330px, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-4">
        <h3 className="font-(family-name:--font-instrument-serif) text-2xl leading-tight tracking-[-0.01em] text-(--text-primary)">
          {study.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-pretty text-(--text-secondary)">{study.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs text-(--text-primary)">
          Read case study
          <ArrowIcon className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
