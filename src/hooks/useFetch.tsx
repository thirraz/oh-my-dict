import { useQuery } from "@tanstack/react-query"

async function fetchData() {
	const res = await fetch(
		"https://api.dictionaryapi.dev/api/v2/entries/en/error"
	)

	const data = await res.json()

	return data
}

export function useFetch() {
	const { data, isPending } = useQuery({
		queryKey: ["word"],
		queryFn: fetchData
	})

	return { data, isPending }
}
