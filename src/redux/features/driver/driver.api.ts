import { baseApi } from "@/redux/baseApi";

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

           availabilityUpdate: builder.mutation({
            query: ({driverId, availability }) => ({
                url: `/availability/${driverId}`,
                method: "PATCH",
                data:  {availability,}

            }),
            invalidatesTags: ["DRIVER"],
        }),
     
     


    }),
})




export const {useAddDriverMutation, useGetDriverQuery, useAvailabilityUpdateMutation,   } = driverApi;