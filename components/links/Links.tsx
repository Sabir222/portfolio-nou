import Link from "next/link";
import { BsTwitterX, BsGithub, BsLinkedin, BsFileEarmarkPdf } from "react-icons/bs";
import React from "react";

interface LinkItem {
	icon: React.ReactNode;
	link: string;
	download?: string;
	name: string;
	isExternal: boolean;
}

const Links = () => {
	const links: LinkItem[] = [
		{
			icon: <BsFileEarmarkPdf size={18} />,
			link: "/resume.pdf",
			download: "your-name-resume.pdf",
			name: "Resume",
			isExternal: false,
		},
		{
			icon: <BsGithub size={18} />,
			link: "https://github.com/sabir222",
			name: "Github",
			isExternal: true,
		},
		{
			icon: <BsLinkedin size={18} />,
			link: "https://www.linkedin.com/in/skoutabi/",
			name: "LinkedIn",
			isExternal: true,
		},
		{
			icon: <BsTwitterX size={18} />,
			link: "https://x.com/sabirkoutabi",
			name: "X",
			isExternal: true,
		},
	];

	return (
		<div className="flex items-center justify-center py-4">
			<div className="flex flex-wrap gap-6 items-center justify-center">
				{links.map((link) => (
					<Link
						href={link.link}
						download={link.download}
						key={link.link}
						className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
						target={link.isExternal || link.download ? "_blank" : undefined}
						rel={link.isExternal ? "noopener noreferrer" : undefined}
						aria-label={`Link to my ${link.name}`}
					>
						<div className="p-2 rounded-full 
                          hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300">
							{link.icon}
						</div>
						<span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{link.name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Links;
