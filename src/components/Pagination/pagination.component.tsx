import ReactPaginate from "react-paginate"
import { useSearchParams } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import type { onPageChange, PaginationProps } from "./pagination.interface"
import styles from "./pagination.module.css"

export const Pagination: React.FC<PaginationProps> = ({
	pageCount,
	onClick,
	initialPage = 0,
}) => {
	const [_, setSearchParams] = useSearchParams()
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

	function handlePageChange(pages: onPageChange) {
		if (pages.nextSelectedPage === undefined) return

		setSearchParams({ page: String(pages.nextSelectedPage + 1) })

		onClick?.(pages)
	}

	return (
		<div className={styles.paginationWrapper}>
			<ReactPaginate
				onClick={handlePageChange}
				forcePage={initialPage}
				initialPage={initialPage}
				className={styles.pagination}
				activeClassName={styles.selectedPage}
				disabledClassName={styles.disabled}
				breakLabel="..."
				nextLabel=">"
				pageRangeDisplayed={isMobile ? 2 : 5}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}
