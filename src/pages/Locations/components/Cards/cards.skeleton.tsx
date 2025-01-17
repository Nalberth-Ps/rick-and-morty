import MuiSkeleton from "react-loading-skeleton"
import styles from "./cards.module.css"

export const Skeleton = () => {
	const items = Array.from({ length: 20 }, (_, i) => i)

	return (
		<div className={styles.cardsList}>
			{items.map((item) => (
				<MuiSkeleton
					key={item}
					height={128}
					width="100%"
					borderRadius={8}
					containerClassName={styles.cardsListLoading}
				/>
			))}
		</div>
	)
}
