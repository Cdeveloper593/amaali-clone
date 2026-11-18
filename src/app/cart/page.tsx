"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/components/sites/amaali/cart";
import { formatPrice } from "@/lib/amaali/data";
import { PageHeader } from "@/components/sites/amaali/blog";

function money(n: number): string {
  return `£${n.toFixed(2)}`;
}

export default function CartPage() {
  const { cartDetailed, cartTotal, setQty, removeFromCart } = useShop();
  const [updated, setUpdated] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponNote, setCouponNote] = useState("");

  if (cartDetailed.length === 0) {
    return (
      <main className="bg-white">
        <PageHeader title="Cart" crumb="Cart" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <p className="border border-neutral-200 bg-neutral-50 px-4 py-6 text-neutral-600">
            Your cart is currently empty.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
          >
            Return to shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <PageHeader title="Cart" crumb="Cart" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        {updated ? (
          <p className="mb-6 rounded bg-green-50 px-4 py-3 text-sm text-green-700">Cart updated.</p>
        ) : null}
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 text-left text-sm">
            <thead>
              <tr className="bg-neutral-100 text-xs font-bold uppercase tracking-wider text-neutral-700">
                <th className="px-4 py-3">Remove</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartDetailed.map(({ product, qty }) => {
                const price = formatPrice(product);
                const unit = product.price.sale ?? product.price.price ?? product.price.min ?? product.price.regular ?? "0";
                const line = parseFloat(String(unit).replace(/,/g, "")) * qty;
                return (
                  <tr key={product.slug} className="border-t border-neutral-200">
                    <td className="px-4 py-4">
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.slug)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="text-xl text-neutral-400 hover:text-red-600"
                      >
                        ×
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <Link href={`/product/${product.slug}`} className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image ?? "/sites/amaali/2018/04/ama-ali_furniture-c1.jpg"}
                          alt={product.name}
                          className="h-16 w-16 object-cover"
                        />
                        <span className="font-semibold text-neutral-800 hover:text-orange-500">{product.name}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-neutral-600">{price.display}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="border border-neutral-300 px-2 py-1 hover:border-orange-500"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={qty}
                          aria-label="Quantity"
                          onChange={(e) => setQty(product.slug, parseInt(e.target.value, 10) || 1)}
                          className="w-14 border border-neutral-300 px-2 py-1 text-center"
                        />
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="border border-neutral-300 px-2 py-1 hover:border-orange-500"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 font-semibold text-neutral-800">{money(line)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setCouponNote(
                coupon.trim()
                  ? `Coupon “${coupon.trim()}” is not processed in this local demo — no discount was applied.`
                  : "Please enter a coupon code.",
              );
            }}
          >
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              aria-label="Coupon code"
              className="border border-neutral-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="border border-neutral-300 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:border-orange-500 hover:text-orange-500"
            >
              Apply coupon
            </button>
          </form>
          <button
            type="button"
            onClick={() => setUpdated(true)}
            className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
          >
            Update cart
          </button>
        </div>
        {couponNote ? <p className="mt-3 text-sm text-neutral-600">{couponNote}</p> : null}

        <div className="mt-10 max-w-md border border-neutral-200 lg:ml-auto">
          <h2 className="border-b border-neutral-200 bg-neutral-100 px-5 py-3 text-sm font-bold uppercase tracking-wider text-neutral-800">
            Cart totals
          </h2>
          <div className="space-y-3 px-5 py-4 text-sm">
            <p className="flex justify-between">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-semibold">{money(cartTotal)}</span>
            </p>
            <p className="flex justify-between border-t border-neutral-200 pt-3">
              <span className="font-bold text-neutral-800">Total</span>
              <span className="font-bold text-orange-500">{money(cartTotal)}</span>
            </p>
          </div>
          <div className="px-5 pb-5">
            <Link
              href="/checkout"
              className="block bg-orange-500 px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
