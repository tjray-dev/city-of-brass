import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'player',
  initialState: {
    name: "",
    origin: "",
    background: "",
    mind: 0,
    body: 0,
    spirit: 0,
  },
  reducers: {
    name: ( state, { payload } ) => {
      state.name = payload
    },
    origin: ( state, { payload } ) => {
      state.character_origin = payload
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
    }
  },
})

const { name, origin, background } = slice.actions

export  { name, origin, background} 
export default slice.reducer