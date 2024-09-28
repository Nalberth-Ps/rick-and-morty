import { useCharacters } from "@context/characters"
import { Card } from "../Card"
import styles from "./cards.module.css"
import classNames from "classnames"
import { Pagination } from "@components/Pagination"
import { CHARACTERS_ACTION_TYPE } from "@context/characters/characters.interface"

export const Cards = () => {
	const { characters, loading, currentPage, totalPages, dispatch } =
		useCharacters()

	if (loading) return <div>Loading...</div>

	if (!characters?.length) return <div>No characters found</div>

	function handlePageChange(pages: { selected: number }) {
		dispatch?.({
			type: CHARACTERS_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: pages.selected,
		})
	}

	return (
		<section className={classNames(styles.characters)}>
			<ul className={classNames(styles.characters__list)}>
				{characters.map((character) => (
					<Card key={character.id} {...character} />
				))}
			</ul>

			<Pagination
				initialPage={currentPage}
				pageCount={totalPages}
				onPageChange={handlePageChange}
			/>
		</section>
	)
}
