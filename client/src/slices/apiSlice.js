import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getItem: builder.query({
      query: (id) => `items/${id}}`,
      transformResponse: (response) => response.data,
    }),
  }),
})

export const { useGetItemQuery } = apiSlice