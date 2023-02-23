import { useState, createContext, useMemo } from 'react'
import qs from 'qs'
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
import { RootState } from '@/redux/store'
import { setCategoryId } from '@/redux/slices/filterSlice'
import { FurnitureService } from '@/services/furniture.service'

export const SearchContext = createContext<HeaderProps | null>(null)

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
