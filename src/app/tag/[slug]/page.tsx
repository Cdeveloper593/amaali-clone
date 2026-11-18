import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogCard, BlogSidebar, PageHeader } from "@/components/sites/amaali/blog";
import { blogTags, postsWithTag } from "@/lib/amaali/archives";

export function generateStaticParams() {
  return blogTags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = blogTags.find((t) => t.slug === slug);
  return { title: tag ? `${tag.name} – Ama-Ali` : "Blog – Ama-Ali" };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = blogTags.find((t) => t.slug === slug);
  if (!tag) notFound();

  const posts = postsWithTag(slug);

  return (
    <main className="bg-white">
      <PageHeader title={tag.name} crumb={tag.name} />
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
