/* eslint-disable no-param-reassign */
import IFurniture from '_types/IFurniture'
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

const USER_API = 'https://jsonplaceholder.typicode.com/users'
interface User {
  id: number
  name: string
  username: string
  email: string
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>(USER_API)
  return response.data
})

const initialState: { furnitureItems: IFurniture[]; users: User[] } = {
  furnitureItems: [],
  users: []
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
  },
  // extraReducers: {
  //   [fetchUsers.fulfilled]: (state, { payload }) => {
  //     console.log(current(state))
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users.push(...payload)
      console.log(current(state))
    })
  }
})

export const { setFurniture } = furnitureSlice.actions

export default furnitureSlice.reducer
