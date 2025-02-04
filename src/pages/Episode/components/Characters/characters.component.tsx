import { Cards } from "@components/Cards"
import { useEpisode } from "@context/episode"

import styles from "./characters.module.css"

export const Characters = () => {
	const { episode, loading } = useEpisode()

	const episodeIsLoading = !episode || loading

	return (
		<>
			<h2 className={styles.title}>Elenco</h2>

			<Cards characters={episode?.characters} loading={episodeIsLoading} />
		</>
	)
}
