import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { Tag } from "@/components/Tag";

export const metadata: Metadata = {
	title: "Tags",
	description: "Topic I've written about",
};

export default async function TagsBlog() {
	const tags = getAllTags(allPosts);
	const sortedTags = sortTagsByCount(tags);

	return (
		<section className="pb-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 ">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block  text-lg font-thin">Blog Tags</h1>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex flex-wrap gap-2">
				{sortedTags?.map((tag) => (
					<Tag tag={tag} count={tags[tag]} key={tag} />
				))}
			</div>
		</section>
	);


}
