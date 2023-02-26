import React from 'react'
// * сохранение параметров в URL + react useNavigate
import qs from 'qs'
import { Outlet, useNavigate } from 'react-router-dom'

import { sortBy } from '@components/Sort'
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
import { setFurniture } from '@/redux/slices/furnitureSlice'
import { FurnitureService } from '@/services/furniture.service'
import { useGetAllFurnitureQuery } from '@/services/furnitureApi'

export interface IOutletContex {
  onChangeCategory: (id: number) => void
  orderSetting: (term: string) => void
  valueForSearch: string
  furnitureItems: IFurniture[]
  isLoading: boolean
  isMountedLayout: boolean
}

export const SearchContext = React.createContext<HeaderProps | null>(null)

const Root = () => {
  const navigate = useNavigate()
  const isMounted = React.useRef(false)
  const isLayout = React.useRef(false)
  const { categoryId, sort, pageCount } = useSelector((state: RootState) => state.filter)

  const { furnitureItems } = useSelector((state: RootState) => state.furniture)
  const dispatch = useDispatch()

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }

  const [searchValue, setSearchValue] = React.useState('')

  const [order, setOrder] = React.useState('desc')

  const curRef = React.useRef(false)

  React.useEffect(() => {
    if (window.location.search) {
      const search = window.location.search.replace(/\?/g, '')
      const params = qs.parse(search)
      if (
        'categoryId' in params &&
        typeof params.category === 'string' &&
        Number.isNaN(parseInt(params.category, 10))
      ) {
        params.categoryId = '0'
      }
      const sort = sortBy.find((obj) => obj.sortProperty === params.sort)
      dispatch(
        setFilters({
          pageCount: Number(params.page),
          categoryId: Number(params.category),
          sort: sort as ISort
        })
      )
    }
    curRef.current = true
  }, [])

  // const { isLoading } = useQuery(
  //   ['repoData', categoryId, sort, searchValue, order],
  //   () => {
  //     const checkId = !!categoryId
  //     const property = sort.sortProperty
  //     const search = searchValue || ''
  //     const param =
  //       checkId && !search
  //         ? {
  //             params: {
  //               category: categoryId,
  //               sortBy: property,
  //               order
  //             }
  //           }
  //         : {
  //             params: {
  //               ...(search ? { search: searchValue } : {}),
  //               sortBy: property,
  //               order
  //             }
  //           }

  //     return curRef.current ? FurnitureService.getAll('/items', param) : {}
  //   },
  //   curRef.current
  //     ? {
  //         onSuccess: ({ data }: { data: IFurniture[] }) => {
  //           console.log('state fur items onsuccess:', data)
  //           dispatch(setFurniture(data))
  //           window.scrollTo(0, 0)
  //         },
  //         onError: (err: any) => {
  //           dispatch(setFurniture([]))
  //           alert((err as AxiosError).message)

  //           console.log(err)
  //         }
  //       }
  //     : {}
  // )

  const {
    data,
    error: err,
    isLoading,
    isSuccess: success
  } = useGetAllFurnitureQuery({
    categoryId,
    sortProperty: sort.sortProperty,
    searchValue,
    order
  })

  React.useEffect(() => {
    if (success) {
      if (data) {
        dispatch(setFurniture(data))
        window.scrollTo(0, 0)
        isLayout.current = true
      }
    } else if (err) {
      dispatch(setFurniture([]))
      // alert((err))
    }
  }, [data])

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort: sort.sortProperty,
        category: categoryId,
        page: pageCount
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [sort.sortProperty, pageCount, categoryId])

  const searchProviderValue = React.useMemo(
    () => ({ searchValue, setSearchValue }),
    [searchValue, setSearchValue]
  )

  const outletContext = {
    onChangeCategory,
    orderSetting: (term: string) => setOrder(term),
    valueForSearch: searchValue,
    furnitureItems,
    isLoading,
    isMountedLayout: isLayout.current
  }

  return (
    <SearchContext.Provider value={searchProviderValue}>
      <Wrapper>
        <Header />
        <Outlet context={outletContext} />
      </Wrapper>
    </SearchContext.Provider>
  )
}
export default Root
