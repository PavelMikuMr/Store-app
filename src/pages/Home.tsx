import { useState, useEffect, createContext, useMemo } from 'react'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'
import Header, { HeaderProps } from '@components/Header'
import Wrapper from '@components/Wrapper'
//* использование redux
// * useSelector == useContext (что то типо того)
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { decrement, increment } from '@/redux/slices/filterSlice'
// *  использование контекста = создание

export const SearchContext = createContext<HeaderProps | null>(null)

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

export interface ISort {
  [key: string]: string
}
const Home = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  // * Логика поиска
  const [searchValue, setSearchValue] = useState('')

  //* Сортировка по клику на значок
  const [order, setOrder] = useState('desc')

  // * Логика запроса данных с backend  и сортировка
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState<ISort>({
    name: 'popular',
    sortProperty: 'rating'
  })

  const [items, setItems] = useState<IFurniture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getAltItemData = async (url: string): Promise<void> => {
    setIsLoading(true)

    const property = sortType.sortProperty
    const search = searchValue ? `&search=${searchValue}` : ''
    const checkId = !!categoryId
    const response = await fetch(
      checkId
        ? `${url}?category=${categoryId}&sortBy=${property}&order=${order}${search}`
        : `${url}?${search}`
    )

    const itemData = (await response.json()) as IFurniture[]
    setItems(itemData)
    setIsLoading(false)
    window.scrollTo(0, 0)
  }
  // * состояние без override
  useEffect(() => {
    getAltItemData(ITEMS_URL).catch((err) => console.error(err))
  }, [categoryId, sortType, searchValue, order])

  const onClickCategory = (index: number) => {
    setCategoryId(index)
  }
  const onClickSort = (sortObj: ISort) => {
    setSortType(sortObj)
  }

  const searchProviderValue = useMemo(
    () => ({ searchValue, setSearchValue }),
    [searchValue, setSearchValue]
  )
  return (
    <Wrapper>
      <SearchContext.Provider value={searchProviderValue}>
        <Header />
        <Sort
          value={categoryId}
          sortValue={sortType}
          onClickCategory={onClickCategory}
          setSortValue={onClickSort}
          setOrder={setOrder}
        />
        <HandleLayout findValue={searchValue} items={items} isLoading={isLoading} />
      </SearchContext.Provider>
      <div>
        <div className='flex gap-5'>
          <button
            className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default Home
