/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import filter from './slices/filterSlice'
import basket from './slices/basketSlice'
import furniture from './slices/furnitureSlice'
import { furnitureApi } from '@/services/furnitureApi'
import { apiSlice } from '@/features/api/apiSlice'

export const store = configureStore({
  reducer: {
    filter,
    basket,
    furniture,
    [furnitureApi.reducerPath]: furnitureApi.reducer
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(furnitureApi.middleware)
  }
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
