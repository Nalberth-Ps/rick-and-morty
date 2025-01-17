import MuiSkeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"
import styles from "./skeleton.module.css"

const SKELETON_IDS = ["info-1", "info-2", "info-3", "info-4", "info-5"]

export const Skeleton = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

	const avatarSize = 300
	const informationWidth = isMobile ? "100%" : 400

	return (
		<div className={styles.skeletonWrapper}>
			<div className={styles.skeletonAvatar}>
				<MuiSkeleton circle width={avatarSize} height={avatarSize} />
				<MuiSkeleton width={200} height={34} />
			</div>

			<div className={styles.skeletonInformation}>
				<div className={styles.skeletonInformationRow}>
					{SKELETON_IDS.map((id) => (
						<MuiSkeleton key={id} width={informationWidth} height={36} />
					))}
				</div>
				<div className={styles.skeletonInformationRow}>
					{SKELETON_IDS.map((id) => (
						<MuiSkeleton key={id} width={informationWidth} height={36} />
					))}
				</div>
			</div>
		</div>
	)
}
