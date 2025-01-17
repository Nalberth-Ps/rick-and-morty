import { lazy } from "react"
import { useEpisode } from "@context/episode"
const GoBackButton = lazy(() => import("@components/GoBackButton"))
const MuiSkeleton = lazy(() => import("@mui/material/Skeleton"))
import styles from "./details.module.css"

export const Details = () => {
	const { episode } = useEpisode()

	return (
		<div className={styles.container}>
			<GoBackButton />
			<h1 className={styles.title}>
				{episode ? episode.name : <MuiSkeleton width={200} height={48} />}
			</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Episode</p>
					<p className={styles.informationText}>
						{episode ? (
							episode.episode
						) : (
							<MuiSkeleton width={100} height={24} />
						)}
					</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Date</p>
					<p className={styles.informationText}>
						{episode ? (
							episode.air_date
						) : (
							<MuiSkeleton width={100} height={24} />
						)}
					</p>
				</div>
			</div>
		</div>
	)
}
