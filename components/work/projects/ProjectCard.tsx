"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
	title: string;
	year: number;
	url: string;
	image: string;
	type: string;
	tags: string[];
	description?: string;
	github?: string;
}

const ProjectCard = ({
	image,
	title,
	url,
	year,
	type,
	tags,
	description,
	github,
}: ProjectCardProps) => {
	const [clicked, setClicked] = useState(false);

	return (
		<>
			{clicked && (
				<motion.div
					className="fixed inset-0 bg-black/90 z-50 flex flex-col lg:flex-row backdrop-blur-sm overflow-y-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					{/* Left side: Image */}
					<div className="lg:w-1/2 w-full h-full order-1 lg:order-none p-4 flex justify-center items-center">
						<Image
							className="object-cover rounded-md max-h-[80vh] w-full"
							src={image}
							alt={title}
							width={800}
							height={600}
						/>
					</div>

					{/* Right side: Content */}
					<div className="lg:w-1/2 w-full h-full p-4 text-[#FAFAFA]">
						<div className="flex justify-between items-center mb-10">
							<p className="text-xl font-thin">{title}</p>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full text-gray-900 dark:text-[#FAFAFA]"
								onClick={() => setClicked(false)}
							>
								<X />
							</Button>
						</div>

						<div className="space-y-4">
							<div className="flex justify-between border-white/10 border-t-[1px] pt-2 text-sm font-thin">
								<p className="w-1/2 opacity-60">Type</p>
								<p className="w-1/2">{type}</p>
							</div>
							<div className="flex justify-between border-t border-white/10 pt-2 text-sm font-thin">
								<p className="w-1/2 opacity-60">Year</p>
								<p className="w-1/2">{year}</p>
							</div>
							<div className="flex justify-between border-t pt-2 text-sm font-thin border-white/10">
								<p className="w-1/2 opacity-60">Website</p>
								<Link className="w-1/2 " href={url} target="_blank">
									{url}
								</Link>
							</div>
							{github && (
								<div className="flex justify-between font-thin border-t pt-2 text-sm border-white/10">
									<p className="w-1/2 opacity-60">GitHub</p>
									<Link className="w-1/2 underline" href={github} target="_blank">
										{github}
									</Link>
								</div>
							)}
							{description && (
								<div className="border-t pt-2 text-sm font-thin border-white/10">
									<p className="opacity-60">Description</p>
									<p className="pt-1">{description}</p>
								</div>
							)}
							<div className="border-t pt-2 text-sm font-thin border-white/10">
								<div className="flex flex-wrap gap-1">
									{tags.map((tag, index) => (
										<Badge
											key={index}
											className="text-[#101828] font-thin bg-[#F5F6F7] dark:text-[#F5F6F7] dark:bg-[#0F1114]"
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			{/* Card Preview */}
			<div
				onClick={() => setClicked(true)}
				className="rounded-md border p-4 flex flex-col justify-center space-y-2 cursor-pointer hover:opacity-90 transition"
			>
				<div className="flex justify-between items-center">
					<p className="font-thin">{type}</p>
					<p className="text-xs italic font-thin">{year}</p>
				</div>
				<Image
					className="rounded-md h-32 w-full object-cover"
					src={image}
					alt="project"
					width={200}
					height={60}
				/>
				<p className="line-clamp-1 overflow-hidden">{title}</p>
				<div className="flex flex-row gap-1 items-center flex-wrap">
					{tags.map((tag, index) => (
						<Badge
							key={index}
							className=" text-[#101828] font-thin bg-[#F5F6F7] dark:text-[#F5F6F7] dark:bg-[#0F1114]"
						>
							{tag}
						</Badge>
					))}
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
