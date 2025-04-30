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
    <article className="px-2 sm:px-0 mt-4">{children}</article>
  );
}
