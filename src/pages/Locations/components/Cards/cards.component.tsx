import { useLocations } from "@context/locations"
import styles from "./cards.module.css"
import { Link } from "react-router-dom"

export const Cards = () => {
	const { locations } = useLocations()

	if (!locations) return null

	return (
		<section className={styles.cards}>
			{locations.map(({ id, name, type }) => (
				<Link key={id} to={`/locations/${id}`} className={styles.anchor}>
					<p className={styles.name}>{name}</p>
					<p className={styles.type}>{type}</p>
				</Link>
			))}
		</section>
	)
}
