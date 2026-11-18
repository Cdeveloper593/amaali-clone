import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogCard, BlogSidebar, PageHeader, postBySlug } from "@/components/sites/amaali/blog";

// WordPress post-format archives from the source sitemap
// (wp-sitemap-taxonomies-post_format-1.xml). Each lists the single post
// of that format. "standard" is not a real term on the source
// (https://amaali.7uptheme.net/type/standard/ is a 404 there), so it
// is intentionally not a route here.
const FORMATS: Record<string, { name: string; post: string }> = {
  audio: { name: "Audio", post: "post-format-audio" },
  gallery: { name: "Gallery", post: "post-format-gallery" },
  image: { name: "Image", post: "post-format-image" },
  video: { name: "Video", post: "post-format-video" },
};

export function generateStaticParams() {
  return Object.keys(FORMATS).map((format) => ({ format }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;
  const f = FORMATS[format];
  return { title: f ? `${f.name} – Ama-Ali` : "Blog – Ama-Ali" };
}

export default async function PostFormatPage({
  params,
}: {
  params: Promise<{ format: string }>;
}) {
  const { format } = await params;
  const f = FORMATS[format];
  if (!f) notFound();

  const post = postBySlug(f.post);
  const posts = post ? [post] : [];

  return (
    <main className="bg-white">
      <PageHeader title={f.name} crumb={f.name} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {posts.length > 0 ? (
            posts.map((p) => <BlogCard key={p.slug} post={p} />)
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
