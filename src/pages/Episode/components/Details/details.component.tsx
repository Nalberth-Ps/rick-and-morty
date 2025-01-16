import { useEpisode } from "@context/episode"

import React from "react"
import styles from "./details.module.css"
const GoBackButton = React.lazy(() => import("@components/GoBackButton"))
import { Skeleton } from "@mui/material"

export const Details = () => {
	const { episode } = useEpisode()

	return (
		<div className={styles.container}>
			<GoBackButton />
			<h1 className={styles.title}>
				{episode ? episode.name : <Skeleton width={200} height={48} />}
			</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Episode</p>
					<p className={styles.informationText}>
						{episode ? episode.episode : <Skeleton width={100} height={24} />}
					</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Date</p>
					<p className={styles.informationText}>
						{episode ? episode.air_date : <Skeleton width={100} height={24} />}
					</p>
				</div>
			</div>
		</div>
	)
}
