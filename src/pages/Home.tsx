import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { HandleLayout, Sort } from '@components_i'
import { IOutlet } from '@type_i'

const Home = () => {
  const {
    onChangeCategory,
    orderSetting,
    valueForSearch,
    furnitureItems,
    isLoading,
    isMountedLayout,
    isFetching
  } = useOutletContext<IOutlet>()
  return (
    <>
      <Sort onChangeCategory={onChangeCategory} setOrder={orderSetting} />
      <HandleLayout
        findValue={valueForSearch}
        furnitureItems={furnitureItems}
        isLoading={isLoading}
        isMountedLayout={isMountedLayout}
        isFetching={isFetching}
      />
    </>
  )
}
export default Home
