import Link from "next/link";
const Links = () => {

	const links = [
		{ name: "Resume", link: "resume.pdf", download: "resume.pdf" },
		{ name: "Github", link: "https://github.com/sabir222" },
		{ name: "LinkedIn", link: "https://www.linkedin.com/in/skoutabi/" },
		{ name: "Twitter", link: "https://x.com/sabirkoutabi" },
	];
	return <section className="flex flex-row justify-between items-center">
		{links.map((link) => {
			return <Link href={link.link} download={link.download} key={link.name} className="font-semibold" target="_blank">{link.name}</Link>
		})}
	</section>
}


export default Links;
