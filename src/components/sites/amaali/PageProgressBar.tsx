"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

// Source: page_page-progress-bar.html — every group repeats the same three
// bars (Development 90 / Design 80 / Marketing 70) in different VC styles:
// plain grey, blue with % units, turquoise striped, green with px units and
// violet with "point" units.
type Bar = { label: string; value: number; unit: string };
const BARS: Bar[] = [
  { label: "Development", value: 90, unit: "%" },
  { label: "Design", value: 80, unit: "%" },
  { label: "Marketing", value: 70, unit: "%" },
];
const BARS_PX: Bar[] = [
  { label: "Development", value: 90, unit: "px" },
  { label: "Design", value: 80, unit: "px" },
  { label: "Marketing", value: 70, unit: "px" },
];
const BARS_POINT: Bar[] = [
  { label: "Development", value: 90, unit: "point" },
  { label: "Design", value: 80, unit: "point" },
  { label: "Marketing", value: 70, unit: "point" },
];

function BarGroup({ bars, color, striped, showUnits }: { bars: Bar[]; color: string; striped?: boolean; showUnits: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 100);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div className="space-y-5">
      {bars.map((b) => (
        <div key={b.label}>
          <p className="text-sm text-neutral-700">
            {b.label}
            {showUnits ? <span className="ml-1 text-neutral-500">{`${b.value}${b.unit}`}</span> : null}
          </p>
          <div className="mt-1 h-2.5 w-full bg-neutral-200">
            <div
              className="h-full transition-all duration-1000 ease-out"
              style={{
                width: mounted ? `${b.value}%` : "0%",
                backgroundColor: color,
                backgroundImage: striped
                  ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0 8px, transparent 8px 16px)"
                  : undefined,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageProgressBar() {
  return (
    <main className="bg-white">
      <PageHeader title="Page Progress Bar" crumb="Page Progress Bar" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Progress Bars</h2>
          <p className="text-sm text-neutral-600">
            Display data using visually appealing animated progress bars. Next element:{" "}
            <Link href="/page-team-member" className="text-[#ff6900] hover:underline">
              Team Member
            </Link>
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <BarGroup bars={BARS} color="#888888" showUnits={false} />
          <BarGroup bars={BARS} color="#888888" showUnits={false} />
          <BarGroup bars={BARS} color="#888888" showUnits={false} />
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <BarGroup bars={BARS} color="#5472d2" showUnits />
          <BarGroup bars={BARS} color="#5472d2" showUnits />
          <BarGroup bars={BARS} color="#5472d2" showUnits />
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <BarGroup bars={BARS} color="#00c1cf" striped showUnits />
          <BarGroup bars={BARS} color="#00c1cf" striped showUnits />
          <BarGroup bars={BARS} color="#00c1cf" striped showUnits />
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <BarGroup bars={BARS_PX} color="#6dab3c" striped showUnits />
          <BarGroup bars={BARS_POINT} color="#8d6dc4" showUnits />
        </div>
      </div>
    </main>
  );
}
