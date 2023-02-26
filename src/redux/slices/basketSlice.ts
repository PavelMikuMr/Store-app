/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IBasket } from '_types/Filter'

export interface IBasketinitialState {
  totalPrice: number
  items: IBasket[]
}
const initialState: IBasketinitialState = {
  totalPrice: 0,
  items: []
}
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

export const { addItems, removeItems, clearItems, clearAllItems } = basketSlice.actions

export default basketSlice.reducer
