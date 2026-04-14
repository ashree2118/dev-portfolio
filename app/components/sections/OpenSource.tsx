const contributions = [
  {
    message: "Add preset for barrier-sliding_gate (Resolves #1771)",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
  {
    message: "Add preset for natural-tree",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
  {
    message: "Add support field to memorial plaque preset (Resolves #1381)",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
  {
    message: "Add preset for amenity-kitchen (#1631)",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
  {
    message: "Show access field on amenity-shelter if tagged (#887)",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
  {
    message: "Stop deprecating landuse=basin (#1804)",
    repo: "openstreetmap/id-tagging-schema",
    year: "2025",
    url: "https://github.com/openstreetmap/id-tagging-schema/pulls?q=is%3Apr+author%3Aashree2118+is%3Aclosed",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="border-t border-dashed border-(--line-color) py-8">
      <p className="text-[14px] text-(--text-muted)">Open source contributions</p>

      <div className="mt-4 ">
        {contributions.map((contrib) => (
          <a
            key={`${contrib.repo}-${contrib.message}`}
            href={contrib.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 py-3 transition px-1"
          >
            <div className="shrink-0 text-(--accent-text)">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M6 21V9a9 9 0 009 9" />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] text-(--text-primary)">
                {contrib.message} <span className="ml-1 text-(--text-muted)">{contrib.year}</span>
              </p>
              <p className="mt-1 text-[12px] text-(--text-secondary)">Contributed to {contrib.repo}</p>
            </div>

            <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border border-[#737373] text-(--text-muted) transition">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
