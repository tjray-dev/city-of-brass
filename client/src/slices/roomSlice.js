import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'room',
  initialState: {
    character_id: null,
    monster_id: null,
  },
  reducers: {
    populateCharacter: ( state, { payload }) => {
      state.character_id = payload
    },
    populateMonster: ( state, { payload }) => {
      state.monster_id = payload
    }
  }
})

const { populateCharacter, populateMonster } = slice.actions

export { populateCharacter, populateMonster } 
export default slice.reducer