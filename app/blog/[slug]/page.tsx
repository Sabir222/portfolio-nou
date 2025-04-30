import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Mdx from '@/components/mdx-components'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <>
      <div className="italic mb-10  flex flex-row space-x-2.5">
        <Link href="/" className='font-bold'>Home</Link>
        <p className="class">/</p>
        <Link href="/blog" className='font-bold'>posts</Link>
        <p className="class">/</p>
        <p className="font-extralight">{post.title}</p>
      </div>
      <div className="text-center">
        <Separator className='mb-6' />
        <time dateTime={post.date} className="mb-1 text-xs ">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-4xl font-bold  ">{post.title}</h1>
        <Separator className='mb-10 mt-10' />
      </div>
      <Mdx code={post.body.code} />
      {/*<div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />*/}
    </>
  )
}

export default PostLayout
