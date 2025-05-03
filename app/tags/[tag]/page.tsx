import { allPosts, Post } from "contentlayer/generated";
import { Tag } from "@/components/Tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from 'date-fns'
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";
import Link from "next/link";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 line-clamp-1">
        {post.body.raw.replace(/<[^>]+>/g, ' ').split(' ').slice(0, 8).join(' ')}...
      </div>
    </div>
  )
}


export const generateStaticParams = () => {
  const tags = getAllTags(allPosts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;

  const displayPosts = getPostsByTagSlug(allPosts, tag);
  const tags = getAllTags(allPosts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <main className="pt-[200px] xl:pt-[400px] container">
      <div className="flex justify-between flex-col md:flex-row">
        <h1 className="mb-8  text-2xl font-black cursor-default md:text-5xl lg:w-1/2 ">
          <span className="hover:opacity-70 hover:dark:opacity-50 ease-in-out duration-500">
            Blog -{" "}
          </span>
          <span className="opacity-70 dark:opacity-50">Plain & Simple, A </span>
          <span className="hover:opacity-70 hover:dark:opacity-50 ease-in-out duration-500 ">
            Web Developer
          </span>
          <span className="opacity-70 dark:opacity-50">&apos;s Journal.</span>
        </h1>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-14 py-28">
        {displayPosts?.length > 0 ? (
          <>
            {displayPosts.map((post) => {
              const { title } = post;
              return (
                <PostCard
                  key={title}
                  {...post}
                />
              );
            })}
          </>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </section>
    </main>
  );
}
