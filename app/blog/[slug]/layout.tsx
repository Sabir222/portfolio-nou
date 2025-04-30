import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Blog post layout",
};

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full  px-2 py-8 md:px-4">
      <main className="w-full md:w-2/3 pr-6">
        <article>{children}</article>
      </main>
    </div>
  );
}
