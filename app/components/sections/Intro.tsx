"use client";

import { useState } from "react";
import Image from "next/image";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashree2118",
    stroke: false,
    icon: (
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.17a10.94 10.94 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.26 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.79.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5z" />
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/anushree210",
    stroke: false,
    icon: (
      <path d="M18.244 2H21.5l-7.113 8.13L22.75 22h-6.55l-5.13-6.7L5.2 22H1.94l7.61-8.7L1.5 2h6.72l4.64 6.13L18.244 2zm-1.14 18h1.8L7.24 3.9H5.31L17.104 20z" />
    ),
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1hjMHdfCD7r2G3NYEaRw5II1dZphp20ns/view?usp=drive_link",
    stroke: true,
    icon: (
      <>
        <path d="M14 3h5v5" />
        <path d="M10 14L19 5" />
        <path d="M19 14v5H5V5h5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anushree-558056292/",
    stroke: false,
    icon: (
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05C11.93 8.98 13.6 8 15.8 8c4.57 0 5.2 3.01 5.2 6.92V23h-4v-7.21c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.87-2.76 3.81V23h-4V8z" />
    ),
  },
] as const;

function SocialIcon({
  children,
  stroke,
}: {
  children: React.ReactNode;
  stroke: boolean;
}) {
  return (
    <svg
      className="h-[1rem] w-[1rem]"
      viewBox="0 0 24 24"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth={stroke ? "1.8" : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  if (theme === "light") {
    return (
      <svg
        className="h-[1rem] w-[1rem]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25M12 18.75V21M5.64 5.64l1.6 1.6M16.76 16.76l1.6 1.6M3 12h2.25M18.75 12H21M5.64 18.36l1.6-1.6M16.76 7.24l1.6-1.6"
        />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }

  return (
    <svg className="h-[1rem] w-[1rem]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.92 14.12A8.25 8.25 0 0 1 9.88 3.08 9 9 0 1 0 20.92 14.12Z" />
    </svg>
  );
}

export default function Intro() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof document !== "undefined" && document.documentElement.dataset.theme === "light") {
      return "light";
    }

    return "dark";
  });

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <section id="intro" className="pt-11 pb-8">
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-start gap-4">
          <Image
            src="/myphoto.png"
            alt="Anushree Sharma"
            width={60}
            height={60}
            priority
            className="h-15 w-15 shrink-0 rounded-full object-cover"
          />
          <div>
            <h1
              className="lg:text-[52px] text-[32px] leading-none tracking-tight text-(--text-primary)"
              style={{ fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif' }}
            >
              Anushree Sharma
            </h1>
            <p className="mt-1 text-[13px] text-(--text-secondary)">
              21 • engineer • developer • designer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2.5 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-(--icon-border) bg-(--icon-surface) text-(--text-primary) transition hover:-translate-y-0.5 hover:border-white/20"
                aria-label={`Open ${link.label}`}
              >
                <SocialIcon stroke={link.stroke}>{link.icon}</SocialIcon>
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-(--icon-border) bg-(--icon-surface) text-(--text-primary) transition hover:-translate-y-0.5 hover:border-white/20"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </div>

      <p className="mt-8 text-[17px] leading-[1.55] tracking-[-0.005em] text-(--text-secondary)">
        <span className="text-(--text-primary)">I am a design-first developer.</span>{" "}
        I care deeply about crafting polished, thoughtful interfaces and turning them into
        fully functioning applications. From strong UI decisions to clean implementation,
        I focus on building experiences that not only look good but also work smoothly in
        the real world.
      </p>
    </section>
  );
}
