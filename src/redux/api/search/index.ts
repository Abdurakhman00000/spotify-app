import { api as index} from ".."

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        searchTracks: builder.query<SEARCH.SearchTrackResponse, SEARCH.SearchTrackRequest>({
            query: (query) => ({
                url: "/search",
                method: "GET",
                params: {
                    q: query,
                    type: "track",
                    limit: 5
                }
            }),
            providesTags: ["search"]
        })
    })
})

export const {useSearchTracksQuery} = api