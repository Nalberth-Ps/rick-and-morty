import { useCharacters } from "@context/characters"
import { Cards } from "@components/Cards"

export const CharactersCards = () => {
	const { characters, loading } = useCharacters()

	if (!characters) return null

	return <Cards characters={characters} loading={loading} />
}
