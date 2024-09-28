import { Cards } from "@components/Cards"
import { useEpisode } from "@context/episode"

import styles from "./characters.module.css"

export const Characters = () => {
	const { episode } = useEpisode()
	if (!episode) return null

	return (
		<>
			<h2 className={styles.title}>Cast</h2>

			<Cards characters={episode.characters} />
		</>
	)
}
