import { useEpisode } from "@context/episode"

import styles from "./details.module.css"

export const Details = () => {
	const { episode } = useEpisode()
	if (!episode) return null

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{episode.name}</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Episode</p>
					<p className={styles.informationText}>{episode.episode}</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Date</p>
					<p className={styles.informationText}>{episode.air_date}</p>
				</div>
			</div>
		</div>
	)
}
