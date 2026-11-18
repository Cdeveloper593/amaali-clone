// Shared blog data + cards for the Amaali clone.
// Extra posts parsed from the real blog.html page 1 (10 main posts) and its
// "Latest Posts" sidebar (5 more). All titles, slugs, dates, categories and
// images below come from that file; the demo's posts share one body text
// (see POST_BODY in post/[slug]/page.tsx, taken from
// post-wordpress-coding-basics.html).
import Link from "next/link";
import { blogPosts } from "@/lib/amaali/data";

export type AllPost = {
  title: string;
  slug: string;
  categories: string[];
  image: string;
  date: string;
  excerpt: string;
};

const EXCERPT =
  "Porem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut ens ad minim veniam eiusmod tempor incid idunt ut labore. Porem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incid idunt ut labore et dolore";

const EXTRA_POSTS: AllPost[] = [
  {
    title: "Sustainable Furniture in Modern World",
    slug: "learn-wordpress-development",
    categories: ["Headphone"],
    image: "/sites/amaali/2018/04/market-sale-blog-01.jpg",
    date: "April 23, 2018",
    excerpt: EXCERPT,
  },
  {
    title: "Post: No sidebar",
    slug: "post-no-sidebar",
    categories: ["Accessories", "Audio", "Headphone", "Living room"],
    image: "/sites/amaali/2018/04/market-sale-blog-01.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Post: Left sidebar",
    slug: "post-left-sidebar",
    categories: ["Accessories", "Audio", "Home Design", "Living room", "Loa", "Printer"],
    image: "/sites/amaali/2018/04/market-sale-blog-02.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Post format: Audio",
    slug: "post-format-audio",
    categories: ["Accessories", "Audio", "Bedroom", "Headphone"],
    image: "/sites/amaali/2018/04/market-sale-blog-03.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Post format: Gallery",
    slug: "post-format-gallery",
    categories: ["Accessories", "Headphone", "Home Design", "Living room", "Chair", "Desk", "Jewelry", "watches"],
    image: "/sites/amaali/2018/04/market-sale-blog-04.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Post format: Video",
    slug: "post-format-video",
    categories: ["Accessories", "Bedroom", "Headphone", "Living room", "Glasses", "Mobile", "Shoes", "Tablet", "Television"],
    image: "/sites/amaali/2018/04/market-sale-blog-05.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Post format: Image",
    slug: "post-format-image",
    categories: ["Audio", "Headphone", "Living room", "Hats", "Lips", "Macara"],
    image: "/sites/amaali/2018/04/market-sale-blog-06.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Surround yourself with angels. Learning is cool",
    slug: "surround-yourself-with-angels-learning-is-cool",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-09.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-08.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-2",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-05.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-3",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-04.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-4",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-03.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  // Phase A additions: the remaining source posts (blog pages 2/3), titles,
  // dates, categories and featured images from WP REST + source sitemap.
  {
    title: "Post format: Standard",
    slug: "post-format-standard",
    categories: ["Accessories", "Headphone", "Home Design", "Audio", "Chair", "Lips"],
    image: "/sites/amaali/2018/04/market-sale-blog-07.jpg",
    date: "November 24, 2017",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-12",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-08.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-11",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-09.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-10",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-10.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-9",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-11.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-8",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-12.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-7",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-13.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-6",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-01.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
  {
    title: "Lorem Khaled Ipsum is a major",
    slug: "lorem-khaled-ipsum-is-a-major-5",
    categories: [],
    image: "/sites/amaali/2018/04/market-sale-blog-02.jpg",
    date: "May. 20.2016",
    excerpt: EXCERPT,
  },
];

export const allBlogPosts: AllPost[] = [
  ...blogPosts.map((p) => ({
    title: p.title,
    slug: p.slug,
    categories: [p.category],
    image: p.image,
    date: "April 23, 2018",
    excerpt: EXCERPT,
  })),
  ...EXTRA_POSTS,
];

// The 10 posts the source lists on blog page 1 (main column, in order).
export const blogPage1Posts: AllPost[] = allBlogPosts.slice(0, 10);

export function postBySlug(slug: string): AllPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function PageHeader({ title, crumb }: { title: string; crumb: string }) {
  return (
    <div className="border-b border-neutral-200 bg-neutral-100 py-10 text-center">
      <h1 className="text-3xl font-bold uppercase tracking-wide text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
        {title}
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        {" / "}
        {crumb}
      </p>
    </div>
  );
}

const BLOG_CATEGORY_NAMES = ["Accessories", "Audio", "Bedroom", "Headphone", "Home Design", "Living room"];

function termHref(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return BLOG_CATEGORY_NAMES.includes(name) ? `/category/${slug}` : `/tag/${slug}`;
}

function PostMeta({ post }: { post: AllPost }) {
  return (
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
              <Link href={termHref(c)} className="text-orange-500 hover:underline">
                {c}
              </Link>
            </span>
          ))}
        </>
      ) : null}
      {"  ·  "}
      <span>0 Comments</span>
    </p>
  );
}

export function BlogCard({ post }: { post: AllPost }) {
  return (
    <article className="overflow-hidden border border-neutral-200 bg-white">
      <Link href={`/post/${post.slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      </Link>
      <div className="p-5">
        <h2 className="text-xl font-bold leading-snug text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          <Link href={`/post/${post.slug}`} className="hover:text-orange-500">
            {post.title}
          </Link>
        </h2>
        <PostMeta post={post} />
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
        <Link
          href={`/post/${post.slug}`}
          className="mt-4 inline-block border border-neutral-300 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

export function BlogListCard({ post }: { post: AllPost }) {
  return (
    <article className="flex flex-col gap-5 border border-neutral-200 bg-white p-5 sm:flex-row">
      <Link href={`/post/${post.slug}`} className="shrink-0 sm:w-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} alt={post.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      </Link>
      <div>
        <h2 className="text-xl font-bold leading-snug text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          <Link href={`/post/${post.slug}`} className="hover:text-orange-500">
            {post.title}
          </Link>
        </h2>
        <PostMeta post={post} />
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
        <Link
          href={`/post/${post.slug}`}
          className="mt-4 inline-block border border-neutral-300 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

const SIDEBAR_CATEGORIES = ["Accessories", "Audio", "Bedroom", "Headphone", "Home Design", "Living room"];
const SIDEBAR_TAGS = [
  "Audio",
  "Camera",
  "Chair",
  "Computer",
  "Desk",
  "Glasses",
  "Hats",
  "Header Phone",
  "Jewelry",
  "Lips",
  "Loa",
  "Macara",
  "Mobile",
  "Printer",
  "Shoes",
  "Tablet",
  "tag name",
  "Television",
  "watches",
];

export function BlogSidebar() {
  const latest = allBlogPosts.slice(10, 15);
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="border-b-2 border-orange-500 pb-2 text-lg font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          Categories
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          {SIDEBAR_CATEGORIES.map((c) => (
            <li key={c}>
              <Link
                href={`/category/${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="text-neutral-600 hover:text-orange-500"
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="border-b-2 border-orange-500 pb-2 text-lg font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          Latest Posts
        </h3>
        <ul className="mt-4 space-y-4">
          {latest.map((p) => (
            <li key={p.slug} className="flex gap-3">
              <Link href={`/post/${p.slug}`} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" loading="lazy" className="h-16 w-24 object-cover" />
              </Link>
              <div>
                <Link href={`/post/${p.slug}`} className="text-sm font-semibold leading-snug text-neutral-800 hover:text-orange-500">
                  {p.title}
                </Link>
                <p className="mt-1 text-xs text-neutral-500">{p.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="border-b-2 border-orange-500 pb-2 text-lg font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          Tags
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {SIDEBAR_TAGS.map((t) => (
            <Link
              key={t}
              href={`/tag/${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="border border-neutral-300 px-3 py-1 text-xs text-neutral-600 hover:border-orange-500 hover:text-orange-500"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b-2 border-orange-500 pb-2 text-lg font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">
          Archives
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          {["April 2018", "November 2017", "May 2016"].map((a) => (
            <li key={a}>
              <Link href="/blog" className="text-neutral-600 hover:text-orange-500">
                {a}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
