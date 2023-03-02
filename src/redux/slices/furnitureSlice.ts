import IFurniture from '_types/IFurniture'
import { createSlice } from '@reduxjs/toolkit'

const initialState: { furnitureItems: IFurniture[] } = {
  furnitureItems: []
}

export const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    setFurniture(state, action: { payload: IFurniture[] }) {
      if (action.payload) {
        state.furnitureItems = action.payload
      } else {
        state.furnitureItems = []
      }
    }
  }
})

export const { setFurniture } = furnitureSlice.actions

export default furnitureSlice.reducer
