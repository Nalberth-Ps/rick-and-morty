import {
	createContext,
	useContext,
	useEffect,
	type PropsWithChildren,
} from "react"
import type { Location } from "@typings/rick-and-morty-api"
import { GET_LOCATION } from "@graphql/queries/get-location" // Ajuste o caminho conforme sua estrutura
import { useLazyQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import type { ILocationContext } from "./location.interface"

export const LocationContext = createContext<ILocationContext>({
	location: undefined,
	loading: true,
	error: undefined,
})

export const LocationContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const { id } = useParams<{ id: string }>()

	const [getLocation, { data, loading, error }] = useLazyQuery<
		{ location: Location },
		{ id: string }
	>(GET_LOCATION)

	useEffect(() => {
		if (!id) return

		getLocation({ variables: { id } })
	}, [id, getLocation])

	return (
		<LocationContext.Provider
			value={{ location: data?.location, error, loading }}
		>
			{children}
		</LocationContext.Provider>
	)
}

export const useLocation = () => {
	const state = useContext(LocationContext)

	if (!state)
		throw new Error("useLocation must be used within a LocationContextProvider")

	return state
}
