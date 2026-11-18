import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ShopGrid } from "@/components/sites/amaali/ShopGrid";
import { productCategories, productsInCategory } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return productCategories.map((term) => ({ slug: term.path.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const term = productCategories.find((t) => t.path === path);
  return { title: term ? `${term.name} – Ama-Ali` : "Product Category – Ama-Ali" };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join("/");
  const term = productCategories.find((t) => t.path === path);
  if (!term) notFound();

  return <ShopGrid title={term.name} items={productsInCategory(term.path)} />;
}
