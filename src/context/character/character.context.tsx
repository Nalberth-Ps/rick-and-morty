import {
	createContext,
	useContext,
	useEffect,
	type PropsWithChildren,
} from "react"
import type { Character } from "@typings/rick-and-morty-api"
import { GET_CHARACTER } from "@graphql/queries/get-character"
import { useLazyQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import type { ICharacterContext } from "./charater.interface"

export const CharacterContext = createContext<ICharacterContext>({
	character: undefined,
	loading: true,
	error: undefined,
})

export const CharacterContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const { id } = useParams()

	const [getCharacter, { data, loading, error }] = useLazyQuery<
		{ character: Character },
		{ id: string | undefined }
	>(GET_CHARACTER)

	useEffect(() => {
		getCharacter({ variables: { id } })
	}, [id, getCharacter])

	return (
		<CharacterContext.Provider
			value={{ character: data?.character, error, loading }}
		>
			{children}
		</CharacterContext.Provider>
	)
}

export const useCharacter = () => {
	const state = useContext(CharacterContext)

	if (!state)
		throw new Error(
			"useCharacter must be used within a CharacterContextProvider",
		)

	return state
}
