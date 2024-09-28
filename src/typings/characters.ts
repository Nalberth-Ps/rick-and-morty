import type { Species } from "./rick-and-morty-api"

export type CardProps = {
	id: number
	name: string
	species: Species
	image: string
}

export type LoadMoreProps = {
	loadMore: () => void
	loading: boolean
	nextPage: string | null
}
