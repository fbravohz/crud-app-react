import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  database: null,
  pagination: 5,
  filter: null,
  sortcolumn: null,
  showModal: false,
  actionDataId: null,
  actionType: null
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
    },
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
    setActionDataId: (state, action) => {
      state.actionDataId = action.payload;
    },
    setActionType: (state, action) => {
      state.actionType = action.payload;
    },
  },
})

export const { setDatabase, setPagination, setFilter, setSortColumn, setShowModal, setActionDataId, setActionType } = dataSlice.actions

export default dataSlice.reducer