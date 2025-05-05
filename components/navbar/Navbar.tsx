"use client";

import { ModeToggle } from "../ToggleTheme";
const NavBar = () => {
	return (
		<nav className="py-6">
			<ul className="flex justify-between items-center flex-row font-thin">
				<ModeToggle />
			</ul>
		</nav >
	)
}

export default NavBar;
