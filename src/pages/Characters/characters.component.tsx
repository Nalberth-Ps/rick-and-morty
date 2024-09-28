import classNames from "classnames"
import { FiltersContextProvider } from "@context/filters"
import { Banner } from "./components/Banner"
import { Filters } from "./components/Filters"
import styles from "./characters.module.css"
import { CharactersContextProvider } from "@context/characters"
import { CharactersCards } from "./components/CharactersCards"
import { PaginationContextProvider } from "@context/pagination"

const Characters = () => {
	return (
		<FiltersContextProvider>
			<PaginationContextProvider>
				<CharactersContextProvider>
					<div className={classNames(styles.main, "container")}>
						<Banner />

						<Filters />

						<CharactersCards />
					</div>
				</CharactersContextProvider>
			</PaginationContextProvider>
		</FiltersContextProvider>
	)
}

export default Characters
