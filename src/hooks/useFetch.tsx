import { useQuery } from "@tanstack/react-query"
import { fetchWord } from "../features/dict/fetchWord"
import { API_URL } from "../helpers/constants"

export function useFetch() {
	const { data, isPending } = useQuery({
		queryKey: ["word"],
		queryFn: () => fetchWord(API_URL)
	})

	return { data, isPending }
}
