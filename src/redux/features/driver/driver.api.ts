import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { DriverStatus, IDriver } from "@/types/driver.type";


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
                data: {driverStatus}
            }),
            
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
     useAvailabilityUpdateMutation, } = driverApi;