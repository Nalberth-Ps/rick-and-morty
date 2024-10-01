import { LocationContextProvider } from "@context/location"
import { PaginationContextProvider } from "@context/pagination"
import { Details } from "./components/Details"
import styles from "./location.module.css"
import { Characters } from "./components/Characters"

const Location = () => {
	return (
		<div className={styles.main}>
			<Details />

			<Characters />
		</div>
	)
}

const LocationWrapper = () => {
	return (
		<PaginationContextProvider>
			<LocationContextProvider>
				<Location />
			</LocationContextProvider>
		</PaginationContextProvider>
	)
}

export default LocationWrapper
