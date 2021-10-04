import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'items',
  initialState: {
    entities: [],
  },
  reducers: {
    addItems: (state, { payload }) => {
      state.entities = payload
    },
  }
})

const { addItems } = slice.actions

export { addItems } 
export default slice.reducer