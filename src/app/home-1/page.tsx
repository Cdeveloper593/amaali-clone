import HomePage from "../page";

// The root page exports no metadata of its own, so this alias uses the
// site-wide title from src/app/layout.tsx.
export const metadata = { title: "Ama-Ali – Just another WordPress site" };

export default function Home1Page() {
  return <HomePage />;
}
