import React from "react"
import { useLocations } from "@context/locations"
import styles from "./cards.module.css"
import { Link } from "react-router-dom"
const Pagination = React.lazy(() => import("@components/Pagination"))
import { usePagination } from "@context/pagination"
import type { onPageChange } from "@components/Pagination/pagination.interface"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import { Skeleton } from "./cards.skeleton"

export const Cards = () => {
	const { locations, loading } = useLocations()
	const { currentPage, dispatch, totalPages } = usePagination()

	if (!locations || loading) return <Skeleton />

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
				{locations.map(({ id, name, type }) => (
					<li key={id} className={styles.card}>
						<Link key={id} to={`/locations/${id}`} className={styles.anchor}>
							<p className={styles.name}>{name}</p>
							<p className={styles.type}>{type}</p>
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
