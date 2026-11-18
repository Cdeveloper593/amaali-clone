import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Page Charts – Ama-Ali" };

// Source: page_page-charts.html — VC pie charts (data-pie-value / color /
// heading), round pie+doughnut charts (data-vc-values) and bar/line charts
// (labels JAN…MAY). Values, labels and colors below are the source's own.
type Slice = { label: string; value: number; color: string };
type Skill = { label: string; value: number; color: string };

const SMALL: Skill[] = [
  { label: "Design", value: 80, color: "#ebebeb" },
  { label: "Html", value: 90, color: "#5472d2" },
  { label: "CSS", value: 85, color: "#00c1cf" },
  { label: "Jquery", value: 75, color: "#fe6c61" },
  { label: "WordPress", value: 92, color: "#4cadc9" },
  { label: "PHP", value: 82, color: "#50485b" },
];
const MEDIUM: Skill[] = [
  { label: "Design", value: 83, color: "#f7be68" },
  { label: "Html", value: 98, color: "#5aa1e3" },
  { label: "CSS", value: 96, color: "#6dab3c" },
  { label: "Jquery", value: 83, color: "#f4524d" },
];
const LARGE: Skill[] = [
  { label: "Design", value: 83, color: "#f79468" },
  { label: "Html", value: 98, color: "#b97ebb" },
  { label: "CSS", value: 96, color: "#cec2ab" },
  { label: "Design", value: 83, color: "#fe6c61" },
  { label: "Html", value: 98, color: "#5aa1e3" },
];

const ROUND_SETS: { title: string; slices: Slice[] }[] = [
  { title: "Pie - Flat", slices: [ { label: "One", value: 60, color: "#5472d2" }, { label: "Two", value: 40, color: "#fe6c61" } ] },
  { title: "Modern", slices: [ { label: "One", value: 60, color: "#5472d2" }, { label: "Two", value: 40, color: "#fe6c61" } ] },
  { title: "Custom", slices: [ { label: "One", value: 60, color: "#81d742" }, { label: "Two", value: 40, color: "#1e73be" } ] },
  { title: "Pie - Small", slices: [ { label: "One", value: 80, color: "#00c1cf" }, { label: "Two", value: 20, color: "#5472d2" } ] },
  { title: "Pie - Small", slices: [ { label: "One", value: 65, color: "#fe6c61" }, { label: "Two", value: 35, color: "#8d6dc4" } ] },
  { title: "Pie - Small", slices: [ { label: "One", value: 60, color: "#5472d2" }, { label: "Two", value: 40, color: "#fe6c61" } ] },
  { title: "Pie 2 value", slices: [ { label: "One", value: 45, color: "#5472d2" }, { label: "Two", value: 35, color: "#fe6c61" }, { label: "Three", value: 20, color: "#f79468" } ] },
  { title: "Pie 2 value", slices: [ { label: "One", value: 40, color: "#5aa1e3" }, { label: "Two", value: 35, color: "#6dab3c" }, { label: "Three", value: 25, color: "#f4524d" } ] },
  { title: "Medium - 3 values", slices: [ { label: "One", value: 45, color: "#5472d2" }, { label: "Two", value: 35, color: "#fe6c61" }, { label: "Three", value: 20, color: "#f79468" } ] },
  { title: "Medium - 3 values", slices: [ { label: "One", value: 40, color: "#5aa1e3" }, { label: "Two", value: 35, color: "#6dab3c" }, { label: "Three", value: 25, color: "#f4524d" } ] },
  { title: "Large - 4 values", slices: [ { label: "One", value: 20, color: "#5472d2" }, { label: "Two", value: 35, color: "#fe6c61" }, { label: "Three", value: 20, color: "#f79468" }, { label: "Four", value: 25, color: "#6dab3c" } ] },
];

const BAR_MONTHS = ["JAN", " FEB", " MAR", " APR", " MAY"];
const BAR_ONE = [65, 59, 80, 81, 56];
const BAR_TWO = [28, 48, 40, 19, 86];

function Donut({ slices, size = 140, doughnut = false }: { slices: Slice[]; size?: number; doughnut?: boolean }) {
  const total = slices.reduce((a, s) => a + s.value, 0);
  const r = 15.9155;
  // Start offset of each slice = sum of the fractions before it.
  const starts = slices.map((_, i) => slices.slice(0, i).reduce((a, s) => a + (s.value / total) * 100, 0));
  return (
    <svg viewBox="0 0 42 42" width={size} height={size} role="img" aria-label={slices.map((s) => `${s.label} ${s.value}`).join(", ")}>
      {slices.map((s, i) => {
        const frac = (s.value / total) * 100;
        return (
          <circle
            key={s.label + s.color + s.value}
            cx="21"
            cy="21"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={doughnut ? 6 : 10}
            strokeDasharray={`${Math.max(frac - 1, 0.5)} ${100 - Math.max(frac - 1, 0.5)}`}
            strokeDashoffset={25 - starts[i]}
          />
        );
      })}
      {!doughnut ? <circle cx="21" cy="21" r="10.5" fill="white" /> : <circle cx="21" cy="21" r="7" fill="white" />}
    </svg>
  );
}

function SkillRing({ skill }: { skill: Skill }) {
  return (
    <div className="text-center">
      <div
        className="mx-auto flex h-[101px] w-[101px] items-center justify-center rounded-full"
        style={{ background: `conic-gradient(${skill.color} ${skill.value * 3.6}deg, #f3f4f6 0deg)` }}
      >
        <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-700">
          {skill.value}%
        </div>
      </div>
      <h4 className="mt-3 font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{skill.label}</h4>
    </div>
  );
}

function Legend({ slices }: { slices: Slice[] }) {
  return (
    <ul className="mt-3 space-y-1 text-sm text-neutral-600">
      {slices.map((s) => (
        <li key={s.label} className="flex items-center justify-center gap-2">
          <span className="inline-block h-3 w-3" style={{ backgroundColor: s.color }} />
          {s.label} — {s.value}
        </li>
      ))}
    </ul>
  );
}

export default function PageChartsPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Page Charts" crumb="Page Charts" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Charts</h2>
          <p className="text-sm text-neutral-600">
            Display data using visually appealing animated charts and progress bars. Next element:{" "}
            <Link href="/page-messages" className="text-[#ff6900] hover:underline">
              Messages
            </Link>
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Small style</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {SMALL.map((s) => (
              <SkillRing key={s.label} skill={s} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Medium style</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {MEDIUM.map((s) => (
              <SkillRing key={s.label} skill={s} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Large style</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {LARGE.map((s, i) => (
              <SkillRing key={`${s.label}-${i}`} skill={s} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Round Chart</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ROUND_SETS.map((c, i) => (
              <div key={`${c.title}-${i}`} className="text-center">
                <h3 className="mb-4 font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{c.title}</h3>
                <div className="flex justify-center">
                  <Donut slices={c.slices} />
                </div>
                <Legend slices={c.slices} />
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-center text-xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Do - Flat</h3>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ROUND_SETS.slice(0, 6).map((c, i) => (
              <div key={`do-${c.title}-${i}`} className="text-center">
                <h3 className="mb-4 font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{c.title}</h3>
                <div className="flex justify-center">
                  <Donut slices={c.slices} doughnut />
                </div>
                <Legend slices={c.slices} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Line Chart</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {["Bar - Flat", "Bar - Modern", "Bar - Flat - 3 values", "Bar - Modern - 3 values"].map((title) => (
              <div key={title}>
                <h3 className="mb-4 text-center font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{title}</h3>
                <div className="flex h-48 items-end justify-around border-b border-l border-neutral-300 px-4 pb-0 pt-4">
                  {BAR_MONTHS.map((m, i) => (
                    <div key={m} className="flex items-end gap-1">
                      <div className="w-5 bg-[#5472d2]" style={{ height: `${BAR_ONE[i] * 1.6}px` }} title={`One ${BAR_ONE[i]}`} />
                      <div className="w-5 bg-[#00c1cf]" style={{ height: `${BAR_TWO[i] * 1.6}px` }} title={`Two ${BAR_TWO[i]}`} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-around px-4 text-xs text-neutral-500">
                  {BAR_MONTHS.map((m) => (
                    <span key={m}>{m.trim()}</span>
                  ))}
                </div>
                <p className="mt-2 text-center text-xs text-neutral-500">One · Two</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {["Line - Flat", "Line - Modern", "Line - Flat - 3 values", "Line - Modern - 3 values"].map((title) => (
              <div key={title}>
                <h3 className="mb-4 text-center font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{title}</h3>
                <svg viewBox="0 0 300 140" className="w-full border-b border-l border-neutral-300 bg-white" role="img" aria-label={title}>
                  <polyline points="10,60 70,72 130,30 190,22 250,58" fill="none" stroke="#5472d2" strokeWidth="2.5" />
                  <polyline points="10,105 70,80 130,92 190,112 250,35" fill="none" stroke="#00c1cf" strokeWidth="2.5" />
                </svg>
                <div className="flex justify-around text-xs text-neutral-500">
                  {BAR_MONTHS.map((m) => (
                    <span key={m}>{m.trim()}</span>
                  ))}
                </div>
                <p className="mt-2 text-center text-xs text-neutral-500">One · Two · Three</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
