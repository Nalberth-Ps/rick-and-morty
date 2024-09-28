import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

const NAV_ITEMS = [
	{ name: "Personagens", path: "/characters" },
	{ name: "Localizações", path: "/locations" },
	{ name: "Episódios", path: "/episodes" },
]

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				{NAV_ITEMS.map((item) => (
					<li key={item.name} className={styles.navbar__item}>
						<Link to={item.path}>{item.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
