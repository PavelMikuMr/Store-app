import React from 'react'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import { IOutletContex } from '@/pages/Root'
import { fetchUsers } from '@/redux/slices/furnitureSlice'
import { AppDispatch, RootState } from '@/redux/store'

const Home = () => {
  const {
    onChangeCategory,
    orderSetting,
    valueForSearch,
    furnitureItems,
    isLoading,
    isMountedLayout
  } = useOutletContext<IOutletContex>()
  return (
    <>
      <Sort onChangeCategory={onChangeCategory} setOrder={orderSetting} />
      <HandleLayout
        findValue={valueForSearch}
        furnitureItems={furnitureItems}
        isLoading={isLoading}
        isMountedLayout={isMountedLayout}
      />
    </>
  )
}
export default Home
