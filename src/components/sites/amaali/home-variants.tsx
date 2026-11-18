// Shared building blocks for the Home 2–9 variant pages. All copy, section
// names and product picks come from the matching home-N.html source file;
// images reuse the locally downloaded home-1 slides / category images
// (the variants' own slide files were not downloaded).
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/sites/amaali/ProductCard";
import { BlogCard } from "@/components/sites/amaali/blog";
import {
  blogPosts,
  countdownDate,
  heroSlides,
  popularCategories,
  products,
  type AmaaliProduct,
  bySlugs,
} from "@/lib/amaali/data";

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{kicker}</h2>
      <p className="mt-1 text-sm text-neutral-500">{title}</p>
    </div>
  );
}

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[i];
  const regular = "regular" in slide ? slide.regular : undefined;
  const sale = "sale" in slide ? slide.sale : undefined;
  const extra = "extra" in slide ? slide.extra : undefined;
  return (
    <section className="relative overflow-hidden bg-neutral-100">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">{slide.kicker}</p>
          <h2 className="mt-2 text-4xl font-bold uppercase leading-tight text-neutral-800 [font-family:var(--font-pt-sans-narrow)] lg:text-5xl">
            {slide.title}
          </h2>
          <p className="mt-3 text-lg text-neutral-600">{slide.offer}</p>
          {regular ? (
            <p className="mt-2 text-xl">
              <s className="text-neutral-400">${regular.replace("$", "")}</s>{" "}
              <span className="font-bold text-orange-500">{sale}</span>
            </p>
          ) : null}
          {extra ? <p className="mt-2 text-xl font-bold text-orange-500">{extra}</p> : null}
          <div className="mt-6 flex gap-3">
            <Link
              href="/shop"
              className="bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
            >
              Browse Shop
            </Link>
            <Link
              href="/shop"
              className="border border-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:border-orange-500 hover:text-orange-500"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.localImage} alt={slide.title} className="w-full object-cover" />
      </div>
      <div className="flex justify-center gap-2 pb-6">
        {heroSlides.map((s, n) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-2.5 w-2.5 rounded-full ${n === i ? "bg-orange-500" : "bg-neutral-300"}`}
          />
        ))}
      </div>
    </section>
  );
}

export function ProductRow({ items, cols = 3 }: { items: AmaaliProduct[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}

export function BlogRow() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((p) => (
        <BlogCard
          key={p.slug}
          post={{
            title: p.title,
            slug: p.slug,
            categories: [p.category],
            image: p.image,
            date: "April 23, 2018",
            excerpt: p.excerpt,
          }}
        />
      ))}
    </div>
  );
}

export function CategoryTiles() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {popularCategories.map((c) => (
        <Link key={c.name} href="/shop" className="group border border-neutral-200 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.localImage} alt={c.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-bold uppercase text-neutral-800 group-hover:text-orange-500">{c.name}</h3>
            <p className="mt-1 text-xs text-neutral-500">
              {c.count} Products — From {c.priceRange}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

const DEPARTMENTS = [
  "Mobile & Tablets",
  "Accessories",
  "Computers",
  "Electronics",
  "Home Entertainment",
  "Fashion",
  "Collection",
  "Home & Kitchen",
  "Beauty & Perfumes",
  "Jewelry & Watches",
];

export function DeptSidebar() {
  return (
    <div className="border border-neutral-200 bg-white">
      <h2 className="bg-neutral-800 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white [font-family:var(--font-pt-sans-narrow)]">
        Shop By Department
      </h2>
      <ul className="divide-y divide-neutral-100">
        {DEPARTMENTS.map((d) => (
          <li key={d}>
            <Link href="/shop" className="block px-5 py-3 text-sm text-neutral-700 hover:text-orange-500">
              {d}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceStrip() {
  const items = [
    { title: "Free Shipping", text: "On all orders over £100" },
    { title: "90 days return", text: "If goods have problems" },
    { title: "Secure payment", text: "100% secure payment" },
    { title: "Fast Support", text: "We are here for you 24/7" },
  ];
  return (
    <section className="grid gap-6 border-y border-neutral-200 bg-white py-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.title} className="text-center">
          <h3 className="font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">{s.title}</h3>
          <p className="mt-1 text-sm text-neutral-500">{s.text}</p>
        </div>
      ))}
    </section>
  );
}

export function PromoTile({ title, offer, href = "/shop" }: { title: string; offer: string; href?: string }) {
  return (
    <Link href={href} className="group block border border-neutral-200 bg-neutral-100 p-6 hover:border-orange-500">
      <h3 className="text-xl font-bold uppercase text-neutral-800 group-hover:text-orange-500 [font-family:var(--font-pt-sans-narrow)]">
        {title}
      </h3>
      <p className="mt-1 text-sm text-neutral-600">{offer}</p>
    </Link>
  );
}

export function SaleCountdown({ title = "Mega Sale!", sub = "Up to 70 % off" }: { title?: string; sub?: string }) {
  const target = new Date(countdownDate).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  // The source countdown target (12/12/2020) is in the past; the demo's
  // TimeCircles counter keeps ticking up past it (it read 2161 days in
  // Nov 2026), so show elapsed time since the target, ticking every second.
  const diff = Math.max(0, now - target);
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const sec = Math.floor((diff % 60000) / 1000);
  const cells: [number, string][] = [
    [days, "Days"],
    [hrs, "Hrs"],
    [min, "Min"],
    [sec, "Sec"],
  ];
  return (
    <section className="bg-neutral-800 py-12 text-center text-white">
      <h2 className="text-4xl font-bold uppercase [font-family:var(--font-pt-sans-narrow)]">{title}</h2>
      <p className="mt-2 text-lg uppercase tracking-wider text-orange-400">{sub}</p>
      <div className="mt-6 flex justify-center gap-4">
        {cells.map(([v, label]) => (
          <div key={label} className="rounded-full border border-neutral-500 px-4 py-3">
            <p className="text-2xl font-bold">{v}</p>
            <p className="text-xs uppercase">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/shop" className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:bg-orange-500 hover:text-white">
          Browse Shop
        </Link>
        <Link href="/shop" className="border border-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:border-orange-500 hover:text-orange-400">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export function NewsletterBand() {
  const [done, setDone] = useState(false);
  return (
    <section className="border-t border-neutral-200 bg-neutral-100 py-10 text-center">
      <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Newsletter</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Make sure you dont miss interesting happenings by joining our newsletter program.
      </p>
      {done ? (
        <p className="mt-4 text-sm font-semibold text-green-700">Thank you for subscribing. (Local demo — no email was sent.)</p>
      ) : (
        <form
          className="mx-auto mt-5 flex max-w-md gap-2 px-4"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <input required type="email" placeholder="Your email address" aria-label="Email address" className="flex-1 border border-neutral-300 px-3 py-2 text-sm" />
          <button type="submit" className="bg-neutral-800 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500">
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
