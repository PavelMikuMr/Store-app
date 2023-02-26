import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import basket from './slices/basketSlice'
import furniture from './slices/furnitureSlice'

export const store = configureStore({
  reducer: { filter, basket, furniture }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
