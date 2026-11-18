import { ShopGrid } from "@/components/sites/amaali/ShopGrid";

export const metadata = { title: "Shop – Ama-Ali" };

export function generateStaticParams() {
  return [{ page: "2" }, { page: "3" }];
}

export default async function ShopPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  await params;
  return <ShopGrid title="Shop" />;
}
