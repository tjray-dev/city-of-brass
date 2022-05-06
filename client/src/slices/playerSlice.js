import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItem = createAsyncThunk(
  'item/itemStatus',
  async (thunkApi) => {
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
    hp: 0,
    mp: 0,
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
    background: (state, payload) => {
      state.background = payload;
    },
    initializePlayer: (state) => {
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
    playerMpUp: (state, { payload }) => {
      state.mp = state.mp + payload
    },
    playerApUp: (state, { payload }) => {
      state.ap = state.ap + payload
    },
    playerExpUp: (state, { payload }) => {
      state.exp = state.exp + payload
    }
  },
    extraReducers: {
      [fetchItem.fulfilled]: (state, { payload } ) => {
      state.inventory = {...state.inventory, payload}
      }
    }
})

const { origin, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerMpUp, playerApUp, playerExpUp } = slice.actions

export  { origin, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerMpUp, playerApUp, playerExpUp } 
export default slice.reducer