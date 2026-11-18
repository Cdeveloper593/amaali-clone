import {
  CategoryTiles,
  HeroSlider,
  NewsletterBand,
  ProductRow,
  PromoTile,
  SectionTitle,
  ServiceStrip,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 9 – Ama-Ali" };

// Home 9 (source home-9.html): hero ("design furniture" / "50% Off chair
// fanbong"), category tiles (Home & Kitchen, Beauty & Perfumes, Computer,
// Electronics, Fashion), latest / on-sale / most-viewed / recommended rows.
export default function Home9Page() {
  return (
    <main className="bg-white">
      <HeroSlider />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PromoTile title="50% Off chair fanbong" offer="Design furniture" />
          <PromoTile title="Home & Kitchen" offer="Furniture in house" />
          <PromoTile title="Beauty & Perfumes" offer="New collection" />
        </div>

        <section className="mt-14">
          <SectionTitle kicker="Popular Categories" title="Computer — Electronics — Fashion" />
          <CategoryTiles />
        </section>

        <section className="mt-14">
          <SectionTitle kicker="Latest Products" title="New arrivals" />
          <ProductRow
            items={bySlugs(
              "campania-table",
              "blue-long-sofa",
              "table-wood-industry",
              "chaise-lounge-chandelier",
              "glass-dining-room-table",
              "sofa-living-room",
            )}
          />
        </section>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <SectionTitle kicker="On-sale Products" title="Save today" />
            <ProductRow items={bySlugs("classic-polarized-sunglasses", "beauty-skincare-face", "camouflage-hat")} />
          </section>
          <section>
            <SectionTitle kicker="Most Viewed" title="Popular right now" />
            <ProductRow items={bySlugs("micro-lapbell-mc4100", "bo-play-a1-portable-wireless", "xbox-two-wireless-controller")} />
          </section>
        </div>

        <section className="mt-14">
          <SectionTitle kicker="Recommended Products" title="Hand picked for you" />
          <ProductRow
            items={bySlugs(
              "dell-laptop-xps-l50-full-hd",
              "womens-museum-watch",
              "nail-pink-women",
              "scarleton-shoulder-bag-2",
              "malua-outdoor",
              "arm-chair-office-msh34",
            )}
          />
        </section>
      </div>
      <ServiceStrip />
      <NewsletterBand />
    </main>
  );
}
