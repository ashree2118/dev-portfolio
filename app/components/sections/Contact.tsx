export default function Contact() {
  const links = [
    { label: "GitHub", href: "https://github.com/ashree2118" },
    { label: "Twitter", href: "https://x.com/anushree210" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anushree-558056292/" },
    { label: "Mail", href: "mailto:anushree@example.com" },
    { label: "Resume", href: "https://drive.google.com/file/d/1hjMHdfCD7r2G3NYEaRw5II1dZphp20ns/view?usp=drive_link" },
  ];

  return (
    <section id="contact" className="border-t border-dashed border-(--line-color) py-8">
      <p className="text-[14px] text-(--text-muted)">Contact</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-[12px] border border-(--card-border) bg-(--panel-elevated) px-4 py-2 text-[14px] text-(--text-primary) transition hover:border-(--chip-border)"
          >
            <span className="flex h-4 w-4 items-center justify-center text-(--text-muted)">
              {link.label === "GitHub" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.17a10.94 10.94 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.79.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" />
                </svg>
              )}
              {link.label === "Twitter" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M18.244 2H21.5l-7.113 8.13L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.61-8.7L1.5 2h6.72l4.64 6.13L18.244 2zm-1.14 18h1.8L7.24 3.9H5.31L17.104 20z" />
                </svg>
              )}
              {link.label === "LinkedIn" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05C11.93 8.98 13.6 8 15.8 8c4.57 0 5.2 3.01 5.2 6.92V23h-4v-7.21c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.87-2.76 3.81V23h-4V8z" />
                </svg>
              )}
              {link.label === "Mail" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              )}
              {link.label === "Resume" && (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M14 3h5v5" />
                  <path d="M10 14L19 5" />
                  <path d="M19 14v5H5V5h5" />
                </svg>
              )}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
