"use client";

import { useState } from "react";
import Link from "next/link";
import { useShop } from "@/components/sites/amaali/cart";
import { PageHeader } from "@/components/sites/amaali/blog";

// The downloaded checkout.html only shows the empty-cart state (WooCommerce
// sends an empty cart back to the cart page), so no payment methods were
// visible in the source file. These are the standard WooCommerce methods.
const PAYMENT_METHODS = [
  { id: "bacs", label: "Direct bank transfer", note: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account." },
  { id: "cheque", label: "Check payments", note: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode." },
  { id: "cod", label: "Cash on delivery", note: "Pay with cash upon delivery." },
  { id: "paypal", label: "PayPal", note: "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account." },
];

const COUNTRIES = ["United Kingdom (UK)", "United States (US)", "Australia", "Canada", "France", "Germany", "Ireland", "Italy", "Netherlands", "Spain"];

function money(n: number): string {
  return `£${n.toFixed(2)}`;
}

export default function CheckoutPage() {
  const { cartDetailed, cartTotal, clearCart } = useShop();
  const [payment, setPayment] = useState("bacs");
  const [placed, setPlaced] = useState<string | null>(null);

  if (placed) {
    return (
      <main className="bg-white">
        <PageHeader title="Checkout" crumb="Checkout" />
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="border border-neutral-200 bg-green-50 px-4 py-6 text-green-700">
            Thank you. Your order has been received.
          </p>
          <p className="mt-6 text-neutral-600">
            Order number: <span className="font-bold text-neutral-800">{placed}</span>
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            This is a local demo — no payment was taken and no order was sent.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <PageHeader title="Checkout" crumb="Checkout" />
      <form
        className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_380px]"
        onSubmit={(e) => {
          e.preventDefault();
          const orderNo = `AM-${Math.floor(100000 + Math.random() * 900000)}`;
          setPlaced(orderNo);
          clearCart();
        }}
      >
        <div>
          <h2 className="border-b-2 border-orange-500 pb-2 text-xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            Billing details
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">First name *</span>
              <input required name="billing_first_name" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">Last name *</span>
              <input required name="billing_last_name" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="mb-1 block font-semibold text-neutral-700">Company name (optional)</span>
              <input name="billing_company" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="mb-1 block font-semibold text-neutral-700">Country / Region *</span>
              <select required name="billing_country" defaultValue={COUNTRIES[0]} className="w-full border border-neutral-300 px-3 py-2">
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="mb-1 block font-semibold text-neutral-700">Street address *</span>
              <input
                required
                name="billing_address_1"
                placeholder="House number and street name"
                className="w-full border border-neutral-300 px-3 py-2"
              />
              <input
                name="billing_address_2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="mt-2 w-full border border-neutral-300 px-3 py-2"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">Town / City *</span>
              <input required name="billing_city" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">Postcode / ZIP *</span>
              <input required name="billing_postcode" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">Phone *</span>
              <input required type="tel" name="billing_phone" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-semibold text-neutral-700">Email address *</span>
              <input required type="email" name="billing_email" className="w-full border border-neutral-300 px-3 py-2" />
            </label>
          </div>

          <h2 className="mt-10 border-b-2 border-orange-500 pb-2 text-xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            Additional information
          </h2>
          <label className="mt-6 block text-sm">
            <span className="mb-1 block font-semibold text-neutral-700">Order notes (optional)</span>
            <textarea
              name="order_comments"
              rows={4}
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full border border-neutral-300 px-3 py-2"
            />
          </label>
        </div>

        <div>
          <h2 className="border-b-2 border-orange-500 pb-2 text-xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            Your order
          </h2>
          <div className="mt-6 border border-neutral-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-100 text-xs font-bold uppercase tracking-wider text-neutral-700">
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartDetailed.length === 0 ? (
                  <tr className="border-t border-neutral-200">
                    <td colSpan={2} className="px-4 py-4 text-neutral-500">
                      Your cart is currently empty.
                    </td>
                  </tr>
                ) : (
                  cartDetailed.map(({ product, qty }) => {
                    const unit = product.price.sale ?? product.price.price ?? product.price.min ?? product.price.regular ?? "0";
                    const line = parseFloat(String(unit).replace(/,/g, "")) * qty;
                    return (
                      <tr key={product.slug} className="border-t border-neutral-200">
                        <td className="px-4 py-3 text-neutral-700">
                          {product.name} <span className="font-bold">× {qty}</span>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold">{money(line)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
              <tfoot>
                <tr className="border-t border-neutral-200">
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Subtotal</th>
                  <td className="px-4 py-3 text-right font-semibold">{money(cartTotal)}</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <th className="px-4 py-3 text-left font-bold text-neutral-800">Total</th>
                  <td className="px-4 py-3 text-right font-bold text-orange-500">{money(cartTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            {PAYMENT_METHODS.map((m) => (
              <label key={m.id} className="block cursor-pointer border border-neutral-200 px-4 py-3 text-sm">
                <span className="flex items-center gap-2 font-semibold text-neutral-800">
                  <input
                    type="radio"
                    name="payment_method"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={() => setPayment(m.id)}
                  />
                  {m.label}
                </span>
                {payment === m.id ? <span className="mt-2 block text-neutral-600">{m.note}</span> : null}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
          >
            Place order
          </button>
          <p className="mt-3 text-xs text-neutral-500">
            Local demo checkout — no payment is taken and no order is sent.
          </p>
        </div>
      </form>
    </main>
  );
}
