import { Filter } from "@components/Filter"
import styles from "./filters.module.css"

export const Filters = () => {
	return (
		<div className={styles.container}>
			<Filter.ByName placeholder="Filtrar pelo nome ou episódio (ex. S01 or S01E02)" />
		</div>
	)
}
