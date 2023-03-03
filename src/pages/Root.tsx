import React from 'react'
import qs from 'qs'
import { useWhyDidYouUpdate } from 'ahooks'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { sortBy } from '@components/Sort'
import IFurniture from '_types/IFurniture'
import Header from '@components/Header'
import Wrapper from '@components/Wrapper'
import { ISort } from '_types/Filter'
import { RootState } from '@/redux/store'
import { setCategoryId, setFilters, filterSelector } from '@/redux/slices/filterSlice'
import { setFurniture } from '@/redux/slices/furnitureSlice'
import { useGetAllFurnitureQuery } from '@/services/furnitureApi'
import { basketSelector } from '@/redux/slices/basketSlice'

export interface IOutletContex {
  onChangeCategory: (id: number) => void
  orderSetting: (term: string) => void
  valueForSearch: string
  furnitureItems: IFurniture[]
  isLoading: boolean
  isMountedLayout: boolean
  isFetching: boolean
}

const Root = () => {
  const [order, setOrder] = React.useState('desc')
  const curRef = React.useRef(false)

  const navigate = useNavigate()
  const isMounted = React.useRef(false)
  const isLayout = React.useRef(false)
  const { categoryId, sort, pageCount, searchValue } = useSelector(filterSelector)
  const { items, totalPrice } = useSelector(basketSelector)
  const { furnitureItems } = useSelector((state: RootState) => state.furniture)
  const dispatch = useDispatch()

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])

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
          sort: sort as ISort,
          searchValue: ''
        })
      )
    }
    curRef.current = true
  }, [])

  const {
    data,
    error: err,
    isLoading,
    isSuccess: success,
    isFetching
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

      alert('Error is occuring')
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

  const outletContext = {
    onChangeCategory,
    orderSetting: (term: string) => setOrder(term),
    valueForSearch: searchValue,
    furnitureItems,
    isLoading,
    isMountedLayout: isLayout.current,
    isFetching
  }
  return (
    <Wrapper>
      <Header items={items} totalPrice={totalPrice} />
      <Outlet context={outletContext} />
    </Wrapper>
  )
}
export default Root
