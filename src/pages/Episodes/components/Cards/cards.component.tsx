import { Link } from "react-router-dom"
import { Pagination } from "@components/Pagination"
import { usePagination } from "@context/pagination"
import type { onPageChange } from "@components/Pagination/pagination.interface"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import { useEpisodes } from "@context/episodes/episodes.context"
import styles from "./cards.module.css"

export const Cards = () => {
	const { episodes } = useEpisodes()
	const { currentPage, dispatch, totalPages } = usePagination()

	if (!episodes) return null

	function goToSelectedPage(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		dispatch?.({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: pages.nextSelectedPage + 1,
		})
	}

	return (
		<section className={styles.cards}>
			<ul className={styles.cardsList}>
				{episodes.map(({ id, name, air_date, episode }) => (
					<li key={id} className={styles.card}>
						<Link key={id} to={`/episodes/${id}`} className={styles.anchor}>
							<p className={styles.name}>{name}</p>
							<p className={styles.airDate}>{air_date}</p>
							<p className={styles.episode}>{episode}</p>
						</Link>
					</li>
				))}
			</ul>

			<Pagination
				pageCount={totalPages}
				initialPage={currentPage - 1}
				onClick={goToSelectedPage}
			/>
		</section>
	)
}
