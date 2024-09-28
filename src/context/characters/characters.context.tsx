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
import { useSearchParams } from "react-router-dom"

const initialState: CharactersState = {
	characters: null,
	totalPages: 0,
	currentPage: 1,
	loading: false,
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

	const [searchParams, setSearchParams] = useSearchParams()

	const { data, error, loading } = useQuery<
		{ characters: Info<Character[]> },
		{ page: number; filter: CharacterFilter }
	>(GET_CHARACTERS, {
		variables: {
			page: state.currentPage,
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
			dispatch({
				type: CHARACTERS_ACTION_TYPE.SET_TOTAL_PAGES,
				payload: data.characters.info?.pages || 0,
			})
		}
	}, [data, error, loading])

	// biome-ignore lint/correctness/useExhaustiveDependencies: This effect is used to set the current page from the URL query params when the component mounts.
	useEffect(() => {
		const page = Number(searchParams.get("page")) || 1

		dispatch({ type: CHARACTERS_ACTION_TYPE.SET_CURRENT_PAGE, payload: page })
	}, [])

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
