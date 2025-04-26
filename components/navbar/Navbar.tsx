"use client";

import { ModeToggle } from "../ToggleTheme";
import Link from "next/link";

const NavBar = () => {
	const paths = [{
		path: "/",
		name: "Home",
		style: "font-semibold"
	},
	{
		path: "/Work",
		name: "Work",
		style: ""
	}, {
		path: "/Blog",
		name: "Blog",
		style: ""
	}, {
		path: "/About",
		name: "About",
		style: ""
	}, {
		path: "/Contact",
		name: "Contact",
		style: ""
	},
	]

	return (
		<nav className="py-6 hidden lg:block">
			<ul className="flex justify-between items-center flex-row">
				<div className="flex items-center space-x-5">
					{paths.map((path) => {
						return < Link key={path.name} href={path.path} >
							<li className={path.style}>{path.name}</li>
						</Link>
					})}

				</div>
				<ModeToggle />
			</ul>
		</nav >
	)
}

export default NavBar;
