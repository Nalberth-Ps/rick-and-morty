import React from "react"

export const Filter = {
	ByDimension: React.lazy(() => import("./ByDimension/by-dimension.component")),
	ByGender: React.lazy(() => import("./ByGender/by-gender.component")),
	ByName: React.lazy(() => import("./ByName/by-name.component")),
	BySpecie: React.lazy(() => import("./BySpecie/by-specie.component")),
	ByStatus: React.lazy(() => import("./ByStatus/by-status.component")),
	ByType: React.lazy(() => import("./ByType/by-type.component")),
}
