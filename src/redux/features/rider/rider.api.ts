
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
                url: "rides/myHistory",
                method: "GET",
                data: body,
            }),
            transformResponse: (response) => ({
                data: response.data,
                meta: response.meta,
            }),
        }),
        updateRideStatus: builder.mutation<IResponse<IRide>, { rideId: string; rideStatus: RideStatus }>({
            query: ({ rideId, rideStatus }) => ({
                url: `/rides/rideStatus/${rideId}`,
                method: "PATCH",
                data: { rideStatus },
            }),
            invalidatesTags: ["RIDER"],
        }),

        cancelRide: builder.mutation<IResponse<IRide>, { rideId: string }>({
            query: ({ rideId }) => ({
                url: `/rides/cancel/${rideId}`,
                method: "PATCH",
                data: { rideStatus: "cancelled_by_rider" as RideStatus },
            }),
            invalidatesTags: ["RIDER"],
        }),

        getActiveRider: builder.query<IRide | null, void>({
            query: () => ({
                url: "/rides/myHistory",
                method: "GET",
            }),
            providesTags: ["RIDER"],
            transformResponse: (response: IResponse<IRide[]>) => {
                const active = (response.data || []).find((r) =>
                    ["requested", "accepted", "picked_up", "in_transit"].includes(
                        r.status
                    )
                );
                return active ?? null;
            },
        }),


    }),
})




export const {
    useRequestRiderMutation,
    useGetallrideQuery,
    useGetmyHistoryQuery,
    useUpdateRideStatusMutation,
    useCancelRideMutation,
    useGetActiveRiderQuery
} = riderApi;