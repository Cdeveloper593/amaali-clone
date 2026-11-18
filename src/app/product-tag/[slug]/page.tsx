import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ShopGrid } from "@/components/sites/amaali/ShopGrid";
import { productTags, productsWithTag } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return productTags.map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = productTags.find((t) => t.slug === slug);
  return { title: tag ? `${tag.name} – Ama-Ali` : "Product Tag – Ama-Ali" };
}

export default async function ProductTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = productTags.find((t) => t.slug === slug);
  if (!tag) notFound();

  return <ShopGrid title={tag.name} items={productsWithTag(tag.slug)} />;
}
