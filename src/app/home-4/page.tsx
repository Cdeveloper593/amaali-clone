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

export const metadata = { title: "Home 4 – Ama-Ali" };

// Home 4 (source home-4.html): department-sidebar layout with a furniture
// feature, hand-picked products, flash deals and smart-accessories rows,
// plus category tiles (Clothing, Mobile, Glasses, Jewelry, Home).
export default function Home4Page() {
  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">
        <div className="space-y-6">
          <DeptSidebar />
          <PromoTile title="Furniture" offer="Hand-picked Products" />
          <PromoTile title="Clothing" offer="New season" />
          <PromoTile title="Mobile" offer="Smart Accessories" />
        </div>
        <div>
          <HeroSlider />
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <PromoTile title="Glasses" offer="Glasses Women collection" />
            <PromoTile title="Jewelry" offer="Fine jewelry" />
            <PromoTile title="Home" offer="Home Depot" />
          </div>
        </div>
      </div>
      <ServiceStrip />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <section>
          <SectionTitle kicker="Hand-picked Products" title="Chosen for you" />
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
          <SectionTitle kicker="Flash Deals" title="Electronics — limited time" />
          <ProductRow
            items={bySlugs(
              "micro-lapbell-mc4100",
              "bo-play-a1-portable-wireless",
              "xbox-two-wireless-controller",
              "dell-laptop-xps-l50-full-hd",
            )}
            cols={4}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Smart Accessories: Home Depot" title="Apple Accessories — Laptop, PC" />
          <ProductRow
            items={bySlugs(
              "classic-polarized-sunglasses",
              "camouflage-hat",
              "beauty-skincare-face",
              "nail-pink-women",
              "womens-museum-watch",
              "scarleton-shoulder-bag-2",
            )}
          />
        </section>
        <section className="mt-14">
          <SectionTitle kicker="Fashion" title="H&M Accessories — Hat, cones" />
          <ProductRow
            items={bySlugs("hats-taibeo-truong-son", "womens-44-mbw-ib-round", "desk-wood-document")}
          />
        </section>
      </div>
      <NewsletterBand />
    </main>
  );
}
