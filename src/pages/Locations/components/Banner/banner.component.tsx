import LocationMainImage from "@assets/images/rick-and-morty-locations-page.webp"
import styles from "./banner.module.css"

export const Banner = () => {
	return (
		<div className={styles.banner}>
			<img
				src={LocationMainImage}
				alt="Rick e Morty entrando em um portal"
				height={202}
				width={326}
			/>
		</div>
	)
}
