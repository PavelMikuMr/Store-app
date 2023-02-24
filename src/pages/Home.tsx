import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import { IOutletContex } from '@/pages/Root'

const Home = () => {
  const { onChangeCategory, orderSetting, valueForSearch, items, isLoading } =
    useOutletContext<IOutletContex>()
  return (
    <>
      <Sort onChangeCategory={onChangeCategory} setOrder={orderSetting} />
      <HandleLayout findValue={valueForSearch} items={items} isLoading={isLoading} />
    </>
  )
}
export default Home
