// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './features/axiosBaseQuery'



export const baseApi = createApi({
  reducerPath: 'baseApi',
    baseQuery: axiosBaseQuery(),

  tagTypes: ["USER", "DRIVER", "RIDER", "STATS"],
  endpoints: () => ({}),

})




