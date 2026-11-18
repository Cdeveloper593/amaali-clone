import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";
import { vendors } from "@/lib/amaali/archives";

export const metadata = { title: "Vendors – Ama-Ali" };

// Source /vendors/ page (WC Vendors list): each vendor's avatar image and a
// button-style name link to their store. Blog-17/18/19/15 are the source's
// own avatar images for vendor/vendor-1/vendor-2/vendor-3 (downloaded in
// Phase A); the "customer" store shows no avatar on the source list, so a
// local blog image stands in for it.
const AVATARS: Record<string, string> = {
  customer: "/sites/amaali/2018/04/market-sale-blog-01.jpg",
  vendor: "/sites/amaali/2018/04/market-sale-blog-17.jpg",
  "vendor-1": "/sites/amaali/2018/04/market-sale-blog-18.jpg",
  "vendor-2": "/sites/amaali/2018/04/market-sale-blog-19.jpg",
  "vendor-3": "/sites/amaali/2018/04/market-sale-blog-15.jpg",
};

export default function VendorsPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Vendors" crumb="Vendors" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <ul className="flex flex-wrap gap-x-16 gap-y-10">
          {vendors.map((vendor) => (
            <li key={vendor.slug} className="text-center">
              <Link href={`/vendors/${vendor.slug}`} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AVATARS[vendor.slug] ?? "/sites/amaali/2018/04/market-sale-blog-01.jpg"}
                  alt={vendor.name}
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px] object-cover"
                />
              </Link>
              <Link
                href={`/vendors/${vendor.slug}`}
                className="mt-4 inline-block bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-500"
              >
                {vendor.name}
              </Link>
              <p className="mt-2 text-sm text-neutral-500">
                {vendor.products.length} Product{vendor.products.length === 1 ? "" : "s"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
