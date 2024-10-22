import {api as index} from ".."


const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getPlayList: builder.query<PLAYLIST.GetPlayListResponse, PLAYLIST.GetPlayListRequest>({
            query: () => ({
                url: `/me/playlists`,
                method: "GET",
            }),
            providesTags: ["playlist"],
        }),
        getPlayListById: builder.query<PLAYLIST.GetPlayListByIdResponse, PLAYLIST.GetPlayListByIdRequest>({
            query: (playlist_Id) => ({
                url: `/playlists/${playlist_Id}`,
                method: "GET",
            }),
            providesTags: ["playlist"],
        })
    })
})


export const {useGetPlayListQuery, useGetPlayListByIdQuery} = api