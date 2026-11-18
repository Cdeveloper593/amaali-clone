import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ShopGrid } from "@/components/sites/amaali/ShopGrid";
import { brands, productsWithBrand } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  return { title: brand ? `${brand.name} – Ama-Ali` : "Brand – Ama-Ali" };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  return <ShopGrid title={brand.name} items={productsWithBrand(brand.slug)} />;
}
