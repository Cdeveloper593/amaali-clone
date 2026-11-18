import {
  BlogRow,
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

export const metadata = { title: "Home 3 – Ama-Ali" };

// Home 3 (source home-3.html): "Shop By Department" sidebar layout with hero,
// brand promos (Daniel Wellington / Apple Store / Kirk Originals), featured
// and bestselling products, top categories, latest / on-sale / most-viewed /
// recommended product rows, deals of the day and a 99% customer + newsletter band.
export default function Home3Page() {
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
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <PromoTile title="Flat 70% Off" offer="Headphone" />
            <PromoTile title="Flat 30% Off" offer="Table Wood Industry" />
          </div>
        </div>
      </div>
      <ServiceStrip />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section>
          <SectionTitle kicker="Featured Products" title="Show featured items" />
          <ProductRow
            items={bySlugs(
              "campania-table",
              "blue-long-sofa",
              "table-wood-industry",
              "glass-dining-room-table",
              "sofa-living-room",
              "arm-chair-office-msh34",
            )}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Deals Of The Days" title="Hurry up — limited time" />
          <ProductRow
            items={bySlugs("malua-outdoor", "bo-play-a1-portable-wireless", "xbox-two-wireless-controller")}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Bestselling Products" title="Our best sellers" />
          <ProductRow
            items={bySlugs(
              "desk-wood-document",
              "classic-polarized-sunglasses",
              "chaise-lounge-chandelier",
              "womens-museum-watch",
            )}
            cols={4}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Top Categories this Month" title="Shop by category" />
          <ProductRow
            items={bySlugs("sofa-living-room", "campania-table", "blue-long-sofa")}
          />
        </section>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <SectionTitle kicker="Latest Products" title="New arrivals" />
            <ProductRow items={bySlugs("nail-pink-women", "beauty-skincare-face", "camouflage-hat")} />
          </section>
          <section>
            <SectionTitle kicker="On Sale Products" title="Save today" />
            <ProductRow items={bySlugs("scarleton-shoulder-bag-2", "womens-44-mbw-ib-round", "dell-laptop-xps-l50-full-hd")} />
          </section>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <SectionTitle kicker="Most Viewed" title="Popular right now" />
            <ProductRow items={bySlugs("micro-lapbell-mc4100", "hats-taibeo-truong-son", "glass-dining-room-table")} />
          </section>
          <section>
            <SectionTitle kicker="Recommended Products" title="Hand picked for you" />
            <ProductRow items={bySlugs("arm-chair-office-msh34", "table-wood-industry", "malua-outdoor")} />
          </section>
        </div>
        <section className="mt-14">
          <SectionTitle kicker="Latest News" title="From the blog" />
          <BlogRow />
        </section>
        <p className="mt-14 text-center text-2xl font-bold text-neutral-800">
          99% <span className="text-orange-500">Customer</span> satisfaction
        </p>
      </div>
      <SaleCountdown title="Deals Of The Days" sub="Home Deals" />
      <NewsletterBand />
    </main>
  );
}
