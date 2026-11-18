import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "About – Ama-Ali" };

const WHY_CHOOSE_US = [
  {
    title: "Deals & Promotions",
    text: "Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here",
  },
  {
    title: "Transaction Service Agreement",
    text: "Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here",
  },
  {
    title: "Organization & Technical Support",
    text: "Western Australia since 1997. Having established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine experience. We believe in good, authentic design, in order to do what we do best – create meaningful spaces. You won’t find any replica’s here",
  },
];

const TESTIMONIALS = [
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av1.jpg" },
  { name: "Gregor Red", role: "loyal customer", img: "/sites/amaali/2018/04/av2.jpg" },
  { name: "Alexander Green", role: "happy customer", img: "/sites/amaali/2018/04/av3.jpg" },
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av4.jpg" },
  { name: "Vincent Vanilla", role: "happy customer", img: "/sites/amaali/2018/04/av5.jpg" },
];

const QUOTE =
  "Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHeader title="About" crumb="About" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">About</h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
              Ama-Ali has been a family-owned, designer furniture institution in Western Australia since 1997. Having
              established a solid reputation built on honesty and integrity, designFARM offer their customers a genuine
              experience. We believe in good, authentic design, in order to do what we do best – create meaningful
              spaces. You won’t find any replica’s here – we only source original furniture, which is made under
              license. Why? Because we want your furniture to last a lifetime, as well as its story.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit do eiusmod tempor. Dolor sit amet conse ctetur
              adipisicing elit do eiusmod tempor. Lorem ipsum dolor sit amet conse ctetur adipisicing elit do eiusmod
              tempor.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sites/amaali/2018/05/banner-general-1.jpg"
            alt="About Ama-Ali"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sites/amaali/2018/04/market-sale-blog-08.jpg"
            alt="Why choose us"
            loading="lazy"
            className="aspect-[3/2] w-full object-cover md:col-span-1"
          />
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
              Why Choose Us
            </h2>
            <div className="mt-6 space-y-6">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            What people are saying
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={`${t.name}-${i}`} className="border border-neutral-200 p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} loading="lazy" className="mx-auto h-20 w-20 rounded-full object-cover" />
                <blockquote className="mt-4 text-sm leading-relaxed text-neutral-600">“{QUOTE}”</blockquote>
                <figcaption className="mt-4">
                  <p className="font-bold text-neutral-800">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 text-center sm:grid-cols-3">
          {["Gift Card", "Store", "Full Support"].map((label) => (
            <div key={label} className="border border-neutral-200 px-6 py-10">
              <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{label}</h2>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
