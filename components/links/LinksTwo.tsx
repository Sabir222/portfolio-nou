import Link from "next/link";

const Links = () => {
	return (
		<div className="flex flex-col px-2 md:px-0 gap-1 mt-8">
			<h3 className="mb-2 text-lg font-medium">
				Links
			</h3>
			<ul className="flex flex-col  gap-1.5 list-disc list-inside">
				<li className="text-base leading-relaxed break-keep">
					<Link
						className="gradient hover:underline"
						href={"/"}
					>
						Resume
					</Link>
				</li>
				<li className="text-base leading-relaxed break-keep">
					<a
						className="no-underline border-b transition-colors duration-300 ease-in-out"
						href={`https://github.com/sabir222/`}
						target="_blank"
						rel="noreferrer noopener"
					>
						GitHub
					</a>
				</li>
				<li className="text-base leading-relaxed break-keep">
					<a
						className="no-underline border-b transition-colors duration-300 ease-in-out"
						href={`https://x.com/sabirkoutabi`}
						target="_blank"
						rel="noreferrer noopener"
					>
						X
					</a>
				</li>
				<li className="text-base leading-relaxed break-keep">
					<a
						className="no-underline border-b transition-colors duration-300 ease-in-out"
						href={`https://linkedin.com/in/skoutabi`}
						target="_blank"
						rel="noreferrer noopener"
					>
						LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Links;
