import { useState, useEffect } from 'react'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

export interface ISort {
  [key: string]: string
}

const Home = () => {
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState<ISort>({
    name: 'popular',
    sortProperty: 'rating'
  })

  const [items, setItems] = useState<IFurniture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getAltItemData = async (url: string): Promise<void> => {
    setIsLoading(true)
    const regex = /\W/g
    const order = !!sortType.sortProperty.match(regex)
    const trim = sortType.sortProperty.replace(/\W/g, '')

    console.log(order)
    const checkId = !!categoryId
    const response = await fetch(
      checkId
        ? `${url}?category=${categoryId}&sortBy=${trim}&order=${order ? 'asc' : 'desc'}`
        : url
    )

    const itemData = (await response.json()) as IFurniture[]
    setItems(itemData)
    setIsLoading(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getAltItemData(ITEMS_URL).catch((err) => console.error(err))
  }, [categoryId, sortType])

  const onClickCategory = (index: number) => {
    setCategoryId(index)
  }
  const onClickSort = (sortObj: ISort) => {
    setSortType(sortObj)
  }
  return (
    <>
      <Sort
        value={categoryId}
        sortValue={sortType}
        onClickCategory={onClickCategory}
        setSortValue={onClickSort}
      />
      <HandleLayout items={items} isLoading={isLoading} />
    </>
  )
}
export default Home
