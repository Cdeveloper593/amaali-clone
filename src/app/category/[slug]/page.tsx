import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogCard, BlogSidebar, PageHeader } from "@/components/sites/amaali/blog";
import { blogCategories, postsInCategory } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  return { title: category ? `${category.name} – Ama-Ali` : "Blog – Ama-Ali" };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = postsInCategory(slug);

  return (
    <main className="bg-white">
      <PageHeader title={category.name} crumb={category.name} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {posts.length > 0 ? (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
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
