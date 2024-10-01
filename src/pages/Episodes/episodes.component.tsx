import { EpisodesContextProvider } from "@context/episodes/episodes.context"
import { FiltersContextProvider } from "@context/filters"
import { PaginationContextProvider } from "@context/pagination"
import { Banner } from "./components/Banner"

import styles from "./episodes.module.css"
import { Filters } from "./components/Filters"
import { Cards } from "./components/Cards"

const Episodes = () => {
	return (
		<div className={styles.main}>
			<Banner />

			<Filters />

			<Cards />
		</div>
	)
}

const EpisodesWrapper = () => {
	return (
		<FiltersContextProvider>
			<PaginationContextProvider>
				<EpisodesContextProvider>
					<Episodes />
				</EpisodesContextProvider>
			</PaginationContextProvider>
		</FiltersContextProvider>
	)
}

export default EpisodesWrapper
