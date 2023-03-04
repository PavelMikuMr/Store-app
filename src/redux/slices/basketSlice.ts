/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { IBasket } from '@type/Filter'
import { RootState } from '../store'
import getItemsFromLS from '@/utils/getItemsFromLS'

const initialState = getItemsFromLS()

interface ExistedItems extends IBasket {
  count: number
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItems(state, action: { payload: IBasket }) {
      const itemIsExist = state.items.find(
        (item) => item.id === action.payload.id
      ) as ExistedItems

      if (itemIsExist) {
        itemIsExist.count += 1
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      if (state.items.length > 0) {
        state.totalPrice = state.items.reduce((a, val) => {
          return val.price * ('count' in val ? val.count : 1) + a
        }, 0)
      }
    },

    removeItems(state, action: { payload: IBasket }) {
      const itemIsExist = state.items.find(
        (item) => item.id === action.payload.id
      ) as ExistedItems
      if (itemIsExist.count > 1) {
        itemIsExist.count -= 1
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id)
      }
      if (state.items.length > 0) {
        state.totalPrice = state.items.reduce((a, val) => {
          return val.price * ('count' in val ? val.count : 1) + a
        }, 0)
      } else {
        state.totalPrice = 0
      }
    },

    clearItems(state, action: { payload: IBasket }) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id)
      if (state.items.length > 0) {
        state.totalPrice = state.items.reduce((a, val) => {
          return val.price * ('count' in val ? val.count : 1) + a
        }, 0)
      } else {
        state.totalPrice = 0
      }
    },
    clearAllItems(state) {
      state.items = []
      state.totalPrice = 0
    }
  }
})

export const basketSelector = (state: RootState) => {
  return state.basket
}
// itemSelectorById(5) => (state) => state
export const itemSelectorById = (id: number) => (state: RootState) =>
  state.basket.items.find((obj) => obj.id === id)

export const { addItems, removeItems, clearItems, clearAllItems } = basketSlice.actions

export default basketSlice.reducer
