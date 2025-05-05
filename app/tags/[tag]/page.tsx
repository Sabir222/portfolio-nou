import { allPosts } from "contentlayer/generated";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";
import TagsComponent from "@/components/tag/TagsComponent";
import SimplePostCard from "@/components/blog/PostCard";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
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
    <main className="min-h-screen">
      <TagsComponent tags={tags} sortedTags={sortedTags} currentTag={tag} />

      <section className="">
        {displayPosts?.length > 0 ? (
          <>
            {displayPosts.map((post) => (
              <SimplePostCard key={post.title} {...post} />
            ))}
          </>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </section>
    </main>
  );
}
