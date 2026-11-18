import {
  DeptSidebar,
  HeroSlider,
  NewsletterBand,
  ProductRow,
  PromoTile,
  SectionTitle,
  ServiceStrip,
  } from "@/components/sites/amaali/home-variants";
import { bySlugs } from "@/lib/amaali/data";

export const metadata = { title: "Home 6 – Ama-Ali" };

// Home 6 (source home-6.html): department-sidebar layout with five
// discount shop tiles, a multi-slide hero, Home Deals, bestselling and new
// products, and an "Exciting" promo row.
export default function Home6Page() {
  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">
        <div className="space-y-6">
          <DeptSidebar />
          <div className="space-y-4">
            <PromoTile title="Furniture Shop" offer="Up to 39% Off" />
            <PromoTile title="Sports Shop" offer="Up to 25% Off" />
            <PromoTile title="Jewelry Shop" offer="Up to 50% Off" />
            <PromoTile title="Clothing Shop" offer="Up to 28% Off" />
            <PromoTile title="Accesories Shop" offer="Up to 23% Off" />
          </div>
        </div>
        <div>
          <HeroSlider />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <PromoTile title="Portable Furniture" offer="Upto 80% Off" />
            <PromoTile title="Chromebook Desktop" offer="from: $423.87" />
          </div>
        </div>
      </div>
      <ServiceStrip />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section>
          <SectionTitle kicker="Home Deals" title="Campania Table — Blue Long Sofa — Table Wood Industry" />
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
          <SectionTitle kicker="Bestselling Products" title="Our best sellers" />
          <ProductRow
            items={bySlugs(
              "desk-wood-document",
              "classic-polarized-sunglasses",
              "beauty-skincare-face",
              "chaise-lounge-chandelier",
            )}
            cols={4}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Exciting" title="B&O PLAY A1 Portable Wireless — Samsung Galaxy S6" />
          <ProductRow
            items={bySlugs("bo-play-a1-portable-wireless", "xbox-two-wireless-controller", "micro-lapbell-mc4100")}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="New Products" title="Just arrived" />
          <ProductRow
            items={bySlugs(
              "camouflage-hat",
              "nail-pink-women",
              "womens-museum-watch",
              "scarleton-shoulder-bag-2",
              "malua-outdoor",
              "hats-taibeo-truong-son",
            )}
          />
        </section>
        <p className="mt-14 text-center text-2xl font-bold text-neutral-800">
          99% <span className="text-orange-500">Customer</span> satisfaction
        </p>
      </div>
      <NewsletterBand />
    </main>
  );
}
