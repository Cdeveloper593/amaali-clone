import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Page Messages – Ama-Ali" };

// Source: page_page-messages.html — four message boxes in a 2x2 grid. Icons in
// the source: comment-o (info), exclamation-triangle (error), hand-paper-o
// (success), envelope-o (warning); rendered here as text glyphs.
const MESSAGES: { icon: string; text: string; classes: string }[] = [
  { icon: "💬", text: "Informational message box text.", classes: "border-sky-300 bg-sky-50 text-sky-800" },
  { icon: "⚠", text: "Error message box text.", classes: "border-red-300 bg-red-50 text-red-800" },
  { icon: "✋", text: "Success message box text.", classes: "border-green-300 bg-green-50 text-green-800" },
  { icon: "✉", text: "Warning message box text.", classes: "border-amber-300 bg-amber-50 text-amber-800" },
];

export default function PageMessagesPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Page Messages" crumb="Page Messages" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Message Boxes</h2>
          <p className="text-sm text-neutral-600">
            Flexible feature boxes with optional icons/images and multiple layouts. Next element:{" "}
            <Link href="/page-progress-bar" className="text-[#ff6900] hover:underline">
              Progress Bar
            </Link>
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {MESSAGES.map((m) => (
            <div key={m.text} className={`border px-6 py-5 ${m.classes}`}>
              <p className="text-sm leading-relaxed">
                <span aria-hidden="true" className="mr-2">
                  {m.icon}
                </span>
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
