/* eslint-disable no-nested-ternary */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type IFurniture from '_types/IFurniture'

type Parameters = {
  categoryId: string | number
  sortProperty: string
  searchValue: string
  order: string
}

export const furnitureApi = createApi({
  reducerPath: 'furnitureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63dd2619367aa5a7a40a161a.mockapi.io'
  }),
  endpoints: (builder) => ({
    getAllFurniture: builder.query<IFurniture[], Parameters>({
      query: ({ categoryId, sortProperty, searchValue, order }: Parameters) => {
        const checkId = !!categoryId
        const search = searchValue || ''
        const params =
          checkId && !search
            ? `/items?category=${categoryId}&sortBy=${sortProperty}&order=${order}`
            : search
            ? `/items?search=${search}&sortBy=${sortProperty}&order=${order}`
            : `/items?sortBy=${sortProperty}&order=${order}`

        return params
      }
    })
  })
})

export const { useGetAllFurnitureQuery } = furnitureApi
