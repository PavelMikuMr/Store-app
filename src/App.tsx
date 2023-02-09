import { Route, Routes, RouterProvider } from 'react-router-dom'
import module from './App.module.scss'
import BasketPage from './pages/BasketPage'
import EmptyBasketPage from './pages/EmptyBasketPage'
import Skeleton from './components/HandleLayout/Skeleton'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import router from './router'

const { wrapper } = module

const App = () => {
  return <RouterProvider router={router} />
}

export default App
