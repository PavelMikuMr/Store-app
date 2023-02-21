import { useState, useEffect, createContext, useMemo } from 'react'
import Sort from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'
import Header, { HeaderProps } from '@components/Header'
import Wrapper from '@components/Wrapper'
//* использование логики redux toolkit для category id
// 1) используем селектор как useContext
import { useSelector, useDispatch } from 'react-redux'
// * использование react-query
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { instance } from '@/api/axios.api'
import { RootState } from '@/redux/store'
import { setCategoryId } from '@/redux/slices/filterSlice'
import { FurnitureService } from '@/services/furniture.service'

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
  const [isLoadingState, setIsLoadingState] = useState(true)

  /*   const getAltItemData = async (url: string): Promise<void> => {
    setIsLoadingState(true)

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
    setIsLoadingState(false)
    window.scrollTo(0, 0)
  } */
  /* 
  const fetchData = async (): Promise<void> => {
    setIsLoadingState(true)
    const checkId = !!categoryId
    const property = sort.sortProperty
    const search = searchValue || ''
    const param = checkId
      ? {
          params: {
            category: categoryId,
            sortBy: property,
            order
            // search
          }
        }
      : {
          params: {}
        }
    const request = await instance.get<IFurniture[]>('/items', param)
    setItems(request.data)
    setIsLoadingState(false)
    window.scrollTo(0, 0)
  }
 */
  const a = {
    time: 23,
    life: 'hello'
  }
  const n = {
    girl: [1, 2, 3],
    life: true
  }
  const c = { ...a, alex: n.girl }

  console.log(c)

  const { isLoading, error, data } = useQuery(
    ['repoData', categoryId, sort, searchValue, order],
    () => {
      const checkId = !!categoryId
      const property = sort.sortProperty
      const search = searchValue || ''
      const param = checkId
        ? {
            params: {
              category: categoryId,
              sortBy: property,
              order,
              ...(search ? { search: searchValue } : {})
            }
          }
        : {
            params: {
              ...(search ? { search: searchValue } : {})
            }
          }

      return FurnitureService.getAll('/items', param)
    },
    {
      onSuccess: ({ data }: { data: IFurniture[] }) => {
        setItems(data)
        window.scrollTo(0, 0)
      },
      onError: (error) => {
        alert((error as AxiosError).message)
      }
    }
  )
  // console.log(isLoading, error, data)

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
