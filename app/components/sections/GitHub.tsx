const CONTRIBUTIONS_URL = "https://github.com/users/ashree2118/contributions";

type DayPoint = {
  date: string;
  level: number;
};

async function getContributionsData() {
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": "portfolio-site",
      },
    });

    const html = await response.text();
    const match =
      html.match(/id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s*contributions/i) ??
      html.match(/>\s*([\d,]+)\s*contributions in the last year/i);
    const count = match?.[1] ?? "729";
    const points: DayPoint[] = [];
    const cellRegex = /<td[^>]*class="ContributionCalendar-day"[^>]*>/g;
    let cellMatch: RegExpExecArray | null = cellRegex.exec(html);
    while (cellMatch) {
      const cellTag = cellMatch[0];
      const dateMatch = cellTag.match(/data-date="([^"]+)"/);
      const levelMatch = cellTag.match(/data-level="([^"]+)"/);
      if (dateMatch?.[1]) {
        points.push({
          date: dateMatch[1],
          level: Number(levelMatch?.[1] ?? "0") || 0,
        });
      }
      cellMatch = cellRegex.exec(html);
    }

    return { points, count };
  } catch {
    return { points: [] as DayPoint[], count: "729" };
  }
}

export default async function GitHub() {
  const { points, count } = await getContributionsData();

  const levelByDate = new Map(points.map((p) => [p.date, p.level]));

  const sortedDates = [...levelByDate.keys()].sort();
  const firstDate = sortedDates[0];
  const lastDate = sortedDates[sortedDates.length - 1];

  const weeks: { month: string; cells: { date: string; level: number }[] }[] = [];
  if (firstDate && lastDate) {
    const start = new Date(`${firstDate}T00:00:00`);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(`${lastDate}T00:00:00`);

    const cursor = new Date(start);
    while (cursor <= end) {
      const month = cursor.toLocaleString("en-US", { month: "short" });
      const cells: { date: string; level: number }[] = [];
      for (let d = 0; d < 7; d += 1) {
        const day = new Date(cursor);
        day.setDate(cursor.getDate() + d);
        const iso = day.toISOString().slice(0, 10);
        cells.push({ date: iso, level: levelByDate.get(iso) ?? 0 });
      }
      weeks.push({ month, cells });
      cursor.setDate(cursor.getDate() + 7);
    }
  }

  const monthIndexes = new Map<string, number>();
  weeks.forEach((week, idx) => {
    if (!monthIndexes.has(week.month)) {
      monthIndexes.set(week.month, idx);
    }
  });
  const monthLabels = [...monthIndexes.entries()];

  return (
    <section id="github" className="border-t border-dashed border-(--line-color) py-8">
      <p className="text-[14px] text-(--text-muted)">
        Github contributions
      </p>

      <div className="mt-4">
        <div className="flex justify-center">
          <div className="relative w-fit">
            <div className="relative mb-2 h-5 text-[12px] text-(--text-muted)">
              {monthLabels.map(([month, idx]) => (
                <span
                  key={`${month}-${idx}`}
                  className="absolute"
                  style={{ left: `${idx * 11}px` }}
                >
                  {month}
                </span>
              ))}
            </div>

            <div className="flex gap-[2px]">
              {weeks.map((week, weekIdx) => (
                <div key={`${week.month}-${weekIdx}`} className="flex flex-col gap-[2px]">
                  {week.cells.map((cell) => {
                    const color =
                      cell.level === 0
                        ? "var(--graph-level-0)"
                        : cell.level === 1
                          ? "var(--graph-level-1)"
                          : cell.level === 2
                            ? "var(--graph-level-2)"
                            : cell.level === 3
                              ? "var(--graph-level-3)"
                              : "var(--graph-level-4)";
                    return (
                      <span
                        key={cell.date}
                        className="h-[9px] w-[9px] rounded-[2px]"
                        style={{ backgroundColor: color }}
                        title={cell.date}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-3 flex max-w-[620px] items-center justify-between text-[13px] text-(--text-soft)">
          <p>{count} contributions in the last year</p>
          <div className="flex items-center gap-2">
            <span className="text-(--text-muted)">Less</span>
            <div className="flex gap-1">
              {[
                "var(--graph-level-0)",
                "var(--graph-level-1)",
                "var(--graph-level-2)",
                "var(--graph-level-3)",
                "var(--graph-level-4)",
              ].map((color) => (
                <span
                  key={color}
                  className="h-[8px] w-[12px] rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-(--text-muted)">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
