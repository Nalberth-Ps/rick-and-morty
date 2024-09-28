import EpisodeMainImage from "@assets/images/episodes-banner-page.png"

import styles from "./banner.module.css"

export const Banner = () => {
	return (
		<div className={styles.banner}>
			<img
				src={EpisodeMainImage}
				alt="Rick e Morty com os olhos arregalados"
				height={210}
				width={270}
			/>
		</div>
	)
}
