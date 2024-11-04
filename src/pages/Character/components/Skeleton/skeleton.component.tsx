import MuiSkeleton from "@mui/material/Skeleton"
import { useMediaQuery } from "react-responsive"
import styles from "./skeleton.module.css"

export const Skeleton = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

	const avatarSize = 300
	const informationWidth = isMobile ? "100%" : 400

	return (
		<div className={styles.skeletonWrapper}>
			<div className={styles.skeletonAvatar}>
				<MuiSkeleton
					variant="circular"
					width={avatarSize}
					height={avatarSize}
				/>
				<MuiSkeleton variant="text" width={200} height={56} />
			</div>

			<div className={styles.skeletonInformation}>
				<div className={styles.skeletonInformationRow}>
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
				</div>
				<div className={styles.skeletonInformationRow}>
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
					<MuiSkeleton variant="text" width={informationWidth} height={60} />
				</div>
			</div>
		</div>
	)
}
