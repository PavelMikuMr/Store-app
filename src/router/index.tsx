import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '@/pages/Root'
import Home from '@/pages/Home'
import { Spinner } from '@/components/Spinner'
// подгрузка только в нужный момент
const BasketPage = React.lazy(() => import('@pages/BasketPage'))
const EmptyBasketPage = React.lazy(() => import('@pages/EmptyBasketPage'))
const LoginPage = React.lazy(() => import('@pages/LoginPage'))
const ErrorPage = React.lazy(() => import('@pages/ErrorPage'))

const router = createBrowserRouter([
  {
    path: '/',
    id: 'Root',
    element: <Root />,
    errorElement: (
      <Suspense fallback={<Spinner />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        id: 'Home',
        element: <Home />
      },
      {
        path: '/basket',
        id: 'BasketPage',
        element: (
          <Suspense fallback={<Spinner />}>
            <BasketPage />
          </Suspense>
        )
      },
      {
        path: '/emptyBasket',
        id: 'EmptyBasketPage',
        element: (
          <Suspense fallback={<Spinner />}>
            <EmptyBasketPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/login',
    id: 'LoginPage',
    element: (
      <Suspense fallback={<Spinner />}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />
  }
])

export default router
