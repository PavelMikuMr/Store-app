// -----------------------------------API----------------------
/* eslint-disable */ ', ' // @ts-ignore", "// @ts-nocheck

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
    })
  })
})

// Экспортируйте автоматически созданный хук для конечной точки запроса `getPosts`.
export const { useGetPostsQuery } = apiSlice

//todo-----------------------------Add to store----------------------------

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

//todo -----------------------------Use hook query----------------------------

import React from 'react'
import { Link } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

import { useGetPostsQuery } from '../api/apiSlice'

let PostExcerpt = ({ post }) => {
  return (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className='post-content'>{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>
        View Post
      </Link>
    </article>
  )
}

export const PostsList = () => {
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery()

  let content

  if (isLoading) {
    content = <Spinner text='Loading...' />
  } else if (isSuccess) {
    content = posts.map((post) => <PostExcerpt key={post.id} post={post} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

/* 
data: фактическое содержимое ответа от сервера. Это поле будет undefined до тех пор, пока не будет получен ответ .

isLoading: логическое значение, указывающее, делает ли этот хук в данный момент первый запрос к серверу. (Обратите внимание, что если параметры изменятся для запроса других данных, isLoading значение останется ложным.)

isFetching: логическое значение, указывающее, отправляет ли хук какой-либо запрос к серверу в данный момент.

isSuccess: логическое значение, указывающее, выполнил ли хук успешный запрос и доступны ли кешированные данные (т. е. data должно быть определено сейчас)

isError: логическое значение, указывающее, была ли ошибка в последнем запросе.
error: сериализованный объект ошибки
*/

//todo ------------------Отображение отдельных Posts--------------------
/* 
попробуем добавить еще одно определение конечной точки, которое позволит нам запрашивать одну публикацию с сервера на основе ее идентификатора. Это несколько избыточно, но позволит нам увидеть, как можно использовать RTK Query для настройки запросов запросов на основе аргументов

*/

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
export const { useGetPostsQuery, useGetPostQuery } = apiSlice

/* 
todo             Аргументы запроса и  key
В настоящее время мы <SinglePostPage>считываем одну Postзапись на state.postsоснове идентификатора. Нам нужно обновить его, чтобы вызвать новый useGetPostQueryхук, и использовать то же состояние загрузки, что и основной список
 */
import React from 'react'
import { Link } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { useGetPostQuery } from '../api/apiSlice'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content
  if (isFetching) {
    content = <Spinner text='Loading...' />
  } else if (isSuccess) {
    content = (
      <article className='post'>
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className='post-content'>{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className='button'>
          Edit Post
        </Link>
      </article>
    )
  }

  return <section>{content}</section>
}
