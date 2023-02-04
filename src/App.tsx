import { useState } from 'react'

import styles from './App.style'

import module from './App.module.scss'

import HandleLayout from './components/HandleLayout'

import LoginPage from './pages/LoginPages/LoginPage'
import BasketPage from './pages/BinPage/BasketPage'

import Header from './components/Header'
import Sort from './components/Sort'
import Pizza from './components/Pizza'

const { wrapper } = module

const App = () => {
  return (
    <div className='App'>
      <div className={wrapper}>
        <Header />
        <BasketPage />
        {/* <Sort /> */}
        {/* <HandleLayout /> */}
        {/* <Pizza title='name' /> */}
        {/* <LoginPage /> */}
      </div>
    </div>
  )
}

export default App
