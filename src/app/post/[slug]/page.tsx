// Single post page. Body text below is verbatim from the source
// post-wordpress-coding-basics.html (.content-post-default); the demo's
// posts share this body, so the extra posts discovered on blog.html reuse it.
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard, PageHeader, allBlogPosts, postBySlug } from "@/components/sites/amaali/blog";
import { CommentForm } from "@/components/sites/amaali/CommentForm";

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: string[] };

const POST_BODY: Block[] = [
  {
    kind: "p",
    text: "Aenean non lectus non sem varius fringilla at ut ante. Praesent fermentum eros non dapibus mattis. Vestibulum volutpat nulla eget vestibulum commodo. Morbi feugiat lacus dolor, quis tempus urna pretium ac. Nulla facilisi. Praesent ac ipsum diam. Integer dui odio, sollicitudin vel vehicula quis, sodales non odio. Donec a faucibus mi. Morbi in tincidunt justo, in suscipit arcu. Curabitur molestie euismod arcu, sit amet varius ante varius tempor. Quisque sed aliquam est. Fusce odio erat, posuere in dolor in, sodales vestibulum enim. Mauris sit amet laoreet orci. Mauris scelerisque nec libero tincidunt tristique. Mauris luctus sagittis risus in posuere vulputate sit amet finibus eu, egestas.",
  },
  { kind: "h2", text: "Sustainable Furniture in Modern World" },
  {
    kind: "p",
    text: "Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id.",
  },
  { kind: "h2", text: "Living room furniture is simple but delicate and economical" },
  { kind: "h2", text: "Creating An Organized Multi-Use Room" },
  {
    kind: "p",
    text: "Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id.",
  },
  {
    kind: "p",
    text: "Etiam dignissim aliquam tristique. Vestibulum porttitor eu sem sed ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam posuere luctus erat, ac condimentum quam aliquet sed. Nunc fringilla quis eros in vens enatis maent genaly bestings.",
  },
  {
    kind: "p",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim isnte veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis voluptatem accusantium doloremque.",
  },
  {
    kind: "p",
    text: "Aenean non lectus non sem varius fringilla at ut ante. Praesent fermentum eros non dapibus mattis. Vestibulum volutpat nulla eget vestibulum commodo. Morbi feugiat lacus dolor, quis tempus urna pretium ac. Nulla facilisi. Praesent ac ipsum diam. Integer dui odio, sollicitudin vel vehicula quis, sodales non odio. Donec a faucibus mi. Morbi in tincidunt justo, in suscipit arcu",
  },
  {
    kind: "p",
    text: "Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id. Curabitur elementum eros vehicula, suscipit maur.",
  },
  {
    kind: "list",
    items: [
      "Unlimited layout, colors options",
      "Front-end editor, live modifications",
      "Multi language, RTL ready",
      "Single page & post options",
      "Incredible support and updates",
    ],
  },
  {
    kind: "p",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna liqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.",
  },
];

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const idx = allBlogPosts.findIndex((p) => p.slug === slug);
  const prev = allBlogPosts[idx + 1];
  const next = allBlogPosts[idx - 1];
  const related = allBlogPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (post.categories.length === 0 || p.categories.some((c) => post.categories.includes(c))),
    )
    .slice(0, 3);

  return (
    <main className="bg-white">
      <PageHeader title={post.title} crumb="Blog" />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <article>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
          <h1 className="mt-6 text-3xl font-bold leading-tight text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-neutral-500">
            by: <span className="text-neutral-700">7uptheme</span>
            {"  ·  "}
            {post.date}
            {post.categories.length > 0 ? (
              <>
                {"  ·  "}
                {post.categories.map((c, i) => (
                  <span key={c}>
                    {i > 0 ? ", " : ""}
                    <Link href="/blog" className="text-orange-500 hover:underline">
                      {c}
                    </Link>
                  </span>
                ))}
              </>
            ) : null}
            {"  ·  "}
            <span>0 Comments</span>
          </p>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-600">
            {POST_BODY.map((b, i) =>
              b.kind === "p" ? (
                <p key={i}>{b.text}</p>
              ) : b.kind === "h2" ? (
                <h2 key={i} className="pt-2 text-2xl font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
                  {b.text}
                </h2>
              ) : (
                <ul key={i} className="list-disc space-y-1 pl-6">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
          </div>
          <p className="mt-8 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
            <span className="font-semibold text-neutral-700">7uptheme</span>
            {"  ·  "}
            {post.date}
            {post.categories.length > 0 ? (
              <>
                {"  ·  "}
                {post.categories.join(", ")}
              </>
            ) : null}
          </p>
        </article>

        <nav className="mt-10 flex items-center justify-between border-y border-neutral-200 py-4 text-sm font-bold uppercase tracking-wider">
          {prev ? (
            <Link href={`/post/${prev.slug}`} className="text-neutral-700 hover:text-orange-500">
              ← previous post
              <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-neutral-500">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/post/${next.slug}`} className="text-right text-neutral-700 hover:text-orange-500">
              next post →
              <span className="mt-1 block text-xs font-normal normal-case tracking-normal text-neutral-500">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {related.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
              Related Posts
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 border border-neutral-200 p-6">
          <h2 className="text-2xl font-bold text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
            Leave Comments
          </h2>
          <CommentForm />
        </section>
      </div>
    </main>
  );
}
