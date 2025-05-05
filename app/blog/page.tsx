import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import TagsBlog from '@/components/tag/BlogPageTags'
import PostCard from '@/components/PostCard'


export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl">
      <TagsBlog />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
