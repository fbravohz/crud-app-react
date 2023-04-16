import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  database: null,
  pagination: 5,
  filter: null,
  sortcolumn: null,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDatabase: (state, action) => {
      state.database = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortColumn: (state, action) => {
      state.sortColumn = action.payload;
    }
  },
})

export const { setDatabase, setPagination, setFilter, setSortColumn } = dataSlice.actions

export default dataSlice.reducer