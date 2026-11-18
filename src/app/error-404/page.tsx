import Link from "next/link";
import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Error 404 – Ama-Ali" };

// Source: page_error-404.html — the main content is a single centered 404
// graphic (uploads/2018/05/404.png, 1135x283), downloaded in Phase A and
// served locally, with a link back home.
export default function Error404Page() {
  return (
    <main className="bg-white">
      <PageHeader title="Error 404" crumb="Error 404" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="py-10 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sites/amaali/2018/05/404.png"
            alt="404"
            width={1135}
            height={283}
            className="mx-auto w-full max-w-3xl"
          />
          <Link
            href="/"
            className="mt-8 inline-block bg-neutral-800 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#f26d21]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
