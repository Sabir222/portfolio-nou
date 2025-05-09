import Link from "next/link";

type LinkItem = {
	link: string;
	download?: string;
	name: string;
	isExternal: boolean;
};

const Links = () => {
	const links: LinkItem[] = [
		{
			link: "/resume.pdf",
			download: "your-name-resume.pdf",
			name: "Resume",
			isExternal: false,
		},
		{
			link: "https://github.com/sabir222",
			name: "Github",
			isExternal: true,
		},
		{
			link: "https://www.linkedin.com/in/skoutabi/",
			name: "LinkedIn",
			isExternal: true,
		},
		{
			link: "https://x.com/sabirkoutabi",
			name: "X",
			isExternal: true,
		},
	];

	return (
		<div className="flex flex-col px-2 md:px-0 gap-1 mt-8">
			<h3 className="mb-2 text-lg select-none cursor-default">Links</h3>
			<ul className="flex flex-col gap-1.5 list-disc list-inside">
				{links.map(({ link, name, isExternal, download }) => (
					<li key={link} className="text-base leading-relaxed break-keep">
						{isExternal ? (
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="gradient  font-thin"
							>
								{name}
							</a>
						) : (
							<Link
								href={link}
								download={download}
								className="gradient font-thin"
							>
								{name}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Links;
