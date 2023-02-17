import { useState, useEffect, createContext, useMemo } from 'react'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'
import Header, { HeaderProps } from '@components/Header'
import Wrapper from '@components/Wrapper'
//* использование логики redux toolkit для category id
// 1) используем селектор как useContext
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '@/redux/slices/filterSlice'
import { RootState } from '@/redux/store'

export const SearchContext = createContext<HeaderProps | null>(null)

const ITEMS_URL = 'https://63dd2619367aa5a7a40a161a.mockapi.io/items'

const Home = () => {
  const { categoryId, sort } = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch()

  const onChangeCategory = (id: number) => {
    //* в dispatch передаем наши action (объект {type:some ,payload:some}) которые мы описали в сторе в reducer
    dispatch(setCategoryId(id))
  }

  const [searchValue, setSearchValue] = useState('')

  const [order, setOrder] = useState('desc')

  const [items, setItems] = useState<IFurniture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getAltItemData = async (url: string): Promise<void> => {
    setIsLoading(true)

    const property = sort.sortProperty
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

  useEffect(() => {
    getAltItemData(ITEMS_URL).catch((err) => {
      if (err && typeof err === 'string') throw new Error(err)
    })
  }, [categoryId, sort, searchValue, order])

  const searchProviderValue = useMemo(
    () => ({ searchValue, setSearchValue }),
    [searchValue, setSearchValue]
  )

  return (
    <Wrapper>
      <SearchContext.Provider value={searchProviderValue}>
        <Header />
        <Sort onChangeCategory={onChangeCategory} setOrder={(term) => setOrder(term)} />
        <HandleLayout findValue={searchValue} items={items} isLoading={isLoading} />
      </SearchContext.Provider>
    </Wrapper>
  )
}
export default Home
