import Image from "next/image";

export type FigureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
};

export function CaseStudyHero({
  lead,
  tags,
  cover,
  meta,
}: {
  lead: string;
  tags: string[];
  cover: FigureImage;
  meta: { label: string; value: string }[];
}) {
  return (
    <div className="pb-12 pt-8">
      <p className="font-(family-name:--font-instrument-serif) text-3xl leading-tight tracking-[-0.01em] text-balance text-(--text-primary)">
        {lead}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Topics">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-(--chip-border) bg-(--chip-bg) px-2 py-1 text-[11px] leading-none text-(--chip-text)"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-8 overflow-hidden rounded-xl border border-(--card-border) bg-(--figure-bg)">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          preload
          sizes="(min-width: 768px) 672px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <dl className="mt-8 border-t border-(--line-color)">
        {meta.map((item) => (
          <div key={item.label} className="flex gap-6 border-b border-(--line-color) py-3 text-[13px] leading-5">
            <dt className="w-24 shrink-0 text-(--text-muted)">{item.label}</dt>
            <dd className="text-(--text-primary)">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function CaseStudySection({
  id,
  title,
  role,
  children,
}: {
  id: string;
  title: string;
  role?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-(--line-color) py-12">
      <h2
        id={`${id}-title`}
        className="font-(family-name:--font-instrument-serif) text-3xl leading-tight tracking-[-0.01em] text-balance text-(--text-primary)"
      >
        {title}
      </h2>
      {role && <p className="mt-2 text-xs text-(--text-muted)">My role: {role}</p>}
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-pretty text-(--text-secondary)">
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-4 text-base font-medium text-(--text-primary)">{children}</h3>;
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-(--text-primary)">{children}</strong>;
}

export function PullQuote({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <blockquote className="mt-8 border-t border-(--line-color) pt-7">
      <p className="text-xs text-(--text-muted)">{label}</p>
      <p className="mt-3 font-(family-name:--font-instrument-serif) text-2xl leading-snug text-balance text-(--text-primary)">
        {children}
      </p>
    </blockquote>
  );
}

export function Figure({
  images,
  caption,
  columns = 1,
  aspect = "4 / 3",
}: {
  images: FigureImage[];
  caption: string;
  columns?: 1 | 2;
  /** Shared box shape for side-by-side images, so both boxes line up. */
  aspect?: string;
}) {
  return (
    <figure className="py-3">
      <div className={`grid gap-5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
        {images.map((image) => (
          <div key={image.src}>
            {image.label && <p className="mb-2 text-xs text-(--text-muted)">{image.label}</p>}
            {/* Side by side, both boxes share one shape so the pair lines up.
                Stacked on phones, each image keeps its natural shape. */}
            <div
              className={`overflow-hidden rounded-lg border border-(--card-border) bg-(--figure-bg) ${columns === 2 ? "sm:relative sm:aspect-(--figure-aspect)" : ""}`}
              style={columns === 2 ? ({ "--figure-aspect": aspect } as React.CSSProperties) : undefined}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={columns === 2 ? "(min-width: 640px) 330px, 100vw" : "(min-width: 768px) 672px, 100vw"}
                className={`h-auto w-full ${columns === 2 ? "sm:absolute sm:inset-0 sm:h-full sm:object-contain sm:p-3" : ""}`}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-(--text-muted)">{caption}</figcaption>
    </figure>
  );
}

export function TermGrid({ items }: { items: { term: string; detail: string }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg border border-(--card-border) bg-(--line-color) sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.term} className="bg-(--page-bg) px-4 py-3.5">
          <dt className="text-sm font-medium text-(--text-primary)">{item.term}</dt>
          <dd className="mt-1 text-sm leading-6 text-(--text-secondary)">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function NumberedList({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <ol className="divide-y divide-(--line-color) border-y border-(--line-color)">
      {items.map((item, index) => (
        <li key={item.title} className="flex gap-4 py-4">
          <span className="w-5 shrink-0 pt-0.5 text-xs tabular-nums text-(--text-muted)">{index + 1}</span>
          <div>
            <p className="font-medium text-(--text-primary)">{item.title}</p>
            <p className="mt-1 text-sm leading-6">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span aria-hidden className="mt-[11px] size-1 shrink-0 rounded-full bg-(--text-muted)" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-xl border border-(--card-border) bg-(--panel-elevated) p-6">
      <p className="text-xs text-(--text-muted)">The takeaway</p>
      <p className="mt-3 font-(family-name:--font-instrument-serif) text-xl leading-snug text-(--text-primary)">
        {children}
      </p>
    </div>
  );
}
