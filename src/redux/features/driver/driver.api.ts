import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { DriverStatus, IDriver, IDriverProfile, IDriverRideHistoryQuery, IDriverRideHistoryResponse, IUpdateMyDriverProfile } from "@/types/driver.type";


export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDriver: builder.mutation({
            query: (driverData) => ({
                url: "/driver/create",
                method: "POST",
                data: driverData,
            }),
            invalidatesTags: ["DRIVER"]
        }),
        getDriver: builder.query({
            query: () => ({
                url: "/driver",
                method: "GET",
            }),
            providesTags: ["DRIVER"],
            transformResponse: (response) => response.data
        }),

        updateDriverStatus: builder.mutation<
            IResponse<IDriver>,
            { driverId: string; driverStatus: DriverStatus }
        >
            ({
                query: ({ driverId, driverStatus }) => ({
                    url: `/driver/status/${driverId}`,
                    method: "PATCH",
                    data: { driverStatus }
                }),

            }),

        updateMyProfile: builder.mutation<
            IResponse<IDriverProfile>,
            IUpdateMyDriverProfile
        >({
            query: (payload) => ({
                url: "/driver/update-my-profile",
                method: "PATCH",
                data: payload,
            }),
            invalidatesTags: ["DRIVER"],
        }),

        getDriverMyProfile: builder.query<IDriverProfile, void>({
            query: () => ({
                url: "/driver/my-profile",
                method: "GET",
            }),
            providesTags: ["DRIVER"],
            transformResponse: (response: IResponse<IDriverProfile>) => response.data,
        }),

        getDriverRideHistory: builder.query<
            IResponse<IDriverRideHistoryResponse>,
            IDriverRideHistoryQuery
        >({
            query: (params: IDriverRideHistoryQuery = {}) => ({
                url: "/driver/my-ride-history",
                method: "GET",
                params,
            }),
            providesTags: ["DRIVER"],
        }),

        availabilityUpdate: builder.mutation({
            query: ({ driverId, availability }) => ({
                url: `/availability/${driverId}`,
                method: "PATCH",
                data: { availability, }

            }),
            invalidatesTags: ["DRIVER"],
        }),




    }),
})




export const {
    useAddDriverMutation,
    useGetDriverQuery,
    useUpdateDriverStatusMutation,
    useUpdateMyProfileMutation,
    useGetDriverMyProfileQuery,
    useAvailabilityUpdateMutation,
    useGetDriverRideHistoryQuery,
 } = driverApi;