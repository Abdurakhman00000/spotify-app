import { api as index } from "..";

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getArtists: builder.query<ARTISTS.GetArtistsResponse, ARTISTS.GetArtistsRequest>({
            query: () => ({
                url: `/artists`,
                method: "GET",
                params: {
                    ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
                }
            }),
            providesTags: ["artist"]
        })
    }) 
})

export const { useGetArtistsQuery } = api;