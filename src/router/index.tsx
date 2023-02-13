import { createBrowserRouter } from 'react-router-dom'
import Home from '@pages/Home'
import ErrorPage from '@pages/ErrorPage'
import BasketPage from '@pages/BasketPage'
import EmptyBasketPage from '@pages/EmptyBasketPage'
import Header from '@components/Header'
import Wrapper from '@components/Wrapper'
import LoginPage from '@pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    id: 'Homepage',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/basket',
    id: 'BasketPage',
    element: (
      <Wrapper>
        <Header />
        <BasketPage />
      </Wrapper>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/emptyBasket',
    id: 'EmptyBasketPage',
    element: (
      <Wrapper>
        <Header />
        <EmptyBasketPage />
      </Wrapper>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    id: 'LoginPage',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
])

export default router
