
import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IRide, RideStatus } from "@/types/ride.type";

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
                data: body,
            }),
            transformResponse: (response) => ({
                data: response.data,
                meta: response.meta,
            }),
        }),
        updateRideStatus: builder.mutation<
            IResponse<IRide>,
            { rideId: string; rideStatus: RideStatus }
        >({
            query: ({ rideId, rideStatus }) => ({
                url: `/rides/rideStatus/${rideId}`,
                method: "PATCH",
                data: { rideStatus },
            }),
            invalidatesTags: ["RIDER"],
        }),


    }),

})




export const { 
    useRequestRiderMutation, 
    useGetallrideQuery, 
    useGetmyHistoryQuery,
    useUpdateRideStatusMutation,
  } = riderApi;