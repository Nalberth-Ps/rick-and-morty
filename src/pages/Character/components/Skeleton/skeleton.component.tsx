import MuiSkeleton from "@mui/material/Skeleton"
import styles from "./skeleton.module.css"

export const Skeleton = () => {
	return (
		<div className={styles.skeletonWrapper}>
			<div className={styles.skeletonAvatar}>
				<MuiSkeleton variant="circular" width={300} height={300} />
				<MuiSkeleton variant="text" width={200} height={56} />
			</div>

			<div className={styles.skeletonInformation}>
				<div className={styles.skeletonInformationRow}>
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
				</div>
				<div className={styles.skeletonInformationRow}>
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
					<MuiSkeleton variant="text" width={400} height={60} />
				</div>
			</div>
		</div>
	)
}
