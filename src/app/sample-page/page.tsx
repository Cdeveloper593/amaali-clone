import { PageHeader } from "@/components/sites/amaali/blog";

export const metadata = { title: "Sample Page – Ama-Ali" };

// Source: page_sample-page.html — the default WordPress sample page body.
export default function SamplePage() {
  return (
    <main className="bg-white">
      <PageHeader title="Sample Page" crumb="Sample Page" />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-3xl font-bold uppercase text-neutral-800 [font-family:var(--font-pt-sans-narrow)]">Sample Page</h2>
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
          <p>
            This is an example page. It’s different from a blog post because it will stay in one place and will show up
            in your site navigation (in most themes). Most people start with an About page that introduces them to
            potential site visitors. It might say something like this:
          </p>
          <blockquote className="border-l-4 border-[#ff6900] pl-4 italic">
            Hi there! I’m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los
            Angeles, have a great dog named Jack, and I like piña coladas. (And gettin’ caught in the rain.)
          </blockquote>
          <p>…or something like this:</p>
          <blockquote className="border-l-4 border-[#ff6900] pl-4 italic">
            The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever
            since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the
            Gotham community.
          </blockquote>
          <p>
            As a new WordPress user, you should go to your dashboard to delete this page and create new pages for your
            content. Have fun!
          </p>
        </div>
      </div>
    </main>
  );
}
