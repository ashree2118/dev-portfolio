// Small explanatory diagrams drawn with the site's own lines and tokens,
// so they follow the theme and reflow to a vertical layout on phones.

function DiagramFrame({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="py-3">
      <div className="rounded-lg border border-(--card-border) bg-(--panel-elevated) px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </div>
      <figcaption className="mt-3 text-xs leading-5 text-(--text-muted)">{caption}</figcaption>
    </figure>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`size-4 shrink-0 text-(--text-muted) ${className}`}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

const states = ["Not started", "Off track", "Incorrect submission", "Partially solved"];

const steps = [
  { label: "Hint", note: "starts here" },
  { label: "Direction to think" },
  { label: "Algorithm and pseudocode" },
  { label: "Full code", note: "only when asked", optional: true },
];

/** Every student state enters through Guide Me, and help climbs one step at a time. */
export function HintLadder() {
  return (
    <DiagramFrame caption="Whatever state a student is in, help starts small and only reaches the full code when they ask for it.">
      <div
        role="img"
        aria-label="Four student states, not started, off track, incorrect submission and partially solved, all lead to Guide Me. Help then steps up from a hint, to a direction to think, to the algorithm and pseudocode, and to the full code only when the student asks."
        className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1.15fr] sm:gap-5"
      >
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
          {states.map((state) => (
            <li
              key={state}
              className="rounded-md border border-(--card-border) px-3 py-2 text-xs leading-4 text-(--text-secondary)"
            >
              {state}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Arrow className="rotate-90 sm:rotate-0" />
          <span className="rounded-full border border-(--chip-border) bg-(--chip-bg) px-3 py-1.5 text-xs font-medium whitespace-nowrap text-(--text-primary)">
            Guide Me
          </span>
          <Arrow className="rotate-90 sm:rotate-0" />
        </div>

        {/* Bottom-up on wide screens so it reads as a ladder; top-down on phones. */}
        <ol className="relative flex flex-col gap-2 sm:flex-col-reverse">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className={`flex items-baseline justify-between gap-3 rounded-md border px-3 py-2 text-xs leading-4 ${
                step.optional
                  ? "border-dashed border-(--chip-border) text-(--text-muted)"
                  : index === 0
                    ? "border-(--chip-border) bg-(--chip-bg) text-(--text-primary)"
                    : "border-(--card-border) text-(--text-secondary)"
              }`}
            >
              <span>
                <span className="mr-2 tabular-nums text-(--text-muted)">{index + 1}</span>
                {step.label}
              </span>
              {step.note && <span className="text-[11px] text-(--text-muted)">{step.note}</span>}
            </li>
          ))}
        </ol>
      </div>
    </DiagramFrame>
  );
}

const before = ["Discover", "Join"];
const after = ["Who's going", "Group chat", "Meet up", "Check-in"];

function JourneyGroup({ title, steps, strongFirst = false }: { title: string; steps: string[]; strongFirst?: boolean }) {
  return (
    <div className="min-w-0">
      <p className="mb-2.5 text-[11px] leading-4 text-(--text-muted)">{title}</p>
      <ol className="flex flex-col items-stretch gap-1 sm:flex-row sm:items-center sm:gap-1.5">
        {steps.map((label, index) => (
          <li key={label} className="flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5">
            {index > 0 && <Arrow className="rotate-90 sm:rotate-0" />}
            <span
              className={`w-full rounded-md border px-2.5 py-2 text-center text-xs leading-4 whitespace-nowrap sm:w-auto ${
                strongFirst && index === 0
                  ? "border-(--chip-border) bg-(--chip-bg) text-(--text-primary)"
                  : "border-(--card-border) text-(--text-secondary)"
              }`}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** The ezMeetup journey keeps going after the point where an event listing ends. */
export function JourneyPastJoin() {
  return (
    <DiagramFrame caption="An event listing ends at joining. ezMeetup carries on to who's going, the chat, meeting up and getting home safe.">
      <div
        role="img"
        aria-label="Journey: discover, then join. A typical event listing ends here. ezMeetup keeps going: see who's going on the map, the group chat, meeting up, and the safety check-in."
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3"
      >
        <JourneyGroup title="Event listing" steps={before} />
        <span aria-hidden className="border-t border-dashed border-(--chip-border) sm:h-14 sm:self-end sm:border-t-0 sm:border-l" />
        <JourneyGroup title="ezMeetup keeps going" steps={after} strongFirst />
      </div>
    </DiagramFrame>
  );
}
