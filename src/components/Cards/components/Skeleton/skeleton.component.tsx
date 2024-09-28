import MuiSkeleton from "@mui/material/Skeleton"
import styles from "./skeleton.module.css"

export const Skeleton = () => {
	const items = Array.from({ length: 20 }, (_, index) => index)

	return (
		<div className={styles.cards}>
			{items.map((item) => (
				<MuiSkeleton
					key={item}
					variant="rectangular"
					height={375}
					width={250}
					sx={{ borderRadius: 1 }}
				/>
			))}
		</div>
	)
}
