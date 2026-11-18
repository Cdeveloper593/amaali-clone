import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { productBySlug, products } from "@/lib/amaali/data";
import { ProductDetail } from "@/components/sites/amaali/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  return { title: product ? `${product.name} – Ama-Ali` : "Product – Ama-Ali" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  // The source 301-redirects this slug to /product/table-wood-industry/.
  if (product.redirectTo) redirect(`/product/${product.redirectTo}`);

  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter(
      (p) => p.slug !== product.slug && p.category !== product.category,
    ),
  ].slice(0, 4);

  return <ProductDetail product={product} related={related} />;
}
