import { useLocation } from "@context/location"

import styles from "./details.module.css"
import { lazy } from "react"
import MuiSkeleton from "react-loading-skeleton"
const GoBackButton = lazy(() => import("@components/GoBackButton"))

export const Details = () => {
	const { location } = useLocation()

	return (
		<div className={styles.container}>
			<GoBackButton />
			<h1 className={styles.title}>
				{location ? location.name : <MuiSkeleton width={200} height={40} />}
			</h1>

			<div className={styles.informationRow}>
				<div className={styles.information}>
					<p className={styles.informationTitle}>Tipo</p>
					<p className={styles.informationText}>
						{location ? location.type : <MuiSkeleton width={100} height={24} />}
					</p>
				</div>

				<div className={styles.information}>
					<p className={styles.informationTitle}>Dimensão</p>
					<p className={styles.informationText}>
						{location ? (
							location.dimension
						) : (
							<MuiSkeleton width={100} height={24} />
						)}
					</p>
				</div>
			</div>
		</div>
	)
}
