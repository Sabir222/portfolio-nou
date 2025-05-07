import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import TagsBlog from '@/components/tag/BlogPageTags'
import SimplePostCard from '@/components/blog/PostCard'
import { Metadata } from "next";

export const metadata: Metadata = {
  //openGraph: {
  //  images: [
  //    {
  //      url: "https://www.sabirkoutabi.dev/api/og",
  //      width: 1200,
  //      height: 630,
  //    },
  //  ],
  //},
  //twitter: {
  //  card: "summary_large_image",
  //  title: "My blog",
  //  description: "Sabir Koutabi's Blog",
  //  images: [`https://www.sabirkoutabi.dev/api/og`],
  //},
  title: "My blog",
  description: "Sabir Koutabi's Blog",
};
export default function Blog() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <section className="min-h-screen">
      <TagsBlog />
      {posts.map((post, idx) => (
        <SimplePostCard key={idx} {...post} />
      ))}
    </section>
  )
}
