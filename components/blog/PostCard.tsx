import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function SimplePostCard(post: Post) {
	return (
		<article className="mb-6 group">
			<Link href={post.url} className="block">
				<div className="flex justify-between items-start mb-1">
					<h3 className="gradient">
						{post.title}
					</h3>
					<time className="text-xs text-gray-400 ml-2 whitespace-nowrap">
						{format(parseISO(post.date), "MMMM d, yyyy")}
					</time>
				</div>
				<div className="flex justify-between items-start mb-1">
					<h5 className="font-thin text-sm line-clamp-1 overflow-hidden">
						{post.description}
					</h5>
					<time className="text-xs text-gray-400 ml-2 whitespace-nowrap">
						{post.readtime} min read
					</time>
				</div>

			</Link>
		</article>
	);
}

export default SimplePostCard;
