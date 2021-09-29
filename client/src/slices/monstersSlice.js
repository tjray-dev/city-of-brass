import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'monster',
  initialState: {
        character_name: "Monster Name",
        character_origin: "Monster Origin",
        current_hp: 100,
        attack_bonus: 3,
        defense_bonus: 5,
  },
  reducers: {
    addMonster: (state, action) => {
      state.monsters.entities.push(action.payload) 
    },
  }
})

const { addMonster } = slice.actions

export  { addMonster } 
export default slice.reducer