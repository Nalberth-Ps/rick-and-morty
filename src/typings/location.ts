import type { Location } from "@typings/rick-and-morty-api"

export interface LocationQueryVariables {
	id: string | undefined
}

export interface LocationQuery {
	location: Location
}
