import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { useFilters } from "@context/filters"
import { GET_EPISODES } from "@graphql/queries/get-episodes"
import { reducer } from "./episodes.reducer"
import {
	type EpisodesState,
	type EpisodesAction,
	EPISODES_ACTION_TYPE,
} from "./episodes.interface"
import { usePagination } from "@context/pagination"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"
import type { Info, Episode, EpisodeFilter } from "@typings/rick-and-morty-api"

const initialState: EpisodesState = {
	episodes: null,
	loading: false,
	error: null,
}

const EpisodesStateContext = createContext<EpisodesState>(initialState)
const EpisodesDispatchContext =
	createContext<React.Dispatch<EpisodesAction> | null>(null)

export const EpisodesContextProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { filters } = useFilters()
	const { currentPage, dispatch: paginationDispatch } = usePagination()

	const { data, error, loading } = useQuery<
		{ episodes: Info<Episode[]> },
		{ page: number; filter: EpisodeFilter }
	>(GET_EPISODES, {
		variables: {
			page: currentPage,
			filter: filters ?? {},
		},
		fetchPolicy: "cache-first",
	})

	useEffect(() => {
		dispatch({ type: EPISODES_ACTION_TYPE.SET_LOADING, payload: loading })

		if (error)
			dispatch({ type: EPISODES_ACTION_TYPE.SET_ERROR, payload: error })

		if (data?.episodes?.results) {
			dispatch({
				type: EPISODES_ACTION_TYPE.SET_EPISODES,
				payload: data.episodes.results,
			})
			paginationDispatch?.({
				type: PAGINATION_ACTION_TYPE.SET_TOTAL_PAGES,
				payload: data.episodes.info?.pages || 0,
			})
		}
	}, [data, error, loading, paginationDispatch])

	return (
		<EpisodesStateContext.Provider value={state}>
			<EpisodesDispatchContext.Provider value={dispatch}>
				{children}
			</EpisodesDispatchContext.Provider>
		</EpisodesStateContext.Provider>
	)
}

export const useEpisodes = () => {
	const state = useContext(EpisodesStateContext)
	const dispatch = useContext(EpisodesDispatchContext)

	if (state === undefined || dispatch === undefined) {
		throw new Error("useEpisodes must be used within an EpisodesProvider")
	}

	return { ...state, dispatch }
}
