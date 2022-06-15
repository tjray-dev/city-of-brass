import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItem = createAsyncThunk(
  'item/itemStatus',
  async () => {
    const response = await fetch('/items/1')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'player',
  initialState: {
    origin: "",
    background: "",
    mind: 0,
    body: 1,
    spirit: 0,
    maxHp: 0,
    hp: 0,
    maxMp: 0,
    mp: 0,
    maxAp: 0,
    ap: 0,
    level: 0,
    exp: 0,
  },
  reducers: {
    origin: ( state, { payload } ) => {
      state.origin = payload
      switch(payload){
        case 'north':
          state.mind = 1;
          state.body = 2;
          state.spirit = 3;
          break;
        case 'south':
          state.mind = 2;
          state.body = 1;
          state.spirit = 3;
          break;
        case 'east':
          state.mind = 3;
          state.body = 2;
          state.spirit = 1;
          break;
        case 'west':
          state.mind = 1;
          state.body = 3;
          state.spirit = 2;
          break;
        default:
          console.log('Mr. Stark I don\'t feel so good.')
          break;
      }
    },
    background: (state, { payload }) => {
      state.background = payload;
    },
    initializePlayer: (state) => {
      state.maxHp = state.body * 100
      state.maxMp = state.mind * 100
      state.maxAp = state.spirit * 100

      state.hp = state.body * 100
      state.mp = state.mind * 100
      state.ap = state.spirit * 100
    },
    playerHpDown: (state, { payload }) => {
      state.hp = state.hp - payload
    },
    playerMpDown: (state, { payload }) => {
      state.mp = state.mp - payload
    },
    playerApDown: (state, { payload }) => {
      state.ap = state.ap - payload
    },
    playerHpUp: (state, { payload }) => {
      state.hp = state.hp + payload
    },
    rest: (state) => {
      state.mp = state.mp + ( (state.mind + state.level) / 2) * 100
      state.ap = state.ap + ( (state.spirit + state.level) / 2) * 100
    },
    playerExpUp: (state, { payload }) => {
      state.exp = state.exp + payload
    },
    level_up: (state, { payload }) => {
      state.exp = state.exp - 100
      state.level = state.level + 1
      state.mind = state.mind + 1
      state.body = state.body + 1
      state.spirit = state.spirit + 1
    }
  },
})

const { origin, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerExpUp, level_up, rest } = slice.actions

export  { origin, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerExpUp, level_up, rest } 
export default slice.reducer