import { Cards } from "@components/Cards"

import styles from "./characters.module.css"
import { useLocation } from "@context/location"

export const Characters = () => {
	const { location, loading } = useLocation()

	return (
		<>
			<h2 className={styles.title}>Residents</h2>

			<Cards characters={location?.residents} loading={loading} />
		</>
	)
}
