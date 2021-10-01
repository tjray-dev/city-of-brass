import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cityOfBrassApi = createApi({
  reducerPath: 'cityOfBrassApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getItem: builder.query({
      query: (id) => `items/${id}}`,
    }),
  }),
})

export const { useGetItemQuery } = cityOfBrassApi