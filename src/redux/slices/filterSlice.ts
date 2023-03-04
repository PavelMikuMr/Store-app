/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ISort, FilterState } from '@type/Filter'
import { RootState } from '@/redux/store'

const initialState: FilterState = {
  searchValue: '',
  pageCount: 1,
  categoryId: 0,
  sort: {
    name: 'popular',
    sortProperty: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  // actions для обработки сортировки и фильтра
  reducers: {
    setCategoryId(state, action: { payload: number }) {
      // использовать как dispatch(setCategoryId(5)) типо сам подставит

      state.categoryId = action.payload
    },
    setSortValue(state, action: { payload: ISort }) {
      state.sort = action.payload
    },
    setSearchValue(state, action: { payload: string }) {
      state.searchValue = action.payload
    },
    setPageCount(state, action: { payload: number }) {
      state.pageCount = action.payload
    },
    setFilters(state, action: { payload: FilterState }) {
      state.pageCount = action.payload.pageCount
      state.categoryId = action.payload.categoryId
      state.sort = action.payload.sort
    }
  }
})

export const filterSelector = (state: RootState) => state.filter
export const { setCategoryId, setSortValue, setPageCount, setFilters, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
