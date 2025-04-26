"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ModeToggle } from "../ToggleTheme";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";

const MobileNav = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleMenu = () => setExpanded(!expanded);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/work", label: "Work" },
		{ href: "/blog", label: "Blog" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	];

	const MenuButton = () => (
		<Button
			variant="outline"
			className="rounded-full bg-transparent"
			size="icon"
			onClick={toggleMenu}
		>
			<Menu className="h-4 w-4" />
		</Button>
	);

	return (
		<motion.nav
			className="lg:hidden"
			transition={{ delay: 2, ease: "easeInOut" }}
		>
			<motion.div
				animate={{ height: expanded ? 400 : 100 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className="overflow-hidden transition-all border-b-2 py-4 w-full z-50 text-xs lg:hidden ease-in-out duration-500 flex-col"
			>
				{expanded ? (
					<div className="p-4 flex flex-col h-full">
						<div className="h-10 w-10 ml-auto">
							<MenuButton />
						</div>
						<div className="flex flex-col items-center justify-center h-full flex-1">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="p-4 text-center text-lg"
									onClick={toggleMenu}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				) : (
					<div className="flex justify-between w-full items-center p-4">
						<Link href="/" >
							<Avatar className="w-8 h-8">
								<AvatarImage src="https://github.com/sabir222.png" />
								<AvatarFallback>SK</AvatarFallback>
							</Avatar>
						</Link>
						<div className="h-10 w-10">
							<ModeToggle />
						</div>
						<div className="h-10 w-10">
							<MenuButton />
						</div>
					</div>
				)}
			</motion.div>
		</motion.nav>
	);
};

export default MobileNav;
