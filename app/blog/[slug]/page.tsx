import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Mdx from '@/components/mdx-components';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Toc from '@/components/Toc';

// Helper function to get post by slug
async function getPost(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return post;
}

// Generate static params for dynamic routes
export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

// Generate metadata for the page
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title };
};

// Post layout component
const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div className="relative">
      {/* TOC positioned absolutely to the right of content */}
      <div className="hidden lg:block absolute left-full ml-10">
        <div className="fixed top-36">
          <Toc />
        </div>
      </div>

      {/* Main content with max-w-xl */}
      <main className="max-w-xl mx-auto">
        <div className="italic mb-10 flex flex-row space-x-2.5">
          <Link href="/" className="font-bold">Home</Link>
          <p>/</p>
          <Link href="/blog" className="font-bold">posts</Link>
          <p>/</p>
          <p className="font-extralight">{post.title}</p>
        </div>

        <div className="text-center">
          <Separator className="mb-6" />
          <time dateTime={post.date} className="mb-1 text-xs">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <Separator className="mb-10 mt-10" />
        </div>

        <Mdx code={post.body.code} />
      </main>
    </div>
  );
};

export default PostLayout;
