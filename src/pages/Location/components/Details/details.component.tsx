import { useLocation } from "@context/location"

import styles from "./details.module.css"
import { Skeleton } from "@mui/material"
import { GoBackButton } from "@components/GoBackButton"

export const Details = () => {
	const { location } = useLocation()

	return (
		<div className={styles.container}>
			<GoBackButton />
			<h1 className={styles.title}>
				{location ? location.name : <Skeleton width={200} height={48} />}
			</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Type</p>
					<p className={styles.informationText}>
						{location ? location.type : <Skeleton width={100} height={24} />}
					</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Dimension</p>
					<p className={styles.informationText}>
						{location ? (
							location.dimension
						) : (
							<Skeleton width={100} height={24} />
						)}
					</p>
				</div>
			</div>
		</div>
	)
}
