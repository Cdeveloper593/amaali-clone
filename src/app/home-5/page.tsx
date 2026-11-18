import {
  DeptSidebar,
  HeroSlider,
  NewsletterBand,
  ProductRow,
  PromoTile,
  SaleCountdown,
  SectionTitle,
  ServiceStrip,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 5 – Ama-Ali" };

// Home 5 (source home-5.html): department-sidebar layout with brand promos
// (Daniel Wellington / Apple Store / Kirk Originals), Home Deals, Deals of
// the week, bestselling and featured products, top categories and the
// latest / on-sale / most-viewed / recommended rows.
export default function Home5Page() {
  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">
        <div className="space-y-6">
          <DeptSidebar />
          <PromoTile title="Daniel Wellington" offer="DW – Watch" />
          <PromoTile title="Apple Store" offer="IPhone-X" />
          <PromoTile title="Kirk Originals" offer="Sunglasses" />
        </div>
        <div>
          <HeroSlider />
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <PromoTile title="furniture" offer="Furniture in house" />
            <PromoTile title="Smartphone" offer="IPhone-x" />
            <PromoTile title="fashion" offer="Dress Collection" />
          </div>
        </div>
      </div>
      <ServiceStrip />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section>
          <SectionTitle kicker="Home Deals" title="B&O PLAY A1 Portable Wireless — Samsung Galaxy S6" />
          <ProductRow
            items={bySlugs("bo-play-a1-portable-wireless", "xbox-two-wireless-controller", "micro-lapbell-mc4100")}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Deals of the weenk" title="Swiss Quartz Stainless Steel — Martens 1490 Boot — Hurry Up" />
          <ProductRow
            items={bySlugs("womens-museum-watch", "camouflage-hat", "classic-polarized-sunglasses")}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Bestselling Products" title="Our best sellers" />
          <ProductRow
            items={bySlugs(
              "blue-long-sofa",
              "sofa-living-room",
              "desk-wood-document",
              "classic-polarized-sunglasses",
              "chaise-lounge-chandelier",
              "beauty-skincare-face",
            )}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Featured Products" title="Show featured items" />
          <ProductRow
            items={bySlugs("campania-table", "table-wood-industry", "malua-outdoor", "glass-dining-room-table")}
            cols={4}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Top Categories this Month" title="Sports and Health" />
          <ProductRow items={bySlugs("arm-chair-office-msh34", "sofa-living-room", "campania-table")} />
        </section>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <SectionTitle kicker="Latest Products" title="New arrivals" />
            <ProductRow items={bySlugs("nail-pink-women", "scarleton-shoulder-bag-2", "womens-44-mbw-ib-round")} />
          </section>
          <section>
            <SectionTitle kicker="On-sale Products" title="Save today" />
            <ProductRow items={bySlugs("blue-long-sofa", "desk-wood-document", "hats-taibeo-truong-son")} />
          </section>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <SectionTitle kicker="Most Viewed" title="Popular right now" />
            <ProductRow items={bySlugs("dell-laptop-xps-l50-full-hd", "bo-play-a1-portable-wireless", "micro-lapbell-mc4100")} />
          </section>
          <section>
            <SectionTitle kicker="Recommended Products" title="Hand picked for you" />
            <ProductRow items={bySlugs("chaise-lounge-chandelier", "malua-outdoor", "table-wood-industry")} />
          </section>
        </div>
        <p className="mt-14 text-center text-2xl font-bold text-neutral-800">
          99% <span className="text-orange-500">Customer</span> satisfaction
        </p>
      </div>
      <SaleCountdown title="Deals of the weenk" sub="Hurry Up" />
      <NewsletterBand />
    </main>
  );
}
