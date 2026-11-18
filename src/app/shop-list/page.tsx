import { ShopGrid } from "@/components/sites/amaali/ShopGrid";

export const metadata = { title: "Shop List – Ama-Ali" };

export default function ShopListPage() {
  return <ShopGrid columns={3} defaultView="list" title="Shop List" />;
}
