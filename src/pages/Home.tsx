import { useState, useEffect, createContext, useMemo } from 'react'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'
import Header, { HeaderProps } from '@components/Header'
import Wrapper from '@components/Wrapper'

// * 1 использование контекста = создание

export const SearchContext = createContext<HeaderProps | null>(null)

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

export interface ISort {
  [key: string]: string
}

const Home = () => {
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
    // const regex = /\W/g
    // const order = !!sortType.sortProperty.match(regex)
    // const trim = sortType.sortProperty.replace(/\W/g, '')
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
  // * 2 обертка того где нужен этот контекст
  // * 3 логика контекста - передаем туда объект значений о котором будут знать все child этого компонента
  // * 4 в том месте где нужно применить контекст используем хук const value = useContext(SearchContext)
  // * 5 use memo нужен для того чтобы кэшировать  вычесленное значение  и если данных не изменили а функция снова вызвана он просто  подставит закешированное значение 1- это функция которая должна запускаться от измения аргуементов - если нет то просто подставит старые 2 - сами аргументы за котороыми следить
  // * здесь возвращает объект и следит за сотоянием аргументов

  const searchProviderValue = useMemo(
    () => ({ searchValue, setSearchValue }),
    [searchValue, setSearchValue]
  )
  return (
    <Wrapper>
      <SearchContext.Provider value={searchProviderValue}>
        {/* <Header searchValue={searchValue} setSearchValue={setSearchValue} /> */}
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
    </Wrapper>
  )
}
export default Home
