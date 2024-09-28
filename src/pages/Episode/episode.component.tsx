import { EpisodeContextProvider } from "@context/episode"
import { FiltersContextProvider } from "@context/filters"
import { PaginationContextProvider } from "@context/pagination"

import styles from "./episode.module.css"
import { Details } from "./components/Details"
import { Characters } from "./components/Characters"

const Episode = () => {
	return (
		<main className={styles.main}>
			<Details />

			<Characters />
		</main>
	)
}

const EpisodeWrapper = () => {
	return (
		<FiltersContextProvider>
			<PaginationContextProvider>
				<EpisodeContextProvider>
					<Episode />
				</EpisodeContextProvider>
			</PaginationContextProvider>
		</FiltersContextProvider>
	)
}

export default EpisodeWrapper
