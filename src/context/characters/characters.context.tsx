import type React from "react"
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useReducer,
} from "react"
import { reducer } from "./characters.reducer"
import {
	type CharactersState,
	type CharactersAction,
	CHARACTERS_ACTION_TYPE,
} from "./characters.interface"
import { useQuery } from "@apollo/client"
import { useFilters } from "@context/filters"
import { GET_CHARACTERS } from "@graphql/queries/get-characters"
import type {
	Info,
	Character,
	CharacterFilter,
} from "@typings/rick-and-morty-api"
import { usePagination } from "@context/pagination"
import { PAGINATION_ACTION_TYPE } from "@context/pagination/pagination.interface"

const initialState: CharactersState = {
	characters: null,
	loading: true,
	error: null,
}

const CharactersStateContext = createContext<CharactersState>(initialState)

const CharactersDispatchContext =
	createContext<React.Dispatch<CharactersAction> | null>(null)

export const CharactersContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { filters } = useFilters()
	const { currentPage, dispatch: paginationDispatch } = usePagination()

	const { data, error, loading } = useQuery<
		{ characters: Info<Character[]> },
		{ page: number; filter: CharacterFilter }
	>(GET_CHARACTERS, {
		variables: {
			page: currentPage,
			filter: filters ?? {},
		},
		fetchPolicy: "cache-first",
		errorPolicy: "ignore",
	})

	useEffect(() => {
		dispatch({ type: CHARACTERS_ACTION_TYPE.SET_LOADING, payload: loading })

		if (error)
			dispatch({ type: CHARACTERS_ACTION_TYPE.SET_ERROR, payload: error })

		if (data?.characters?.results) {
			dispatch({
				type: CHARACTERS_ACTION_TYPE.SET_CHARACTERS,
				payload: data.characters.results,
			})
			paginationDispatch?.({
				type: PAGINATION_ACTION_TYPE.SET_TOTAL_PAGES,
				payload: data.characters.info?.pages || 0,
			})
		}
	}, [data, error, loading, paginationDispatch])

	return (
		<CharactersStateContext.Provider value={state}>
			<CharactersDispatchContext.Provider value={dispatch}>
				{children}
			</CharactersDispatchContext.Provider>
		</CharactersStateContext.Provider>
	)
}

export const useCharacters = () => {
	const state = useContext(CharactersStateContext)
	const dispatch = useContext(CharactersDispatchContext)

	if (state === undefined || dispatch === undefined)
		throw new Error("useCharacters must be used within a CharactersProvider")

	return { ...state, dispatch }
}
