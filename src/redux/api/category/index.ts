import {api as index} from "..";

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query<CATEGORY.GetCategoriesResponse, CATEGORY.GetCategoriesRequest>({
            query: (query) => ({
                url: `/browse/categories`,
                method: "GET",
                params: {
                    q: query,
                    limit: 50
                }
            }),
            providesTags: ["category"],
        }),

        getCategoryBiId: builder.query<CATEGORY.GetCategoryBiIdResponse, CATEGORY.GetCategoryBiIdRequest>({
                query: (category_id) => ({
                    url: `/browse/categories/${category_id}`,
                    method: "GET",
                }),
                providesTags: ["category"]
        })
    })
})


export const {useGetCategoryQuery, useGetCategoryBiIdQuery} = api;