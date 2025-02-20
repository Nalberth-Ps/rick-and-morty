import RickAndMorty from "@assets/images/rick-and-morty.webp"
import classNames from "classnames"
import styles from "./banner.module.css"

export const Banner = () => {
	return (
		<div className={classNames(styles.banner)}>
			<img
				src={RickAndMorty}
				alt="Rick and Morty Banner"
				height={200}
				width={600}
				loading="eager"
				fetchPriority="high"
			/>
		</div>
	)
}
