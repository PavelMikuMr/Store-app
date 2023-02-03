import Furniture, { FurnitureProps } from './Furniture'

import module from '../App.module.scss'

import { furnitureData } from '../db'

const { handleLayout } = module

const HandleLayout = () => {
  return (
    <>
      <h1 className='heading'>Get, Buy & Sell</h1>
      <div className={handleLayout}>
        {furnitureData.map((item: FurnitureProps, index): React.ReactNode => {
          return (
            <Furniture
              price={item.price}
              title={item.title}
              color={item.color}
              subColor={item.subColor}
              key={item.id}
            />
          )
        })}
      </div>
    </>
  )
}
export default HandleLayout
