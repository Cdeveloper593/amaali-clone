import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Page Team Member – Ama-Ali" };

// Source: page_page-team-member.html — five "Ama-Ali / our team" styles,
// using the source's own team photos under /sites/amaali/2018/04/ (post11…,
// team1…, rect1…, tm1…, tm5…, downloaded in Phase A).
const BIO_SHORT = "Kdio dignissim qui blandit praesent luptaum zzelenit augue duis e feugait nulla facilen ongaten Claritas est etiam processus";
const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";
const NULLA = "Nulla sed nisl ornare, hendrerit mi in, ultricies libero. Ut turpis urna, blandit vitae magna consectetur";
const NULLA_LONG =
  "Nulla sed nisl ornare, hendrerit mi in, ultricies libero. Ut turpis urna, blandit vitae magna consectetur, malesuada adipiscing sem. Quisque euismod urna enim, vitae pulvinar nunc dapibus sit amet.";

const STYLE_1 = [
  { title: "GREAT ILLUSTRATION", by: "Daryl Toh Liem Zhan", img: "/sites/amaali/2018/04/post11-270x200.png" },
  { title: "MAURIS POSUERE", by: "Bjngthjenha", img: "/sites/amaali/2018/04/post22-270x200.png" },
  { title: "CONCEPT & IDEAS", by: "Purus Eros", img: "/sites/amaali/2018/04/post33-270x200.png" },
  { title: "DONEC TEMPOR LIBERO", by: "Mario Zadel", img: "/sites/amaali/2018/04/post44-270x200.png" },
];
const ROLES = ["Founder & CEO", "Sales Director", "Creative Director", "Marketing Director"];
const STYLE_3_IMGS = [
  "/sites/amaali/2018/04/rect1-270x365.png",
  "/sites/amaali/2018/04/rect2-270x365.png",
  "/sites/amaali/2018/04/rect3-270x365.png",
  "/sites/amaali/2018/04/rect4-270x365.jpg",
];
const STYLE_4 = [
  { name: "Carol Adams", img: "/sites/amaali/2018/04/tm1-270x250.jpg" },
  { name: "SHARON WRIGHT", img: "/sites/amaali/2018/04/tm2-270x250.jpg" },
  { name: "RICHARD PHILLIPS", img: "/sites/amaali/2018/04/tm3-270x250.jpg" },
  { name: "JASON PARKER", img: "/sites/amaali/2018/04/tm4-270x250.jpg" },
];

function TeamHeading({ style }: { style: string }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-widest text-[#ff6900]">Ama-Ali</p>
      <h2 className="mt-1 text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">our team</h2>
      <p className="mt-1 text-sm uppercase text-neutral-500">{style}</p>
    </div>
  );
}

export default function PageTeamMemberPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Page Team Member" crumb="Page Team Member" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Our Teams</h2>
          <p className="text-sm text-neutral-600">
            Flexible feature boxes with optional icons/images and multiple layouts. Next element:{" "}
            <Link href="/page-testimonial" className="text-[#ff6900] hover:underline">
              Testimonial
            </Link>
          </p>
        </div>

        <section className="mt-14">
          <TeamHeading style="style 01" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STYLE_1.map((m) => (
              <article key={m.title} className="border border-neutral-200 p-5 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.title} loading="lazy" className="mx-auto aspect-[27/20] w-full object-cover" />
                <h3 className="mt-4 font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{m.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">by {m.by}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{BIO_SHORT}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <TeamHeading style="style 02" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-neutral-600">{LOREM}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role, i) => (
              <article key={role} className="border border-neutral-200 p-5 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/sites/amaali/2018/04/team${i + 1}-270x270.jpg`} alt="GREAT ILLUSTRATION" loading="lazy" className="mx-auto aspect-square w-full object-cover" />
                <h3 className="mt-4 font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">GREAT ILLUSTRATION</h3>
                <p className="mt-1 text-sm font-semibold text-[#f26d21]">{role}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{LOREM}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <TeamHeading style="style 03" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role, i) => (
              <article key={role} className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={STYLE_3_IMGS[i]} alt="Great Illustration" loading="lazy" className="mx-auto aspect-[27/36] w-full object-cover" />
                <h3 className="mt-4 font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Great Illustration</h3>
                <p className="mt-1 text-sm text-neutral-500">{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <TeamHeading style="style 04" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STYLE_4.map((m) => (
              <article key={m.name} className="border border-neutral-200 p-5 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.name} loading="lazy" className="mx-auto aspect-[27/25] w-full object-cover" />
                <h3 className="mt-4 font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{NULLA}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <TeamHeading style="style 05" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { name: "CAROL ADAMS", img: "/sites/amaali/2018/04/tm5-370x370.jpg" },
              { name: "RICHARD PHILLIPS", img: "/sites/amaali/2018/04/tm6-370x370.jpg" },
            ].map((m) => (
              <article key={m.name} className="border border-neutral-200 p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.name} loading="lazy" className="mx-auto aspect-square w-full max-w-sm object-cover" />
                <h3 className="mt-4 font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{NULLA_LONG}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
