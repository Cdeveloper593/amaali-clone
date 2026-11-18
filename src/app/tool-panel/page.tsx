import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Tool Panel – Ama-Ali" };

// Source: page_tool-panel.html — the snapshot's main content contains only
// the page title heading ("Tool Panel"); the entry-content body is empty on
// the source page (the tool panel itself is a theme sidebar widget, not page
// content), so this route faithfully carries just the heading.
export default function ToolPanelPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Tool Panel" crumb="Tool Panel" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Tool Panel</h2>
      </div>
    </main>
  );
}
