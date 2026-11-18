import {
  BlogRow,
  CategoryTiles,
  HeroSlider,
  ProductRow,
  PromoTile,
  SectionTitle,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 2 – Ama-Ali" };

// Home 2 (source home-2.html): electronics/fashion-led layout — hero slider,
// "50% Off Samsung Galaxy" banner, trending products, "The Camera.
// Reimagined" / "Discount up to 80%" promos, collection deals, bestselling
// products, latest news, brand's show + popular categories.
export default function Home2Page() {
  return (
    <main className="bg-white">
      <HeroSlider />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <PromoTile title="50% Off Samsung Galaxy" offer="The Camera. Reimagined" />
          <PromoTile title="Discount up to 80% of the time only" offer="Watches & Glasses — Cleansing Gel" />
        </div>

        <section className="mt-14">
          <SectionTitle kicker="Trending Products" title="Show top items" />
          <ProductRow
            items={bySlugs(
              "classic-polarized-sunglasses",
              "beauty-skincare-face",
              "camouflage-hat",
              "arm-chair-office-msh34",
              "glass-dining-room-table",
              "table-wood-industry",
            )}
          />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Collection Deals" title="galaxy s9+ — Watches & Glasses" />
          <ProductRow
            items={bySlugs(
              "campania-table",
              "dell-laptop-xps-l50-full-hd",
              "xbox-two-wireless-controller",
              "bo-play-a1-portable-wireless",
            )}
            cols={4}
          />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Betselling Products" title="Our best sellers" />
          <ProductRow
            items={bySlugs(
              "sofa-living-room",
              "blue-long-sofa",
              "desk-wood-document",
              "malua-outdoor",
              "womens-museum-watch",
              "nail-pink-women",
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
      </div>
    </main>
  );
}
