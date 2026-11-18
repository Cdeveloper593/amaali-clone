import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BlogCard,
  BlogSidebar,
  PageHeader,
  postBySlug,
  type AllPost,
} from "@/components/sites/amaali/blog";

export const metadata = { title: "Blog – Ama-Ali" };

const PAGE_SLUGS: Record<string, string[]> = {
  "2": [
    "post-format-standard",
    "lorem-khaled-ipsum-is-a-major-12",
    "lorem-khaled-ipsum-is-a-major-11",
    "lorem-khaled-ipsum-is-a-major-10",
    "lorem-khaled-ipsum-is-a-major-9",
    "lorem-khaled-ipsum-is-a-major-8",
    "lorem-khaled-ipsum-is-a-major-7",
    "lorem-khaled-ipsum-is-a-major-6",
    "lorem-khaled-ipsum-is-a-major-5",
    "lorem-khaled-ipsum-is-a-major-4",
  ],
  "3": [
    "lorem-khaled-ipsum-is-a-major-3",
    "lorem-khaled-ipsum-is-a-major-2",
    "lorem-khaled-ipsum-is-a-major",
    "surround-yourself-with-angels-learning-is-cool",
  ],
};

export function generateStaticParams() {
  return [{ page: "2" }, { page: "3" }];
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const slugs = PAGE_SLUGS[page];
  if (!slugs) notFound();

  const posts = slugs
    .map((slug) => postBySlug(slug))
    .filter((p): p is AllPost => Boolean(p));

  const current = Number(page);

  return (
    <main className="bg-white">
      <PageHeader title="Blog" crumb="Blog" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          <nav aria-label="Blog pagination" className="flex items-center gap-2 pt-2">
            <Link
              href="/blog"
              className={
                current === 1
                  ? "border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-bold text-white"
                  : "border border-neutral-300 px-4 py-2 text-sm text-neutral-500"
              }
            >
              1
            </Link>
            <Link
              href="/blog/page/2"
              className={
                current === 2
                  ? "border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-bold text-white"
                  : "border border-neutral-300 px-4 py-2 text-sm text-neutral-500"
              }
            >
              2
            </Link>
            <Link
              href="/blog/page/3"
              className={
                current === 3
                  ? "border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-bold text-white"
                  : "border border-neutral-300 px-4 py-2 text-sm text-neutral-500"
              }
            >
              3
            </Link>
          </nav>
        </div>
        <BlogSidebar />
      </div>
    </main>
  );
}
