import * as path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import compression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		react(),
		compression({
			algorithm: "brotliCompress",
			ext: ".br",
		}),
	],
	resolve: {
		alias: [
			{ find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{ find: "@graphql", replacement: path.resolve(__dirname, "src/graphql") },
			{ find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
			{ find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
			{ find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
			{ find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
			{ find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
			{ find: "@context", replacement: path.resolve(__dirname, "src/context") },
			{ find: "@typings", replacement: path.resolve(__dirname, "src/typings") },
		],
	},
	build: {
		modulePreload: false,
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
			},
		},
	},
})
