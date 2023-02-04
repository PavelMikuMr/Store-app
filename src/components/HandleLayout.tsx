import Furniture from './Furniture'

import module from '../App.module.scss'

// import { furnitureData } from '../db'

import furnitureData from '../db/furniture.json'
import lampData from '../db/lamp.json'
import poofData from '../db/poof.json'
import sofaData from '../db/sofa.json'

interface IFurniture {
  id: number
  price: number
  title: string
  imgUrl: string[]
  rating: number
}

const { handleLayout } = module

const HandleLayout = () => {
  return (
    <>
      <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
      <div className={handleLayout}>
        {poofData.map((item: IFurniture): React.ReactNode => {
          return (
            <Furniture
              price={item.price}
              title={item.title}
              imgUrl={item.imgUrl}
              key={item.title}
              rating={item.rating}
              id={item.id}
            />
          )
        })}
      </div>
    </>
  )
}
export default HandleLayout
