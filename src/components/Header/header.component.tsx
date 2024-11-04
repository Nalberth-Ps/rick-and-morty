import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Logo } from "./components/Logo"
import { Navbar } from "./components/Navbar"
import styles from "./header.module.css"
import { Drawer } from "@components/Drawer"

export const Header: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const toggleDrawer = () => {
		setIsDrawerOpen((prev) => !prev)
	}

	const closeDrawer = () => {
		setIsDrawerOpen(false)
	}

	return (
		<header className={styles.headerWrapper}>
			<div className={styles.header}>
				<Logo />

				<div className={styles.desktopNavbar}>
					<Navbar />
				</div>

				<button
					className={styles.menuButton}
					onClick={toggleDrawer}
					type="button"
				>
					<AiOutlineMenu size={24} />
				</button>

				<Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
					<Navbar />
				</Drawer>
			</div>
		</header>
	)
}
