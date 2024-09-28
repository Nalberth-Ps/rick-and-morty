import { useCharacters } from "@context/characters"
import { Card } from "../Card"
import styles from "./cards.module.css"
import classNames from "classnames"
import { Pagination } from "@components/Pagination"
import type { onPageChange } from "@components/Pagination/pagination.interface"
import { usePagination } from "@context/pagination"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"

export const Cards = () => {
	const { characters, loading } = useCharacters()

	const { dispatch, currentPage, totalPages } = usePagination()

	if (loading) return <div>Loading...</div>

	if (!characters?.length) return <div>No characters found</div>

	function handlePageChange(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		dispatch?.({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: pages.nextSelectedPage + 1,
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
				initialPage={currentPage - 1}
				pageCount={totalPages}
				onClick={handlePageChange}
			/>
		</section>
	)
}
