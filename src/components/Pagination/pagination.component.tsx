import ReactPaginate from "react-paginate"

import styles from "./pagination.module.css"
import { useSearchParams } from "react-router-dom"
import type { onPageChange, PaginationProps } from "./pagination.interface"

export const Pagination: React.FC<PaginationProps> = ({
	pageCount,
	onClick,
	initialPage = 0,
}) => {
	const [_, setSearchParams] = useSearchParams()

	function handlePageChange(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		setSearchParams({ page: String(pages.nextSelectedPage + 1) })

		onClick?.(pages)
	}

	return (
		<div className={styles.paginationWrapper}>
			<ReactPaginate
				onClick={handlePageChange}
				initialPage={initialPage}
				className={styles.pagination}
				activeClassName={styles.selectedPage}
				disabledClassName={styles.disabled}
				breakLabel="..."
				nextLabel=">"
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}
