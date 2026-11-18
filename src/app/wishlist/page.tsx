"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/components/sites/amaali/cart";
import { formatPrice, productBySlug, type AmaaliProduct } from "@/lib/amaali/data";
import { PageHeader } from "@/components/sites/amaali/blog";

// Source wishlist page (YITH WooCommerce Wishlist): a shop_table with
// Remove / thumbnail / Product Name / Unit Price / Stock Status /
// Add-to-cart columns, and the empty state "No products were added to the
// wishlist". Here the rows render the visitor's actual wishlist from the
// shared shop state instead of the source's always-empty snapshot.
export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const [added, setAdded] = useState<string | null>(null);

  const items = wishlist
    .map((slug) => productBySlug(slug))
    .filter((p): p is AmaaliProduct => Boolean(p));

  return (
    <main className="bg-white">
      <PageHeader title="Wishlist" crumb="Wishlist" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        {added ? (
          <p className="mb-6 rounded bg-green-50 px-4 py-3 text-sm text-green-700">
            “{added}” was added to cart.{" "}
            <Link href="/cart" className="font-semibold underline">
              View cart
            </Link>
          </p>
        ) : null}
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 text-left text-sm">
            <thead>
              <tr className="bg-neutral-100 text-xs font-bold uppercase tracking-wider text-neutral-700">
                <th className="px-4 py-3">
                  <span className="sr-only">Remove</span>
                </th>
                <th className="px-4 py-3">
                  <span className="sr-only">Thumbnail</span>
                </th>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Unit Price</th>
                <th className="px-4 py-3">Stock Status</th>
                <th className="px-4 py-3">
                  <span className="sr-only">Add to cart</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr className="border-t border-neutral-200">
                  <td colSpan={6} className="px-4 py-6 text-center text-neutral-600">
                    No products were added to the wishlist
                  </td>
                </tr>
              ) : (
                items.map((product) => {
                  const price = formatPrice(product);
                  const inStock = product.stock == null || product.stock > 0;
                  return (
                    <tr key={product.slug} className="border-t border-neutral-200">
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.slug)}
                          aria-label={`Remove ${product.name} from wishlist`}
                          className="text-xl text-neutral-400 hover:text-red-600"
                        >
                          ×
                        </button>
                      </td>
                      <td className="px-4 py-4">
                        <Link href={`/product/${product.slug}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.image ?? "/sites/amaali/2018/04/ama-ali_furniture-c1.jpg"}
                            alt={product.name}
                            className="h-16 w-16 object-cover"
                          />
                        </Link>
                      </td>
                      <td className="px-4 py-4">
                        <Link
                          href={`/product/${product.slug}`}
                          className="font-semibold text-neutral-800 hover:text-orange-500"
                        >
                          {product.name}
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-neutral-600">
                        {price.regular && price.sale ? (
                          <>
                            <del className="mr-2 text-neutral-400">{price.regular}</del>
                            <span>{price.sale}</span>
                          </>
                        ) : (
                          price.display
                        )}
                      </td>
                      <td className="px-4 py-4 text-neutral-600">{inStock ? "In stock" : "Out of stock"}</td>
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          onClick={() => {
                            addToCart(product.slug);
                            setAdded(product.name);
                          }}
                          className="bg-neutral-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap text-white hover:bg-orange-500"
                        >
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
