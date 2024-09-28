import classNames from "classnames"
import { Logo } from "./components/Logo"
import { Navbar } from "./components/Navbar"
import styles from "./header.module.css"

export const Header: React.FC = () => {
	return (
		<header className={classNames(styles.headerWrapper)}>
			<div className={classNames(styles.header, "container")}>
				<Logo />
				<Navbar />
			</div>
		</header>
	)
}
