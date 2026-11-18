import {
  BlogRow,
  CategoryTiles,
  HeroSlider,
  ProductRow,
  SaleCountdown,
  SectionTitle,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 8 – Ama-Ali" };

// Home 8 (source home-8.html): a compact furniture-led variant — hero
// ("Impressive 2018" / "wood and soft plastic"), Our Products grid, Mega
// Sale, popular categories, latest news and testimonials. The source spells
// the testimonial heading "testimonals"; that spelling is preserved here.
const TESTIMONIALS = [
  { name: "Abraham Smith", img: "/sites/amaali/2018/04/av1.jpg" },
  { name: "FANBONG PHAM", img: "/sites/amaali/2018/04/av2.jpg" },
  { name: "JAMES DEAN", img: "/sites/amaali/2018/04/av3.jpg" },
];

const QUOTE =
  "Lorem enim et luctus hendrelibero mole stie ante, ut fringilla purus eros quisent ipsum. Aliquam bidum. Thank you!";

export default function Home8Page() {
  return (
    <main className="bg-white">
      <HeroSlider />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section>
          <SectionTitle kicker="Our Products" title="Show top items" />
          <ProductRow
            items={bySlugs(
              "campania-table",
              "blue-long-sofa",
              "table-wood-industry",
              "chaise-lounge-chandelier",
              "glass-dining-room-table",
              "sofa-living-room",
              "arm-chair-office-msh34",
              "desk-wood-document",
              "malua-outdoor",
            )}
          />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Popular Categories" title="Our outstanding products" />
          <CategoryTiles />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Latest News" title="From the blog" />
          <BlogRow />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Testimonals" title="What people are saying" />
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
      <SaleCountdown title="mega sale!" sub="up to 70 % off" />
    </main>
  );
}
