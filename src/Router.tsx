import React from "react"
import { App } from "./App"
import { createBrowserRouter, Navigate } from "react-router-dom"

const Characters = React.lazy(() => import("@pages/Characters"))
const Character = React.lazy(() => import("@pages/Character"))
const Locations = React.lazy(() => import("@pages/Locations"))
const Location = React.lazy(() => import("@pages/Location"))
const Episodes = React.lazy(() => import("@pages/Episodes"))
const Episode = React.lazy(() => import("@pages/Episode"))
const NotFound = React.lazy(() => import("@pages/NotFound"))

// import Characters from "@pages/Characters"
// import Character from "@pages/Character"
// import Locations from "@pages/Locations"
// import Location from "@pages/Location"
// import Episodes from "@pages/Episodes"
// import Episode from "@pages/Episode"
// import NotFound from "@pages/NotFound"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Navigate to="characters" replace /> },
			{
				path: "characters",
				children: [
					{ index: true, element: <Characters /> },
					{ path: ":id", element: <Character /> },
				],
			},
			{
				path: "locations",
				children: [
					{ index: true, element: <Locations /> },
					{ path: ":id", element: <Location /> },
				],
			},
			{
				path: "episodes",
				children: [
					{ index: true, element: <Episodes /> },
					{ path: ":id", element: <Episode /> },
				],
			},
			{
				path: "404",
				element: <NotFound />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
])
