"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

// The theme lives on <html data-theme>, set before paint by the script in layout.tsx.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function ThemeIcon({ theme }: { theme: Theme }) {
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

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-(--icon-border) bg-(--icon-surface) text-(--text-primary) transition hover:-translate-y-0.5 hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-muted)"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <ThemeIcon theme={theme} />
    </button>
  );
}
