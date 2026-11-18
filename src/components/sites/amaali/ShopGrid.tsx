"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Grid2x2, List, Search, ShoppingBasket, Heart, Scale } from "lucide-react";
import { products, sortValue, type AmaaliProduct } from "@/lib/amaali/data";
import { ProductCard } from "./ProductCard";
import { useShop } from "./cart";

export type ShopSort =
  | "popularity"
  | "rating"
  | "newness"
  | "price-asc"
  | "price-desc";

export type ShopView = "grid" | "list";

const SORT_OPTIONS: { value: ShopSort; label: string }[] = [
  { value: "popularity", label: "Sort by popularity" },
  { value: "rating", label: "Sort by average rating" },
  { value: "newness", label: "Sort by newness" },
  { value: "price-asc", label: "Sort by price: low to high" },
  { value: "price-desc", label: "Sort by price: high to low" },
];

// Sidebar values taken verbatim from the source shop page. data.ts carries no
// per-product color/size attributes, so these two widgets are presentational
// lists (not filters) — see the report for details.
const SOURCE_COLORS = ["Black", "Blue", "Gray", "Green", "Red"];
const SOURCE_SIZES = ["2XL", "L", "M", "S", "XL"];

const GRID_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  6: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
};

function ListRow({ product }: { product: AmaaliProduct }) {
  const { addToCart, toggleWishlist, toggleCompare, wishlist, compare } = useShop();
  const pr = product.price;
  const img = product.image ?? "/sites/amaali/2018/04/ama-ali_furniture-c1.jpg";
  return (
    <article className="flex flex-col gap-4 border border-neutral-200 bg-white p-4 sm:flex-row">
      <Link href={`/product/${product.slug}`} className="relative block w-full shrink-0 sm:w-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={product.name} loading="lazy" className="h-48 w-full object-cover sm:h-44" />
        {product.badge ? (
          <span className="absolute top-2 right-2 rounded-full bg-[#f26d21] px-2 py-0.5 text-xs font-semibold text-white">
            {product.badge}
          </span>
        ) : null}
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        {product.category ? (
          <span className="text-xs tracking-wide text-neutral-500 uppercase">{product.category}</span>
        ) : null}
        <h3 className="mt-1 text-lg font-semibold text-neutral-900">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <div className="mt-2 text-base font-semibold text-neutral-900">
          {pr.regular && pr.sale ? (
            <>
              <del className="mr-2 font-normal text-neutral-400">£{pr.regular}</del>
              <span className="text-[#f26d21]">£{pr.sale}</span>
            </>
          ) : pr.min && pr.max ? (
            <span>
              £{pr.min} – £{pr.max}
            </span>
          ) : pr.price ? (
            <span>£{pr.price}</span>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => addToCart(product.slug)}
            className="inline-flex items-center gap-2 rounded bg-[#f26d21] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d95c14]"
          >
            <ShoppingBasket size={16} /> Add to cart
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product.slug)}
            className={`inline-flex items-center gap-2 rounded border px-3 py-2 text-sm ${
              wishlist.includes(product.slug)
                ? "border-[#f26d21] text-[#f26d21]"
                : "border-neutral-300 text-neutral-700"
            }`}
          >
            <Heart size={16} /> Wishlist
          </button>
          <button
            type="button"
            onClick={() => toggleCompare(product.slug)}
            className={`inline-flex items-center gap-2 rounded border px-3 py-2 text-sm ${
              compare.includes(product.slug)
                ? "border-[#f26d21] text-[#f26d21]"
                : "border-neutral-300 text-neutral-700"
            }`}
          >
            <Scale size={16} /> Compare
          </button>
        </div>
      </div>
    </article>
  );
}

export function ShopGrid({
  columns = 3,
  defaultView = "grid",
  title = "Shop",
  items,
  sidebar = "left",
}: {
  columns?: 2 | 3 | 4 | 5 | 6;
  defaultView?: ShopView;
  title?: string;
  items?: AmaaliProduct[];
  sidebar?: "left" | "right";
}) {
  const allItems = items ?? products;
  const [sort, setSort] = useState<ShopSort>("popularity");
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<ShopView>(defaultView);
  const [minDraft, setMinDraft] = useState("");
  const [maxDraft, setMaxDraft] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of allItems) {
      const c = p.category ?? "Uncategorized";
      map.set(c, (map.get(c) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [allItems]);

  const priceBounds = useMemo(() => {
    const values = allItems.map(sortValue);
    return { min: Math.min(...values), max: Math.max(...values) };
  }, [allItems]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = allItems.filter((p) => {
      if (category !== "All" && (p.category ?? "Uncategorized") !== category) return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      const v = sortValue(p);
      if (minPrice !== null && v < minPrice) return false;
      if (maxPrice !== null && v > maxPrice) return false;
      return true;
    });
    switch (sort) {
      case "rating":
        list = [...list].sort((a, b) => (b.ratingPct ?? 0) - (a.ratingPct ?? 0));
        break;
      case "newness":
        list = [...list].reverse();
        break;
      case "price-asc":
        list = [...list].sort((a, b) => sortValue(a) - sortValue(b));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => sortValue(b) - sortValue(a));
        break;
      case "popularity":
      default:
        break;
    }
    return list;
  }, [sort, category, search, minPrice, maxPrice, allItems]);

  const applyPriceFilter = () => {
    setMinPrice(minDraft.trim() === "" ? null : Number(minDraft));
    setMaxPrice(maxDraft.trim() === "" ? null : Number(maxDraft));
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <Link href="/" className="hover:text-[#f26d21]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{title}</span>
      </nav>
      <h1 className="mt-2 text-3xl font-bold tracking-wide text-neutral-900 uppercase">{title}</h1>

      <div className={`mt-8 flex flex-col gap-8 lg:flex-row${sidebar === "right" ? " lg:flex-row-reverse" : ""}`}>
        <aside className="w-full shrink-0 lg:w-64">
          <div className="border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-bold tracking-widest text-neutral-900 uppercase">
              Price Filter
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <label className="sr-only" htmlFor="amaali-min-price">
                Min price
              </label>
              <input
                id="amaali-min-price"
                type="number"
                min={0}
                value={minDraft}
                onChange={(e) => setMinDraft(e.target.value)}
                placeholder={`£${priceBounds.min.toFixed(2)}`}
                className="w-full rounded border border-neutral-300 px-2 py-1.5 text-sm"
              />
              <span className="text-neutral-400">–</span>
              <label className="sr-only" htmlFor="amaali-max-price">
                Max price
              </label>
              <input
                id="amaali-max-price"
                type="number"
                min={0}
                value={maxDraft}
                onChange={(e) => setMaxDraft(e.target.value)}
                placeholder={`£${priceBounds.max.toFixed(2)}`}
                className="w-full rounded border border-neutral-300 px-2 py-1.5 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={applyPriceFilter}
              className="mt-3 rounded bg-neutral-900 px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#f26d21]"
            >
              Filter
            </button>
            {minPrice !== null || maxPrice !== null ? (
              <button
                type="button"
                onClick={() => {
                  setMinPrice(null);
                  setMaxPrice(null);
                  setMinDraft("");
                  setMaxDraft("");
                }}
                className="mt-2 ml-2 text-sm text-neutral-500 underline hover:text-[#f26d21]"
              >
                Clear
              </button>
            ) : null}
          </div>

          <div className="mt-6 border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-bold tracking-widest text-neutral-900 uppercase">
              Categories
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setCategory("All")}
                  className={`hover:text-[#f26d21] ${category === "All" ? "font-semibold text-[#f26d21]" : "text-neutral-700"}`}
                >
                  All Categories ({allItems.length})
                </button>
              </li>
              {categories.map(([name, count]) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => setCategory(name)}
                    className={`hover:text-[#f26d21] ${category === name ? "font-semibold text-[#f26d21]" : "text-neutral-700"}`}
                  >
                    {name} ({count})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-bold tracking-widest text-neutral-900 uppercase">Color</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {SOURCE_COLORS.map((c) => (
                <li key={c}>
                  {c} (1)
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-bold tracking-widest text-neutral-900 uppercase">Size</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {SOURCE_SIZES.map((s) => (
                <li key={s}>
                  {s} (1)
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 border border-neutral-200 bg-white p-3">
            <div className="relative min-w-44 flex-1">
              <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400" />
              <label className="sr-only" htmlFor="amaali-search">
                Search products
              </label>
              <input
                id="amaali-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded border border-neutral-300 py-2 pr-3 pl-9 text-sm"
              />
            </div>
            <label className="sr-only" htmlFor="amaali-sort">
              Sort products
            </label>
            <select
              id="amaali-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as ShopSort)}
              className="rounded border border-neutral-300 px-2 py-2 text-sm"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <div className="flex overflow-hidden rounded border border-neutral-300" role="group" aria-label="View">
              <button
                type="button"
                onClick={() => setView("grid")}
                aria-pressed={view === "grid"}
                aria-label="Grid view"
                className={`px-3 py-2 ${view === "grid" ? "bg-neutral-900 text-white" : "bg-white text-neutral-700"}`}
              >
                <Grid2x2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                aria-label="List view"
                className={`px-3 py-2 ${view === "list" ? "bg-neutral-900 text-white" : "bg-white text-neutral-700"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            Showing 1–{filtered.length} of {allItems.length} results
          </p>

          {filtered.length === 0 ? (
            <p className="mt-6 border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
              No products were found matching your selection.
            </p>
          ) : view === "grid" ? (
            <div className={`mt-4 grid grid-cols-1 gap-6 ${GRID_COLS[columns]}`}>
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {filtered.map((p) => (
                <ListRow key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
