/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ISort, FilterState } from '_types/Filter'

const initialState: FilterState = {
  pageCount: 0,
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
    setPageCount(state, action: { payload: number }) {
      state.pageCount = action.payload
    }
  }
})

export const { setCategoryId, setSortValue, setPageCount } = filterSlice.actions
export default filterSlice.reducer
