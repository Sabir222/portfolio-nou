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
    <article className=" mt-4">{children}</article>
  );
}
