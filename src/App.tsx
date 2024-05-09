import { useFetch } from "./hooks/useFetch"

export default function App() {
	const { data, isPending } = useFetch()

	if (isPending) console.log("loading...")
	console.log(data)

	return (
		<div className="h-screen bg-black font-serif font-bold  text-blue">
			App
		</div>
	)
}
