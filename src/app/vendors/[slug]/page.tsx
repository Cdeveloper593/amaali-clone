import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/sites/amaali/blog";
import { ShopGrid } from "@/components/sites/amaali/ShopGrid";
import { vendorBySlug, vendorProducts, vendors } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return vendors.map((vendor) => ({ slug: vendor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vendor = vendorBySlug(slug);
  return { title: vendor ? `${vendor.name} – Ama-Ali` : "Vendor – Ama-Ali" };
}

export default async function VendorStorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vendor = vendorBySlug(slug);
  if (!vendor) notFound();

  return (
    <main className="bg-white">
      <PageHeader title={vendor.name} crumb={vendor.name} />
      <ShopGrid title={vendor.name} items={vendorProducts(vendor)} />
    </main>
  );
}
