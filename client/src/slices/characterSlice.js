import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCharacter = createAsyncThunk(
  'characters/characterStatus',
  async (character_id, thunkApi) => {
    const response = await fetch(`/characters/${character_id}`)
    const data = await response.json()
    return data
  }
)

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
    name: ( state, { payload } ) => {
      state.character_name = payload.character_name
    },
    origin: ( state, { payload } ) => {
      state.character_origin = payload.character_origin
    },
    setCharacter: (state, { payload } ) => {
      state.character_name = payload.character_name
      state.character_origin = payload.character_origin
      state.current_hp = payload.character_hp
      state.attack_bonus = payload.attack_bonus
      state.defense_bonus = payload.defense_bonus
    }
  },
    extraReducers: {
      [fetchCharacter.fulfilled]: (state, { payload } ) => {},
    }
})

const { name, origin, setCharacter } = slice.actions

export  { name, origin, setCharacter } 
export default slice.reducer