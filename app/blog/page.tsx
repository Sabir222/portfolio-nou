import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import TagsBlog from '@/components/tag/BlogPageTags'
import SimplePostCard from '@/components/blog/PostCard'

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <section className="min-h-screen">
      <TagsBlog />
      {posts.map((post, idx) => (
        <SimplePostCard key={idx} {...post} />
      ))}
    </section>
  )
}
