// Импортируйте методы RTK Query из специфической для React точки входа
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Определите наш единственный объект slice API

export const apiSlice = createApi({
  // reducer кэша ожидает добавления в `state.api` (уже по умолчанию - это необязательно)
  reducerPath: 'api',
  // Все наши запросы будут иметь URL, начинающиеся с '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  // "endpoints" представляют операции и запросы для данного сервера
  endpoints: (builder) => ({
    // Конечная точка `getPosts` - это операция "запроса", которая возвращает данные
    getPosts: builder.query({
      // URL для запроса - '/fakeApi/posts'
      query: () => '/posts'
    }),
    getPost: builder.query({
      query: (postId: string) => `/posts/${postId}`
    })
  })
})

// Экспортируйте автоматически созданный хук для конечной точки запроса `getPosts`.
export const { useGetPostsQuery, useGetPostQuery } = apiSlice
