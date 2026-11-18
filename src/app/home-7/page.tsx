import {
  BlogRow,
  CategoryTiles,
  HeroSlider,
  ProductRow,
  PromoTile,
  SaleCountdown,
  SectionTitle,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 7 – Ama-Ali" };

// Home 7 (source home-7.html): hero slider, "50% Off Samsung Galaxy" and
// collection promos (Raypa Shop / Parador Store), Mega Sale, bestselling
// products, latest news, brand's show + popular categories, client review.
const TESTIMONIALS = [
  { name: "Abraham Smith", img: "/sites/amaali/2018/04/av1.jpg" },
  { name: "FANBONG PHAM", img: "/sites/amaali/2018/04/av2.jpg" },
  { name: "JAMES DEAN", img: "/sites/amaali/2018/04/av3.jpg" },
];

const QUOTE =
  "Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!";

export default function Home7Page() {
  return (
    <main className="bg-white">
      <HeroSlider />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PromoTile title="50% Off Samsung Galaxy" offer="The Camera. Reimagined" />
          <PromoTile title="Collection" offer="Raypa Shop" />
          <PromoTile title="Collection" offer="Parador Store" />
        </div>

        <section className="mt-14">
          <SectionTitle kicker="Betselling Products" title="Our best sellers" />
          <ProductRow
            items={bySlugs(
              "micro-lapbell-mc4100",
              "bo-play-a1-portable-wireless",
              "xbox-two-wireless-controller",
              "dell-laptop-xps-l50-full-hd",
              "womens-museum-watch",
              "classic-polarized-sunglasses",
            )}
          />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Latest News" title="From the blog" />
          <BlogRow />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Popular Categories" title="brand’s show" />
          <CategoryTiles />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Client Review" title="What people are saying" />
          <div className="grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-neutral-200 p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} loading="lazy" className="mx-auto h-20 w-20 rounded-full object-cover" />
                <blockquote className="mt-4 text-sm leading-relaxed text-neutral-600">“{QUOTE}”</blockquote>
                <figcaption className="mt-4 font-bold text-neutral-800">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
      <SaleCountdown title="Mega Sale" sub="Up to 70 % off" />
    </main>
  );
}
