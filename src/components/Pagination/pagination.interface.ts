import type { ReactPaginateProps } from "react-paginate"

export interface onPageChange {
	index: number | null
	selected: number
	nextSelectedPage: number | undefined
	event: object
	isPrevious: boolean
	isNext: boolean
	isBreak: boolean
	isActive: boolean
}

export type PaginationProps = Pick<
	ReactPaginateProps,
	"pageCount" | "onClick" | "initialPage"
>
