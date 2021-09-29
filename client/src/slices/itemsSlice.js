import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'items',
  initialState: {
    entities: [
      {
        item_name: "item",
        item_level: 2
      },
      {
        item_name: "item",
        item_level: 4
      },
      {
        item_name: "item",
        item_level: 1
      },
      {
        item_name: "item",
        item_level: 7
      },
    ],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.entities.push(action.payload) 
    },
  }
})

const { addItems } = slice.actions

export { addItems } 
export default slice.reducer