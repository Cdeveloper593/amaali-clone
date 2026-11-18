import { BlogListCard, BlogSidebar, PageHeader, blogPage1Posts } from "@/components/sites/amaali/blog";

export const metadata = { title: "Blog List – Ama-Ali" };

export default function BlogListPage() {
  return (
    <main className="bg-white">
      <PageHeader title="Blog List" crumb="Blog List" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          {blogPage1Posts.map((post) => (
            <BlogListCard key={post.slug} post={post} />
          ))}
        </div>
        <BlogSidebar />
      </div>
    </main>
  );
}
