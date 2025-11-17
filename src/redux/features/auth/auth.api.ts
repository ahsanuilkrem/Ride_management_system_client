import { baseApi } from "@/redux/baseApi";



export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),
        userInfo: builder.query({
            query: (params) => ({
                url: "/user/me",
                method: "GET",
                params,
            }),
            providesTags: ["USER"],
        }),

        allUser: builder.query({
            query: (params) => ({
                url: "/user/all-users",
                method: "GET",
                params: params
            }),
            providesTags: ["USER"],
            transformResponse: (response) => response.data,
        }),
        updateUser: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/user/updateUser/${id}`,
                method: "PATCH",
                 data: payload,

            }),
            invalidatesTags: ["USER"],
        }),
        resetPassword: builder.mutation({
            query: (params) => ({
                url: "/auth/reset-password",
                method: "PATCH",
                params,
            }),
            invalidatesTags: ["USER"],
        }),
        changePassword: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/change-password",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"],
        }),
        setPassword: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/set-password",
                method: "POST",
                data: userInfo,
            }),
            invalidatesTags: ["USER"],
        }),


    }),
})




export const {
    useRegisterMutation, useLoginMutation, useUserInfoQuery,
    useLogoutMutation, useAllUserQuery,
    useUpdateUserMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
    useSetPasswordMutation,
} = authApi;