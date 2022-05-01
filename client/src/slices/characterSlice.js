import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCharacter = createAsyncThunk(
  'character/characterStatus',
  async (character_id, thunkApi) => {
    const response = await fetch(`/characters/${character_id}`)
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'character',
  initialState: {
    name: "",
    charType: 0,
    mind: 0,
    body: 0,
    spirit: 0,
  },
  reducers: {},
    extraReducers: {
      [fetchCharacter.fulfilled]: (state, { payload } ) => {
        state.name = payload.character_name
        state.charType = payload.character_type
        state.mind = payload.mind
        state.body = payload.body
        state.spirit = payload.spirit
      },
    }
})

const { setEnemy } = slice.actions

export  { setEnemy } 
export default slice.reducer