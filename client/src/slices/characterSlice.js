import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'character',
  initialState: {
    character_name: "",
    character_origin: "",
    current_hp: 0,
    attack_bonus: 0,
    defense_bonus: 0,
  },
  reducers: {
    name: (state, action) => {
      state.character_name =  action.payload 
    },
    origin: (state, action) => {
      state.character_origin = action.payload
    },
    currentHP: (state, action) => {
      state.current_hp = action.payload
    },
    incrementAttack: (state, action) => {
      state.attack_bonus += action.payload
    },
    decrementAttack: (state, action) => {
      state.attack_bonus -= action.payload
    },
    incrementDefense: (state, action) => {
      state.defense_bonus += action.payload
    },
    decrementDefense: (state, action) => {
      state.defense_bonus -= action.payload
    },

  }
})

const { name, origin, currentHP, incrementAttack, decrementAttack, incrementDefense, decrementDefense } = slice.actions

export  { name, origin, currentHP, incrementAttack, decrementAttack, incrementDefense, decrementDefense } 
export default slice.reducer