import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  db: null,
  pagination: 5,
  filter: null,
  sortcolumn: null,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer