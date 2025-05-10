"use client";

import { Logo } from "../icon/logo2";
import { ModeToggle } from "../ToggleTheme";
const NavBar = () => {
	return (
		<nav className="py-6">
			<ul className="flex justify-between items-center flex-row font-thin">
				<Logo size={40} />
				<ModeToggle />
			</ul>
		</nav >
	)
}

export default NavBar;
