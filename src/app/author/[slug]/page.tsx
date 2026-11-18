import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogCard, BlogSidebar, PageHeader, blogPage1Posts } from "@/components/sites/amaali/blog";

const AUTHORS: Record<string, string> = {
  "7uptheme": "7uptheme",
  customer: "Vendor",
  "vendor-1": "Vendor 1",
  "vendor-2": "Vendor 2",
  "vendor-3": "Vendor 3",
};

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = AUTHORS[slug];
  return { title: title ? `${title} – Ama-Ali` : "Blog – Ama-Ali" };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = AUTHORS[slug];
  if (!title) notFound();

  const isMainAuthor = slug === "7uptheme";

  return (
    <main className="bg-white">
      <PageHeader title={title} crumb={title} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {isMainAuthor ? (
            blogPage1Posts.map((post) => <BlogCard key={post.slug} post={post} />)
          ) : (
            <p className="text-sm leading-relaxed text-neutral-600">
              Sorry, but nothing matched your search terms. Please try again with some different keywords.
            </p>
          )}
        </div>
        <BlogSidebar />
      </div>
    </main>
  );
}
