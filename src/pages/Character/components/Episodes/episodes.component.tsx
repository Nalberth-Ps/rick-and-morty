import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useCharacter } from "@context/character"
import { Item } from "../Item"
import { Pagination } from "@components/Pagination"
import type { onPageChange } from "@components/Pagination/pagination.interface"

import styles from "./episodes.module.css"

const ITEMS_PER_PAGE = 5

export const Episodes = () => {
	const { character } = useCharacter() ?? {}
	const [searchParams] = useSearchParams()
	const initialPage = Number(searchParams.get("page"))
	const [itemOffset, setItemOffset] = useState(initialPage * ITEMS_PER_PAGE)

	if (!character?.episode) return null

	const { episode } = character

	const endOffset = itemOffset + ITEMS_PER_PAGE

	const currentEpisodes = episode.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(episode.length / ITEMS_PER_PAGE)

	const goToSelectedPage = (event: onPageChange) => {
		if (event.nextSelectedPage === undefined) return

		const newOffset = (event.nextSelectedPage * ITEMS_PER_PAGE) % episode.length
		setItemOffset(newOffset)
	}

	return (
		<div>
			<h2 className={styles.title}>Episódios</h2>
			<ul className={styles.episodesList}>
				{currentEpisodes.map(({ id, episode, name }) => (
					<li className={styles.episodesItem} key={id}>
						<Item title={episode} value={name} path={`/episodes/${id}`} />
					</li>
				))}
			</ul>
			<Pagination
				pageCount={pageCount}
				onClick={goToSelectedPage}
				initialPage={initialPage - 1}
			/>
		</div>
	)
}
