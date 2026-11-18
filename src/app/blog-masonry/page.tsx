import { BlogCard, PageHeader, blogPage1Posts } from "@/components/sites/amaali/blog";

export const metadata = { title: "Blog Masonry – Ama-Ali" };

export default function BlogMasonryPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Blog Masonry" crumb="Blog Masonry" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {blogPage1Posts.map((post) => (
            <div key={post.slug} className="mb-6 break-inside-avoid">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
