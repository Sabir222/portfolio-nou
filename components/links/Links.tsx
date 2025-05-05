
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
		<div className="flex flex-col gap-1 mt-8">
			<h3 className="mb-2 text-lg font-thin "> link</h3>
			<ul className="flex flex-col gap-1.5 list-disc list-inside">
				{links.map(({ link, name, isExternal, download }) => (
					<li key={link} className="text-base leading-relaxed break-keep">
						{isExternal ? (
							<Link
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="gradient"
								aria-label={`Link to my ${name}`}
							>
								{name}
							</Link>
						) : (
							<Link
								href={link}
								download={download}
								className="gradient"
								aria-label={`Link to my ${name}`}
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
