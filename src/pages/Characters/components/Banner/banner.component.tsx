import { Helmet } from "react-helmet"
import RickAndMorty from "@assets/images/rick-and-morty.svg"
import classNames from "classnames"
import styles from "./banner.module.css"

export const Banner = () => {
	return (
		<>
			<Helmet>
				<link
					rel="preload"
					as="image"
					href={RickAndMorty}
					type="image/svg+xml"
				/>
			</Helmet>
			<div className={classNames(styles.banner)}>
				<img
					src={RickAndMorty}
					alt="Rick and Morty Banner"
					height={200}
					width={600}
					fetchPriority="high"
					loading="eager"
				/>
			</div>
		</>
	)
}
