import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'skills',
  initialState: {
    entities: []
  },
  reducers: {
    addSkills: ( state, { payload }) => {
      state.entities = payload
    }
  }
})

const { addSkills } = slice.actions

export { addSkills } 
export default slice.reducer