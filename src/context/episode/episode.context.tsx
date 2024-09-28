import {
	createContext,
	useContext,
	useEffect,
	type PropsWithChildren,
} from "react"
import type { Episode } from "@typings/rick-and-morty-api"
import { GET_EPISODE } from "@graphql/queries/get-episode"
import { useLazyQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import type { IEpisodeContext } from "./episode.interface"

export const EpisodeContext = createContext<IEpisodeContext>({
	episode: undefined,
	loading: true,
	error: undefined,
})

export const EpisodeContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const { id } = useParams<{ id: string }>()

	const [getEpisode, { data, loading, error }] = useLazyQuery<
		{ episode: Episode },
		{ id: string }
	>(GET_EPISODE)

	useEffect(() => {
		if (!id) return

		getEpisode({ variables: { id } })
	}, [id, getEpisode])

	return (
		<EpisodeContext.Provider value={{ episode: data?.episode, error, loading }}>
			{children}
		</EpisodeContext.Provider>
	)
}

export const useEpisode = () => {
	const state = useContext(EpisodeContext)

	if (!state) {
		throw new Error("useEpisode must be used within an EpisodeContextProvider")
	}

	return state
}
