import Link from "next/link";
import { BlogCard, BlogSidebar, PageHeader, blogPage1Posts } from "@/components/sites/amaali/blog";

export const metadata = { title: "Blog – Ama-Ali" };

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Blog" crumb="Blog" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          {blogPage1Posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          <nav aria-label="Blog pagination" className="flex items-center gap-2 pt-2">
            <span className="border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-bold text-white">1</span>
            <Link href="/blog/page/2" className="border border-neutral-300 px-4 py-2 text-sm text-neutral-500">
              2
            </Link>
            <Link href="/blog/page/3" className="border border-neutral-300 px-4 py-2 text-sm text-neutral-500">
              3
            </Link>
          </nav>
        </div>
        <BlogSidebar />
      </div>
    </main>
  );
}
