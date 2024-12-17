import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Logo } from "./components/Logo"
import { Navbar } from "./components/Navbar"
import styles from "./header.module.css"
import classNames from "classnames"

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

				<aside
					className={classNames(styles.drawer, {
						[styles.drawerOpen]: isDrawerOpen,
					})}
				>
					<button
						className={styles.closeButton}
						onClick={closeDrawer}
						type="button"
					>
						<AiOutlineClose size={24} />
					</button>

					<div className={styles.drawerContent}>
						<Navbar />
					</div>
				</aside>
				<div
					className={classNames(styles.overlay, {
						[styles.overlayOpen]: isDrawerOpen,
					})}
					onClick={closeDrawer}
					onKeyUp={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							closeDrawer()
						}
					}}
				/>
			</div>
		</header>
	)
}
