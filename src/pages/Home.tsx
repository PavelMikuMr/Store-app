import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import { IOutletContex } from '@/pages/Root'

const Home = () => {
  const { onChangeCategory, orderSetting, valueForSearch, furnitureItems, isLoading } =
    useOutletContext<IOutletContex>()
  return (
    <>
      <Sort onChangeCategory={onChangeCategory} setOrder={orderSetting} />
      <HandleLayout
        findValue={valueForSearch}
        furnitureItems={furnitureItems}
        isLoading={isLoading}
      />
    </>
  )
}
export default Home
