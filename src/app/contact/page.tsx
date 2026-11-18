"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sites/amaali/blog";

const FAQS = [
  { q: "At vero eos et accusamus et iusto", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
  { q: "Dignissimos ducimus qui blanditiis", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
  { q: "Raesentium voluptatum deleniti", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
  { q: "Dignissimos ducimus qui blanditiis", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
  { q: "At vero eos et accusamus et iusto", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
  { q: "Raesentium voluptatum deleniti", a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi archi tecto aspernatur assumenda cum inventore labore magnam" },
];

// The source page embeds a Google Maps iframe for Storey Ave, San Francisco,
// CA 94129. Per the brief, no map is embedded here; the address links out to
// Google Maps instead.
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Storey+Ave%2C+San+Francisco%2C+CA+94129";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <PageHeader title="Contact" crumb="Contact" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Contact</h2>
            <dl className="mt-6 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-bold uppercase tracking-wider text-neutral-800">Address:</dt>
                <dd className="text-neutral-600">
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-orange-500 hover:underline">
                    The Company Name Inc. 4320 St Vincent Place, Glasgow, DC 28
                  </a>{" "}
                  —{" "}
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">
                    View on Google Maps
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-neutral-800">Phones:</dt>
                <dd className="text-neutral-600">
                  <a href="tel:8006688999" className="hover:text-orange-500">800-6688-999</a>;{" "}
                  <a href="tel:8008866404" className="hover:text-orange-500">800-8866-404</a>
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-neutral-800">Fax:</dt>
                <dd className="text-neutral-600">800-6969-0044;</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-neutral-800">E-mail:</dt>
                <dd className="text-neutral-600">
                  <a href="mailto:7uptheme@gmail.com" className="hover:text-orange-500">7uptheme@gmail.com</a>
                </dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-wider text-neutral-800">Hot-line:</dt>
                <dd className="text-neutral-600">
                  <a href="tel:0989177556" className="hover:text-orange-500">0989 177 556</a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-neutral-500">
              Find us on the map:{" "}
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">
                Storey Ave, San Francisco, CA 94129 on Google Maps
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Contact Form</h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
                setSent(true);
              }}
            >
              {sent ? (
                <p className="rounded bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thank you for your message. It has been sent. (Local demo — no message was actually sent.)
                </p>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="your-name" placeholder="Name *" aria-label="Name" className="border border-neutral-300 px-3 py-2 text-sm" />
                <input
                  required
                  type="email"
                  name="your-email"
                  placeholder="Email *"
                  aria-label="Email"
                  className="border border-neutral-300 px-3 py-2 text-sm"
                />
              </div>
              <textarea
                required
                name="your-message"
                rows={6}
                placeholder="Message *"
                aria-label="Message"
                className="w-full border border-neutral-300 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">FAQs</h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((f, i) => (
              <div key={`${f.q}-${i}`} className="border border-neutral-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold uppercase tracking-wider text-neutral-800 hover:text-orange-500"
                >
                  {f.q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i ? <p className="border-t border-neutral-200 px-5 py-4 text-sm leading-relaxed text-neutral-600">{f.a}</p> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
