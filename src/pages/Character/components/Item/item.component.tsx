import type React from "react"
import { NavigateWrapper } from "@components/NavigateWrapper"
import styles from "./item.module.css"

interface ItemProps {
	title: string
	value: string
	path?: false | string
}

export const Item: React.FC<ItemProps> = ({ title, value, path = false }) => {
	return (
		<div className={styles.informationItem}>
			<NavigateWrapper haveAnchor={Boolean(path)} path={path}>
				<div className={styles.informationContainer}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.informationStatus}>{value}</p>
				</div>
			</NavigateWrapper>
		</div>
	)
}
