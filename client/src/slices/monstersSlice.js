import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMonster = createAsyncThunk(
  'monsters/monsterStatus',
  async (character_id, thunkApi) => {
    const response = await fetch(`/characters/${character_id}`)
    const data = await response.json()
    return data
  }
)
const slice = createSlice({
  name: 'monster',
  initialState: {
        character_name: "",
        character_origin: "",
        current_hp: null,
        attack_bonus: null,
        defense_bonus: null,
  },
  reducers: {
    setMonster: (state, { payload } ) => { 
      // console.log("THIS IS THE MONSTER PAYLOAD")
      // console.log(payload)
      state.character_name = payload.character_name
      state.character_origin = payload.character_origin
      state.current_hp = payload.character_hp
      state.attack_bonus = payload.attack_bonus
      state.defense_bonus = payload.defense_bonus
    },
  },
  extraReducers: {
    [fetchMonster.fulfilled]: ( state, { payload } ) => {},
  }
})

const { setMonster } = slice.actions

export  { setMonster } 
export default slice.reducer