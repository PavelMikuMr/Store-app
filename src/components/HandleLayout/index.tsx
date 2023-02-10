import React, { useEffect, useState } from 'react'
import IFurniture from '@types/IFurniture'
import Furniture from '@components/Furniture'
import $ from '@common/HandleLayout.module.scss'
import Skeleton from './Skeleton'

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

const HandleLayout = () => {
  const [items, setItems] = useState<IFurniture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getAltItemData = async (url: string): Promise<void> => {
    const response = await fetch(url)

    const itemData = (await response.json()) as IFurniture[]
    setItems(itemData)
    setIsLoading(false)
  }

  useEffect(() => {
    getAltItemData(ITEMS_URL).catch((err) => console.error(err))
  }, [])

  const renderSkeleton = (): React.ReactNode => {
    return [...new Array(6).fill(0).map((v, i) => i + 1)].map((item) => {
      return <Skeleton key={item} />
    })
  }
  const renderItems = () => {
    return items.map((item: IFurniture): React.ReactNode => {
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
    })
  }
  return (
    <>
      <h1 className='heading text-center lg:text-left'>Get, Buy & Sell</h1>
      <div className={$.handleLayout}>{isLoading ? renderSkeleton() : renderItems()}</div>
    </>
  )
}
export default HandleLayout
