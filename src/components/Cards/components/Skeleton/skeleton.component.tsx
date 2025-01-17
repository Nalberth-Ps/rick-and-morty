import MuiSkeleton from "react-loading-skeleton"
import styles from "../../cards.module.css"

export const Skeleton = () => {
	const items = Array.from({ length: 20 }, (_, index) => index)

	return (
		<div className={styles.characters__list}>
			{items.map((item) => (
				<MuiSkeleton key={item} height={375} width={250} borderRadius={4} />
			))}
		</div>
	)
}
