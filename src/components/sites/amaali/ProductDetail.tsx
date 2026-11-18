"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Scale, ShoppingBasket } from "lucide-react";
import {
  formatPrice,
  productBySlug,
  productDescription,
  type AmaaliProduct,
} from "@/lib/amaali/data";
import { ProductCard } from "./ProductCard";
import { useShop } from "./cart";

// Long description copied verbatim from the source product pages
// (product_campania-table.html / product_micro-lapbell-mc4100.html, tab-description).
const DESCRIPTION_PARAGRAPHS = [
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
];

// The source's single review, verbatim from product_micro-lapbell-mc4100.html
// and product_xbox-two-wireless-controller.html (tab-reviews).
const SOURCE_REVIEW_TEXT =
  "Porem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut ens ad minim veniam eiusmod tempor incid idunt ut labore.";

// Review counts verified in the source HTML: Campania Table has 0 reviews;
// Micro Lapbell MC4100, Xbox Two Wireless Controller and Table Wood Industry
// each have 1. No review count was captured for the other products, so they
// show the source's single generic review as a 1-review placeholder.
const REVIEW_COUNT: Record<string, number> = { "campania-table": 0 };

// Attribute names verified in the source Additional Information tab.
const ATTRIBUTES: Record<string, string[]> = {
  "micro-lapbell-mc4100": ["Color"],
  "xbox-two-wireless-controller": ["Color"],
  "table-wood-industry": ["Color", "Size"],
};

// Grouped children of Table Wood Industry, from the source grouped form on
// product_hats-taibeo-truong-son.html (which 301-redirects to it). Stock
// figures are the grouped page's own: Dell 359 in stock, Xbox 821 in stock.
const GROUPED_CHILDREN = [
  { slug: "dell-laptop-xps-l50-full-hd", stock: 359, variable: true },
  { slug: "xbox-two-wireless-controller", stock: 821, variable: false },
];

function Stars({ filled }: { filled: number }) {
  return (
    <span className="text-[#f5a623]" aria-label={`${filled} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>{i <= filled ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

function QtySelector({ qty, setQty }: { qty: number; setQty: (n: number) => void }) {
  return (
    <span className="inline-flex items-center rounded border border-neutral-300">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="px-3 py-2 text-neutral-700 hover:text-[#f26d21]"
      >
        –
      </button>
      <input
        type="number"
        min={1}
        value={qty}
        aria-label="Quantity"
        onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
        className="w-12 border-x border-neutral-300 py-2 text-center text-sm [appearance:textfield]"
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => setQty(qty + 1)}
        className="px-3 py-2 text-neutral-700 hover:text-[#f26d21]"
      >
        +
      </button>
    </span>
  );
}

export function ProductDetail({
  product,
  related,
}: {
  product: AmaaliProduct;
  related: AmaaliProduct[];
}) {
  const { addToCart, toggleWishlist, toggleCompare, wishlist, compare } = useShop();
  const gallery =
    product.images.length > 0
      ? product.images
      : [product.image ?? "/sites/amaali/2018/04/ama-ali_furniture-c1.jpg"];
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "additional" | "reviews">("description");
  const [variation, setVariation] = useState("");
  const [groupedQty, setGroupedQty] = useState<Record<string, number>>({
    "xbox-two-wireless-controller": 1,
  });
  const [added, setAdded] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);

  const price = formatPrice(product);
  const categoryHref = product.categoryUrl
    ? product.categoryUrl.replace("https://amaali.7uptheme.net", "").replace(/\/$/, "") || "/shop"
    : "/shop";
  const reviewCount = REVIEW_COUNT[product.slug] ?? 1;
  const inWish = wishlist.includes(product.slug);
  const inCompare = compare.includes(product.slug);
  const attributes = ATTRIBUTES[product.slug] ?? [];

  const handleAddToCart = () => {
    addToCart(product.slug, qty);
    setAdded(true);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <Link href="/" className="hover:text-[#f26d21]">
          Home
        </Link>
        {product.category ? (
          <>
            <span className="mx-2">/</span>
            <Link href={categoryHref} className="hover:text-[#f26d21]">
              {product.category}
            </Link>
          </>
        ) : null}
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative border border-neutral-200 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gallery[Math.min(activeImage, gallery.length - 1)]}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
            {product.badge ? (
              <span className="absolute top-3 right-3 rounded-full bg-[#f26d21] px-3 py-1 text-sm font-semibold text-white">
                {product.badge}
              </span>
            ) : null}
          </div>
          {gallery.length > 1 ? (
            <div className="mt-3 flex flex-wrap gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`border-2 ${i === activeImage ? "border-[#f26d21]" : "border-neutral-200"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-20 w-20 object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Stars filled={product.ratingPct == null ? 0 : Math.round(product.ratingPct / 20)} />
            {reviewCount > 0 ? (
              <button
                type="button"
                onClick={() => setTab("reviews")}
                className="text-neutral-500 underline hover:text-[#f26d21]"
              >
                ( {reviewCount} customer review{reviewCount > 1 ? "s" : ""})
              </button>
            ) : (
              <span className="text-neutral-500">(0 reviews)</span>
            )}
          </div>

          <div className="mt-4 text-2xl font-semibold text-neutral-900">
            {price.regular && price.sale ? (
              <>
                <del className="mr-3 font-normal text-neutral-400">{price.regular}</del>
                <ins className="text-[#f26d21] no-underline">{price.sale}</ins>
              </>
            ) : (
              <span className={price.regular ? "text-[#f26d21]" : ""}>{price.display}</span>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-neutral-900">Brand: </span>
            {productDescription}
          </p>

          <p className="mt-3 text-sm font-medium text-emerald-700">
            {product.stock != null ? `${product.stock} in stock` : "In stock"}
          </p>

          {product.type === "external" ? (
            <div className="mt-6">
              <a
                href={`https://amaali.7uptheme.net/product/${product.slug}/`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#f26d21] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d95c14]"
              >
                Buy product
              </a>
              <p className="mt-2 text-xs text-neutral-500">
                External product — sold on the source site.
              </p>
            </div>
          ) : product.type === "variable" ? (
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="amaali-variation" className="mb-1 block text-sm font-semibold text-neutral-900">
                  Select options
                </label>
                <select
                  id="amaali-variation"
                  value={variation}
                  onChange={(e) => setVariation(e.target.value)}
                  className="w-full max-w-xs rounded border border-neutral-300 px-3 py-2 text-sm"
                >
                  <option value="">Choose an option</option>
                  {product.price.min ? <option value={product.price.min}>£{product.price.min}</option> : null}
                  {product.price.max ? <option value={product.price.max}>£{product.price.max}</option> : null}
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <QtySelector qty={qty} setQty={setQty} />
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={variation === ""}
                  className="rounded bg-[#f26d21] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#d95c14] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add to cart
                </button>
              </div>
              {variation === "" ? (
                <p className="text-sm text-neutral-500">Please select an option before adding to cart.</p>
              ) : null}
            </div>
          ) : product.type === "grouped" ? (
            <div className="mt-6">
              <table className="w-full border border-neutral-200 text-sm">
                <tbody>
                  {GROUPED_CHILDREN.map((child) => {
                    const childProduct = productBySlug(child.slug);
                    if (!childProduct) return null;
                    const childPrice = formatPrice(childProduct);
                    return (
                      <tr key={child.slug} className="border-b border-neutral-200 last:border-b-0">
                        <td className="p-3">
                          <Link
                            href={`/product/${child.slug}`}
                            className="font-semibold text-neutral-900 hover:text-[#f26d21]"
                          >
                            {childProduct.name}
                          </Link>
                          <span className="block text-neutral-600">{childPrice.display}</span>
                          <span className="block text-xs text-emerald-700">{child.stock} in stock</span>
                        </td>
                        <td className="p-3 text-right">
                          {child.variable ? (
                            <Link
                              href={`/product/${child.slug}`}
                              className="rounded border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 hover:border-[#f26d21] hover:text-[#f26d21]"
                            >
                              Select options
                            </Link>
                          ) : (
                            <span className="inline-flex items-center gap-2">
                              <span className="text-xs text-neutral-500">Qty:</span>
                              <QtySelector
                                qty={groupedQty[child.slug] ?? 1}
                                setQty={(n) =>
                                  setGroupedQty((prev) => ({ ...prev, [child.slug]: n }))
                                }
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  addToCart(child.slug, groupedQty[child.slug] ?? 1);
                                  setAdded(true);
                                }}
                                className="rounded bg-[#f26d21] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d95c14]"
                              >
                                Add to cart
                              </button>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-2 text-xs text-neutral-500">
                Grouped product — each item is added to the cart individually.
              </p>
            </div>
          ) : (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <label className="sr-only" htmlFor="amaali-qty">
                Quantity
              </label>
              <span className="text-sm text-neutral-600">Qty:</span>
              <QtySelector qty={qty} setQty={setQty} />
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center gap-2 rounded bg-[#f26d21] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#d95c14]"
              >
                <ShoppingBasket size={16} /> Add to cart
              </button>
            </div>
          )}

          {added ? (
            <p className="mt-3 text-sm font-medium text-emerald-700" role="status">
              Product added to cart.
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => toggleWishlist(product.slug)}
              className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-sm ${
                inWish ? "border-[#f26d21] text-[#f26d21]" : "border-neutral-300 text-neutral-700"
              }`}
            >
              <Heart size={16} /> {inWish ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
            <button
              type="button"
              onClick={() => toggleCompare(product.slug)}
              className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-sm ${
                inCompare ? "border-[#f26d21] text-[#f26d21]" : "border-neutral-300 text-neutral-700"
              }`}
            >
              <Scale size={16} /> Compare
            </button>
          </div>

          <div className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
            {product.sku ? (
              <p>
                <span className="font-semibold text-neutral-900">SKU: </span>
                {product.sku}
              </p>
            ) : null}
            {product.category ? (
              <p className="mt-1">
                <span className="font-semibold text-neutral-900">Categories: </span>
                <Link href={categoryHref} className="hover:text-[#f26d21]">
                  {product.category}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-12 border border-neutral-200 bg-white">
        <div className="flex flex-wrap border-b border-neutral-200" role="tablist">
          {(
            [
              ["description", "Description"],
              ["additional", "Additional Information"],
              ["reviews", `Reviews (${reviewCount})`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`px-5 py-3 text-sm font-semibold tracking-wide uppercase ${
                tab === key
                  ? "border-b-2 border-[#f26d21] text-[#f26d21]"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="p-6 text-sm leading-relaxed text-neutral-600">
          {tab === "description" ? (
            <div className="space-y-4">
              {DESCRIPTION_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          ) : tab === "additional" ? (
            attributes.length > 0 ? (
              <table className="w-full max-w-md border border-neutral-200">
                <tbody>
                  {attributes.map((attr) => (
                    <tr key={attr} className="border-b border-neutral-200 last:border-b-0">
                      <th className="w-40 bg-neutral-50 p-3 text-left font-semibold text-neutral-900">
                        {attr}
                      </th>
                      <td className="p-3">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No additional information listed for this product.</p>
            )
          ) : (
            <div>
              <h2 className="text-base font-semibold text-neutral-900">
                {reviewCount} review{reviewCount === 1 ? "" : "s"} for {product.name}
              </h2>
              {reviewCount === 0 ? (
                <p className="mt-3">There are no reviews yet. Be the first to review “{product.name}”.</p>
              ) : (
                <article className="mt-4 border-b border-neutral-200 pb-4">
                  <Stars filled={5} />
                  <p className="mt-1 text-xs text-neutral-500">7uptheme – April 27, 2018</p>
                  <p className="mt-2">{SOURCE_REVIEW_TEXT}</p>
                </article>
              )}
              {reviewSent ? (
                <p className="mt-4 font-medium text-emerald-700" role="status">
                  Thank you — your review has been submitted.
                </p>
              ) : (
                <form
                  className="mt-6 max-w-lg space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewSent(true);
                  }}
                >
                  <h3 className="font-semibold text-neutral-900">Add a review</h3>
                  <p className="text-xs text-neutral-500">
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <div>
                    <label htmlFor="amaali-review-name" className="mb-1 block text-xs font-semibold">
                      Name *
                    </label>
                    <input id="amaali-review-name" required className="w-full rounded border border-neutral-300 px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="amaali-review-email" className="mb-1 block text-xs font-semibold">
                      Email *
                    </label>
                    <input id="amaali-review-email" type="email" required className="w-full rounded border border-neutral-300 px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="amaali-review-text" className="mb-1 block text-xs font-semibold">
                      Your review *
                    </label>
                    <textarea id="amaali-review-text" required rows={4} className="w-full rounded border border-neutral-300 px-3 py-2" />
                  </div>
                  <button type="submit" className="rounded bg-neutral-900 px-5 py-2 text-sm font-semibold text-white hover:bg-[#f26d21]">
                    Submit
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-wide text-neutral-900 uppercase">
            Related products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
