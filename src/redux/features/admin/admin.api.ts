// import { baseApi } from "@/redux/baseApi";


// export const adminApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//     getDashboardStats: builder.query<AnyObject, void>({
//       query: () => ({ url: "/stats/dashboard", method: "GET" }),
//       transformResponse: (res: IResponse<AnyObject>) => res.data,
//       providesTags: ["STATS"],
//     }),

// })