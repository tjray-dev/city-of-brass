import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMonster = createAsyncThunk(
  'monster/monsterStatus',
  async () => {
    const response = await fetch(`/monster`)
    const data = await response.json()
    return data
  }
)
export const fetchBoss = createAsyncThunk(
  'boss/bossStatus',
  async () => {
    const response = await fetch(`/boss`)
    const data = await response.json()
    return data
  }
)
export const fetchNpc = createAsyncThunk(
  'npc/npcStatus',
  async () => {
    const response = await fetch(`/npc`)
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
      [fetchMonster.fulfilled]: (state, { payload } ) => {
        state.name = payload.character_name
        state.charType = payload.character_type
        state.mind = payload.mind
        state.body = payload.body
        state.spirit = payload.spirit
        state.hp = state.body * 100
        state.mp = state.mind * 100
        state.ap = state.spirit * 100
      },
      [fetchBoss.fulfilled]: (state, { payload } ) => {
        state.name = payload.character_name
        state.charType = payload.character_type
        state.mind = payload.mind
        state.body = payload.body
        state.spirit = payload.spirit
        state.hp = state.body * 100
        state.mp = state.mind * 100
        state.ap = state.spirit * 100
      },
      [fetchNpc.fulfilled]: (state, { payload } ) => {
        state.name = payload.character_name
        state.charType = payload.character_type
        state.mind = payload.mind
        state.body = payload.body
        state.spirit = payload.spirit
        state.hp = state.body * 100
        state.mp = state.mind * 100
        state.ap = state.spirit * 100
      },
    }
})

const { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } = slice.actions

export  { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp }
export default slice.reducer