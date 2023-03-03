/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import basket from './slices/basketSlice'
import furniture from './slices/furnitureSlice'
import { furnitureApi } from '@/services/furnitureApi'

export const store = configureStore({
  reducer: {
    filter,
    basket,
    furniture,
    [furnitureApi.reducerPath]: furnitureApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(furnitureApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
