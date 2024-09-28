import { Filter } from "@components/Filter"
import styles from "./filters.module.css"

export const Filters = () => {
	return (
		<section className={styles.filters}>
			<Filter.ByName />
			<Filter.ByType />
			<Filter.ByDimension />
		</section>
	)
}
