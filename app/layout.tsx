import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anushree | Portfolio",
  description: "Portfolio website for Anushree, UI/UX intern and full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const storedTheme = window.localStorage.getItem("theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = storedTheme || (systemPrefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-(--font-inter)">
        {children}
      </body>
    </html>
  );
}
