import classNames from "classnames"
import { Filter } from "@components/Filter"
import styles from "./filters.module.css"

export const Filters = () => {
	return (
		<div className={classNames(styles.filtersContainer)}>
			<Filter.ByName />
			<Filter.ByStatus />
			<Filter.ByGender />
			<Filter.BySpecie />
		</div>
	)
}
