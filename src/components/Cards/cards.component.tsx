import React from "react"
import styles from "./cards.module.css"
import classNames from "classnames"
const Pagination = React.lazy(() => import("@components/Pagination"))

import type { onPageChange } from "@components/Pagination/pagination.interface"
import { usePagination } from "@context/pagination"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import type { Character } from "@typings/rick-and-morty-api"
import { Card } from "./components/Card"
import { Skeleton } from "./components/Skeleton"
import { useNavigate } from "react-router-dom"

type CardsProps = {
	loading?: boolean
	characters: Character[] | undefined
}

export const Cards: React.FC<CardsProps> = ({ characters, loading }) => {
	const navigate = useNavigate()
	const { dispatch, currentPage, totalPages } = usePagination()

	if (loading) return <Skeleton />

	if (!characters || characters.length === 0) {
		navigate("/404")
		return null
	}

	function handlePageChange(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		dispatch?.({
			type: PAGINATION_ACTION_TYPE.SET_CURRENT_PAGE,
			payload: pages.nextSelectedPage + 1,
		})

		window.scrollTo({ top: 0, behavior: "smooth" })
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
