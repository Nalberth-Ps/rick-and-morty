import { Link } from "react-router-dom"
import { Pagination } from "@components/Pagination"
import { usePagination } from "@context/pagination"
import type { onPageChange } from "@components/Pagination/pagination.interface"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import { useEpisodes } from "@context/episodes/episodes.context"
import styles from "./cards.module.css"
import { Skeleton } from "./cards.skeleton"

export const Cards = () => {
	const { episodes, loading } = useEpisodes()
	const { currentPage, dispatch, totalPages } = usePagination()

	function goToSelectedPage(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		dispatch?.({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: pages.nextSelectedPage + 1,
		})

		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	if (loading) return <Skeleton />
	if (!episodes || episodes.length === 0)
		return <p>Nenhum episódio encontrado</p>

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
