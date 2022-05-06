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
    hp: 0,
    mp: 0,
    ap: 0
  },
  reducers: {
    initializePoints: (state) => {
      state.hp = state.body * 100
      state.mp = state.mind * 100
      state.ap = state.spirit * 100
    },
    charHpDown: (state, { payload }) => {
      state.hp = state.hp - payload
    },
    charMpDown: (state, payload) => {
      state.mp = state.mp - payload
    },
    charApDown: (state, payload) => {
      state.ap = state.ap - payload
    },
    charHpUp: (state, payload) => {
      state.hp = state.hp + payload
    },
    charMpUp: (state, payload) => {
      state.mp = state.mp + payload
    },
    charApUp: (state, payload) => {
      state.ap = state.ap + payload
    }
  },
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

const { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } = slice.actions

export  { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp }
export default slice.reducer