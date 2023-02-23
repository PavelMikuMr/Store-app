import React from 'react'
// * сохранение параметров в URL + react useNavigate
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import Sort, { sortBy } from '@components/Sort'
import HandleLayout from '@components/HandleLayout'
import IFurniture from '_types/IFurniture'
import Header, { HeaderProps } from '@components/Header'
import Wrapper from '@components/Wrapper'
import { useSelector, useDispatch } from 'react-redux'
import { ISort } from '_types/Filter'
// * использование react-query
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { RootState } from '@/redux/store'
import { setCategoryId, setFilters } from '@/redux/slices/filterSlice'
import { FurnitureService } from '@/services/furniture.service'

export const SearchContext = React.createContext<HeaderProps | null>(null)

const Home = () => {
  const navigate = useNavigate()
  const isMounted = React.useRef(false)

  const { categoryId, sort, pageCount } = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch()

  const onChangeCategory = (id: number) => {
    //* в dispatch передаем наши action (объект {type:some ,payload:some}) которые мы описали в сторе в reducer
    dispatch(setCategoryId(id))
  }

  const [searchValue, setSearchValue] = React.useState('')

  const [order, setOrder] = React.useState('desc')

  const [items, setItems] = React.useState<IFurniture[]>([])

  const curRef = React.useRef(false)

  React.useEffect(() => {
    if (window.location.search) {
      const search = window.location.search.replace(/\?/g, '')
      const params = qs.parse(search)
      if (
        'categoryId' in params &&
        typeof params.categoryId === 'string' &&
        Number.isNaN(parseInt(params.categoryId, 10))
      ) {
        params.categoryId = '0'
      }
      const sort = sortBy.find((obj) => obj.sortProperty === params.sortProperty)
      dispatch(
        setFilters({
          pageCount: Number(params.pageCount),
          categoryId: Number(params.categoryId),
          sort: sort as ISort
        })
      )
    } else {
      dispatch(
        setFilters({
          pageCount: 1,
          categoryId: 0,
          sort: {
            name: 'popular',
            sortProperty: 'rating'
          }
        })
      )
    }
    curRef.current = true
  }, [])

  const { isLoading } = useQuery(
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

      return curRef.current ? FurnitureService.getAll('/items', param) : {}
    },
    curRef.current
      ? {
          onSuccess: ({ data }: { data: IFurniture[] }) => {
            setItems(data)
            window.scrollTo(0, 0)
          },
          onError: (error: any) => {
            alert((error as AxiosError).message)
          }
        }
      : {}
  )

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [sort.sortProperty, pageCount, categoryId])

  const searchProviderValue = React.useMemo(
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
