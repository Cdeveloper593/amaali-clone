"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

// Source: page_page-accordions.html — three accordion styles. Every panel in
// the source carries the same two-paragraph body text below.
const BODY_1 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.";
const BODY_2 =
  "Poluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup tatem sequi nesciunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti um, totam aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas";

const STYLE_1 = [
  "Consequuntur magni dolores eos qui ratione",
  "Doluptatem accusantium doloremque laudanti um",
  "Poluptatem quia voluptas sit aspernatur",
  "Omnis iste natus error sit voluptatem",
  "Nemo enim ipsam voluptatem quia voluptas",
];

const STYLE_2_3 = [
  "CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE",
  "ENIM LREOM POSTERE STER PORT",
  "TEMPOR INCIDIDUNT UT LABORET DOLORES MAGNA",
  "LABORET DOLORES MAGNA ALIQUA POSTERE",
  "SED DODESUM EIUSRE MOD TEMPOR INCIDIDUN",
];

function AccordionGroup({
  titles,
  groupId,
  open,
  setOpen,
  variant,
}: {
  titles: string[];
  groupId: string;
  open: number | null;
  setOpen: (v: number | null) => void;
  variant: "plain" | "bordered" | "orange";
}) {
  return (
    <div className="space-y-3">
      {titles.map((title, i) => {
        const isOpen = open === i;
        const btnClass =
          variant === "orange"
            ? `flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold uppercase tracking-wider ${isOpen ? "bg-[#f26d21] text-white" : "bg-neutral-100 text-neutral-800 hover:text-[#ff6900]"}`
            : `flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold uppercase tracking-wider text-neutral-800 hover:text-[#ff6900]`;
        return (
          <div key={`${groupId}-${i}`} className="border border-neutral-200">
            <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className={btnClass}>
              {title}
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="border-t border-neutral-200 px-5 py-4">
                <p className="text-sm leading-relaxed text-neutral-600">{BODY_1}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{BODY_2}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function PageAccordions() {
  const [open1, setOpen1] = useState<number | null>(0);
  const [open2, setOpen2] = useState<number | null>(0);
  const [open3, setOpen3] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <PageHeader title="Page Accordions" crumb="Page Accordions" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Accordions</h2>
          <p className="text-sm text-neutral-600">
            Responsive slider with Accordions elements. Touch and CSS3 supported. Next element:{" "}
            <Link href="/page-charts" className="text-[#ff6900] hover:underline">
              Charts
            </Link>
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">STYLE 01</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <AccordionGroup titles={STYLE_1} groupId="s1" open={open1} setOpen={setOpen1} variant="plain" />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Style 2</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <AccordionGroup titles={STYLE_2_3} groupId="s2" open={open2} setOpen={setOpen2} variant="bordered" />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Style 3</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <AccordionGroup titles={STYLE_2_3} groupId="s3" open={open3} setOpen={setOpen3} variant="orange" />
          </div>
        </section>
      </div>
    </main>
  );
}
