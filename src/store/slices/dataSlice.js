import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  database: null,
  pagination: 30,
  filter: null,
  sortColumn: null,
  showModal: false,
  actionDataId: null,
  actionType: null,
  columnNames: null,
  editRow: null,
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
    setColumnNames: (state, action) => {
      state.columnNames = action.payload;
    },
    setEditRow: (state, action) => {
      state.editRow = action.payload;
    }
  },
})

export const { setDatabase, setPagination, setFilter, setSortColumn,
setShowModal, setActionDataId, setActionType, setColumnNames, setEditRow } = dataSlice.actions

export default dataSlice.reducer