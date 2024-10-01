import { Skeleton as MuiSkeleton } from "@mui/material"
import styles from "./cards.module.css"

export const Skeleton = () => {
	const items = Array.from({ length: 20 }, (_, i) => i)

	return (
		<div className={styles.cardsList}>
			{items.map((item) => (
				<MuiSkeleton
					key={item}
					variant="rectangular"
					height={128}
					width="100%"
					style={{ borderRadius: 8 }}
				/>
			))}
		</div>
	)
}
