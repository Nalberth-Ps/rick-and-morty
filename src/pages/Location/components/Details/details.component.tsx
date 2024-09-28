import { useLocation } from "@context/location"

import styles from "./details.module.css"

export const Details = () => {
	const { location } = useLocation()
	if (!location) return null

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{location.name}</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Type</p>
					<p className={styles.informationText}>{location.type}</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Dimension</p>
					<p className={styles.informationText}>{location.dimension}</p>
				</div>
			</div>
		</div>
	)
}
