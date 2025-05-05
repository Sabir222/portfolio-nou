import { slug } from "github-slugger";
import { Tag } from "@/components/Tag";

interface TagsComponentProps {
	tags?: Record<string, number>;
	sortedTags?: string[];
	currentTag?: string;
}

export default function TagsComponent({
	tags = {},
	sortedTags = [],
	currentTag = "",
}: TagsComponentProps) {
	return (
		<section className="pb-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block text-lg font-thin">Blog Tags</h1>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex flex-wrap gap-2">
				{sortedTags.map((tag) => (
					<Tag
						tag={tag}
						count={tags[tag] || 0}
						key={tag}
						current={slug(tag) === currentTag}
					/>
				))}
			</div>
		</section>
	);
}
