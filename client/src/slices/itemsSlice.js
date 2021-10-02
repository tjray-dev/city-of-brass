import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'items',
  initialState: {
    entities: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.entities.push(action.payload) 
    },
  }
})

const { addItem } = slice.actions

export { addItem } 
export default slice.reducer