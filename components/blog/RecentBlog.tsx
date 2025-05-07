import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

const RecentBlog = () => {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	);

	return (
		<div className="flex flex-col gap-1 mt-8">
			<h3 className="mb-2 text-lg">Recent posts</h3>
			<ul className="flex flex-col gap-1.5 list-disc list-inside">
				{posts.slice(0, 3).map((post) => (
					<li key={post._id} className="text-base leading-relaxed break-keep">
						<Link
							href={post.url}
							className="gradient font-thin"
							aria-label={`Link to blog post: ${post.title}`}
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentBlog;
