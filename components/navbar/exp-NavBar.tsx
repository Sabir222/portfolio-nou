'use client';

import { FiHome, FiBriefcase, FiUser, FiMail, FiFileText } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useMemo } from 'react';
import { clsx } from 'clsx'; // Optional: for cleaner class joining


const MENU = [
	{ key: 'home', title: 'home', path: '/', icon: FiHome },
	{ key: 'work', title: 'work', path: '/work', icon: FiBriefcase },
	{ key: 'blog', title: 'blog', path: '/blog', icon: FiFileText },
	{ key: 'about', title: 'about', path: '/about', icon: FiUser },
	{ key: 'contact', title: 'contact', path: '/contact', icon: FiMail },
];
// Simple animation for the text span
const textAnimation = {
	hidden: { width: 0, opacity: 0, marginLeft: 0 },
	visible: { width: 'auto', opacity: 1, marginLeft: '0.5rem' }, // Corresponds to ml-2
};

// Transition for the text animation
const textTransition = {
	duration: 0.35, // Slightly adjusted duration
	ease: "easeInOut", // Smooth easing
};


export const NavigationMenu = () => {
	const _pathname: string = usePathname();
	// Basic path cleaning, gets the first segment (e.g., '/', '/work', '/blog')
	const pathname: string = '/' + _pathname.split('/')[1];

	const menuItems: ReactElement[] = useMemo((): ReactElement[] => {
		return MENU.map(({ key, title, icon: Icon, path }) => {
			const isActive: boolean = pathname === path;

			// Base classes for all items
			const baseClasses = clsx(
				"flex h-12 items-center border",
				"select-none overflow-hidden", // Important for text animation
				"rounded-2xl",
				"backdrop-blur-sm", // Default backdrop blur
				"transition-colors duration-300 ease-in-out", // For background color change
				"px-3" // Padding for icon when text is hidden
			);

			// Classes specific to active state
			const activeClasses = "dark:bg-gray-100/10 bg-[#F4F4F5]";

			// Classes specific to inactive state (optional, if different from base)
			const inactiveClasses = "";


			return (
				<li key={key}>
					<Link
						href={path}
						// Combine base classes with active or inactive ones
						className={clsx(baseClasses, isActive ? activeClasses : inactiveClasses)}
						aria-current={isActive ? 'page' : undefined}
					>
						{/* Icon is always visible */}
						<Icon size={18} />

						{/* AnimatePresence handles the mounting/unmounting */}
						<AnimatePresence initial={false}>
							{isActive && (
								<motion.span
									key={`${key}-title`} // Unique key for animation
									className="inline-block  font-semibold overflow-x-hidden whitespace-nowrap" // Essential styles
									variants={textAnimation}
									initial="hidden"
									animate="visible"
									exit="hidden"
									transition={textTransition}
								>
									{title}
								</motion.span>
							)}
						</AnimatePresence>
					</Link>
				</li>
			);
		});
	}, [pathname]);

	return (
		// Simple positioning container
		<div className="fixed bottom-4 w-full flex items-center justify-center z-50 px-4">
			<div className="flex justify-center">
				{/* Simple list container */}
				<ul className="flex gap-2 h-fit">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};
