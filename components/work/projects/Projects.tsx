import ProjectCard from "./ProjectCard";

const Projects = () => {
	const projects = [
		{
			title: "GOKITESURF",
			year: 2024,
			type: "Front-end",
			url: "https://www.bluboarding.com/en",
			tags: ["Nextjs", "Typescript", "Tailwindcss", "Nodemailer", "Stripe"],
			image: "/kitesurf.png", // update the path as needed
			description:
				"A website dedicated to kite surfing designed for a client, where users can book lessons and make online payments.",
		},
		{
			title: "ExpressJs ts starter kit.",
			year: 2024,
			type: "Back-end",
			url: "https://github.com/Sabir222/express-typescript-backend",
			tags: ["Docker", "ExpressJs", "TypeScript", "PostgreSQL"],
			image: "/backend.jpg",
			description: "A starter kit for backend with Express, PostgreSQL, and TypeScript.",
		},

		{
			image: "/realestate.png",
			year: 2024,
			url: "https://real-estate-phi-three.vercel.app/",
			tags: ["Nextjs", "Typescript", "Tailwindcss", "MongoDB", "Next Auth", "zustand"],
			type: "Full-stack",
			description:
				"Real Estate Website project! This web application allows users to browse, reserve, and add houses to their favorites. Admin users have the additional capability to manage properties and user roles. The project is built using TypeScript, Next.js, Tailwind CSS, MongoDB, Prisma, and integrates OAuth authentication with Google and GitHub.",
			title: "Real estate",
		},
	];

	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-2">
			{projects.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</section>
	);
};

export default Projects;
