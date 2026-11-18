import { BlogCard, PageHeader, blogPage1Posts } from "@/components/sites/amaali/blog";

export const metadata = { title: "Blog Grid – Ama-Ali" };

export default function BlogGridPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Blog Grid" crumb="Blog Grid" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPage1Posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
