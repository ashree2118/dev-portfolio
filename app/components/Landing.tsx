import Intro from "./sections/Intro";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import GitHub from "./sections/GitHub";
import Stacks from "./sections/Stacks";
import OpenSource from "./sections/OpenSource";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--page-bg) text-(--text-primary)">
      <div className="side-lines-shell pointer-events-none fixed inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
        <div className="slanted-lines slanted-lines-left" />
        <div className="slanted-lines slanted-lines-right" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[780px] border-l border-r border-(--line-color)">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.012),transparent_18%)]" />

        <div className="relative z-10 mx-auto flex w-full flex-col">
          <main className="px-5 pb-16 md:px-6 md:pb-24">
            <Intro />
            <Stacks />
            <Experience />
            <Projects />           
            <GitHub />            
            <OpenSource />
            <Reviews />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
