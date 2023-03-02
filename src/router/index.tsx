import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@pages/ErrorPage'
import BasketPage from '@pages/BasketPage'
import EmptyBasketPage from '@pages/EmptyBasketPage'
import LoginPage from '@pages/LoginPage'
import Root from '@/pages/Root'
import Home from '@/pages/Home'
import RouteId from './RouteId'

const router = createBrowserRouter([
  {
    path: '/',
    id: 'Root',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        id: 'Home',
        element: <Home />
      },
      {
        path: '/basket',
        id: 'BasketPage',
        element: <BasketPage />
      },
      {
        path: '/emptyBasket',
        id: 'EmptyBasketPage',
        element: <EmptyBasketPage />
      },
      {
        path: '/:id',
        id: 'BasketId',
        element: <RouteId />
      }
    ]
  },
  {
    path: '/login',
    id: 'LoginPage',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

export default router
