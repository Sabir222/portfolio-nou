"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	// Destructure both theme and setTheme from useTheme
	const { theme, setTheme } = useTheme()

	// Function to toggle between light and dark themes
	const toggleTheme = () => {
		// If the current theme is dark, set it to light, otherwise set it to dark
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		// The Button now directly handles the onClick event
		<Button
			variant="outline"
			size="icon"
			className="rounded-full"
			onClick={toggleTheme} // Call the toggle function on click
		>
			{/* Icons remain the same, their visibility is controlled by Tailwind's dark: variant */}
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
		// DropdownMenu, DropdownMenuTrigger, and DropdownMenuContent are removed
	)
}
