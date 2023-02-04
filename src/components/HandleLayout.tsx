import React, { useEffect, useState } from 'react'
import Furniture from './Furniture'
import module from '../App.module.scss'
import IFurniture from '../types/items.interface'
import furnitureData from '../db/furniture.json'
import lampData from '../db/lamp.json'
import poofData from '../db/poof.json'
import sofaData from '../db/sofa.json'

const { handleLayout } = module

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

const HandleLayout = () => {
  const [items, setItems] = useState<IFurniture[]>([])

  const getAltItemData = async (url: string): Promise<void> => {
    const response = await fetch(url)
    const itemData = (await response.json()) as IFurniture[]
    setItems(itemData)
  }

  useEffect(() => {
    getAltItemData(ITEMS_URL).catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
      <div className={handleLayout}>
        {items.map((item: IFurniture): React.ReactNode => {
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
