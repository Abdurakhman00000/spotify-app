import {api as index} from "..";

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getAlbum: builder.query<ALBUM.GetAlbumResponse, ALBUM.GetAlbumRequest>({
            query: () => ({
                url: `/albums`,
                method: "GET",
                params: {
                    ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
                }
            }),

            providesTags: ["album"]
        })
    })
})

export const { useGetAlbumQuery } = api;