import ReactPaginate, { type ReactPaginateProps } from "react-paginate"

import styles from "./pagination.module.css"
import { useSearchParams } from "react-router-dom"

type PaginationProps = Pick<
	ReactPaginateProps,
	"pageCount" | "onPageChange" | "initialPage"
>

export const Pagination: React.FC<PaginationProps> = ({
	pageCount,
	onPageChange,
	initialPage = 0,
}) => {
	const [_, setSearchParams] = useSearchParams()

	function handlePageChange(pages: { selected: number }) {
		setSearchParams({ page: String(pages.selected + 1) })
		onPageChange?.(pages)
	}

	return (
		<div className={styles.paginationWrapper}>
			<ReactPaginate
				initialPage={initialPage}
				className={styles.pagination}
				activeClassName={styles.selectedPage}
				disabledClassName={styles.disabled}
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageChange}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}
