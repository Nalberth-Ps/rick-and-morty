import { FiltersContextProvider } from "@context/filters"
import { PaginationContextProvider } from "@context/pagination"
import { Banner } from "./components/Banner"
import { Filters } from "./components/Filters"
import { Cards } from "./components/Cards"
import { LocationsContextProvider } from "@context/locations"

import styles from "./locations.module.css"

const Locations = () => {
	return (
		<main className={styles.main}>
			<Banner />

			<Filters />

			<Cards />
		</main>
	)
}

const LocationsWrapper = () => {
	return (
		<FiltersContextProvider>
			<PaginationContextProvider>
				<LocationsContextProvider>
					<Locations />
				</LocationsContextProvider>
			</PaginationContextProvider>
		</FiltersContextProvider>
	)
}

export default LocationsWrapper
