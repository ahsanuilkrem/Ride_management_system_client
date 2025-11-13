
import { baseApi } from "@/redux/baseApi";

export const riderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestRider: builder.mutation({
            query: (riderData) => ({
                url: "/rides/request",
                method: "POST",
                data: riderData,
            })
        }),
        getallride: builder.query({
            query: (params) => ({
                url: "/rides",
                method: "GET",
                params: params,
            }),
        }),
        getmyHistory: builder.query({
            query: (body) => ({
                url: "/rides/myHistory",
                method: "GET",
                data:body,
            }),
            transformResponse: (response) => ({
                data: response.data,
                meta: response.meta,
            }),
        }),


    }),

})




export const { useRequestRiderMutation, useGetallrideQuery, useGetmyHistoryQuery, } = riderApi;