"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [isToggled, setIsToggled] = useState(theme === "dark")

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark"
		setTheme(newTheme)
		setIsToggled(newTheme === "dark")
	}

	return (
		<Button
			variant="outline"
			size="icon"
			className="group relative rounded-full border-none"
			onClick={toggleTheme}
		>
			<AnimatePresence mode="wait" initial={false}>
				{isToggled ? (
					<motion.div
						key="moon"
						initial={{ opacity: 0, rotate: 90 }}
						animate={{ opacity: 1, rotate: 0 }}
						exit={{ opacity: 0, rotate: -90, scale: 0 }} //removed scale
						transition={{ duration: 0.15, type: "tween" }} // Simplified transition
						className="absolute inset-0 flex items-center justify-center"
					>
						<Moon className="h-[1.2rem] w-[1.2rem]" />
					</motion.div>
				) : (
					<motion.div
						key="sun"
						initial={{ opacity: 0, rotate: -90 }}
						animate={{ opacity: 1, rotate: 0 }}
						exit={{ opacity: 0, rotate: 90, scale: 0 }} //removed scale
						transition={{ duration: 0.15, type: "tween" }} // Simplified transition
						className="absolute inset-0 flex items-center justify-center"
					>
						<Sun className="h-[1.2rem] w-[1.2rem]" />
					</motion.div>
				)}
			</AnimatePresence>
		</Button>
	)
}
