import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Page Testimonial – Ama-Ali" };

// Source: page_page-testimonial.html — a "testimonials" slider block (quotes
// credited to NVD india, dated Dec 07 2017; slider photos are the source's
// t11…t55-150x150.jpg, downloaded in Phase A) followed by the "What people
// are saying" grid (same quotes/names as the About page, avatars av1.jpg,
// av3.jpg, av3.jpg, av4.jpg, av5.jpg, av6.jpg).
const QUOTE_A =
  "Congue libero Aenean risus nibh nibh sed laoreet Aenean metus convallis. Quis ac Pellentesque ullamcorper bemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiquia consequu..";
const QUOTE_B =
  "Quis ac Pellentesque ullamcorper bemo. Congue libero Aenean risus nibh nibh sed laoreet Aenean metus convallis. enim ipsam voluptatem quia consequu voluptas sit aspernatur aut odit aut fugiquia ..";

const SLIDER: { quote: string; role: string; img: string }[] = [
  { quote: QUOTE_A, role: "Design 7uptheme", img: "/sites/amaali/2018/04/t11-150x150.jpg" },
  { quote: QUOTE_B, role: "Ceo 7up", img: "/sites/amaali/2018/04/t22-150x150.jpg" },
  { quote: QUOTE_A, role: "NVD india", img: "/sites/amaali/2018/04/t33-150x150.jpg" },
  { quote: QUOTE_B, role: "NVD india", img: "/sites/amaali/2018/04/t44-150x150.jpg" },
  { quote: QUOTE_A, role: "NVD india", img: "/sites/amaali/2018/04/t55-150x150.jpg" },
];

const SAYING_QUOTE =
  "Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!";
const SAYING: { name: string; role: string; img: string }[] = [
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av1.jpg" },
  { name: "Gregor Red", role: "loyal customer", img: "/sites/amaali/2018/04/av3.jpg" },
  { name: "Alexander Green", role: "happy customer", img: "/sites/amaali/2018/04/av3.jpg" },
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av4.jpg" },
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av5.jpg" },
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av6.jpg" },
];

export default function PageTestimonialPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Page Testimonial" crumb="Page Testimonial" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Testimonial</h2>
          <p className="text-sm text-neutral-600">
            Flexible feature boxes with optional icons/images and multiple layouts. Next element:{" "}
            <Link href="/page-accordions" className="text-[#ff6900] hover:underline">
              Accordions
            </Link>
          </p>
        </div>

        <section className="mt-12">
          <p className="text-center text-sm uppercase tracking-widest text-[#ff6900]">testimonials</p>
          <h2 className="mt-2 text-center text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SLIDER.map((t, i) => (
              <figure key={i} className="border border-neutral-200 p-6">
                <blockquote className="text-sm leading-relaxed text-neutral-600">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt="NVD india" loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-neutral-800">{t.role}</p>
                    <p className="text-sm text-neutral-500">NVD india</p>
                    <p className="text-xs text-neutral-400">Dec 07 2017</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            What people are saying
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAYING.map((t, i) => (
              <figure key={`${t.name}-${i}`} className="border border-neutral-200 p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} loading="lazy" className="mx-auto h-20 w-20 rounded-full object-cover" />
                <blockquote className="mt-4 text-sm leading-relaxed text-neutral-600">“{SAYING_QUOTE}”</blockquote>
                <figcaption className="mt-4">
                  <p className="font-bold text-neutral-800">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
