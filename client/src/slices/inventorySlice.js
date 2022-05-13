import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItem = createAsyncThunk(
  'item/itemStatus',
  async () => {
    const response = await fetch('/loot')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'inventory',
  initialState: {
    weapon: [],
    armor: [],
    trinket: [],
    key: [],
  },
  reducers: {},
    extraReducers: {
      [fetchItem.fulfilled]: (state, { payload } ) => {
        switch(payload.item_type){
          case 1:
            state.weapon.push(payload)
            break;
          case 2:
            state.armor.push(payload)
            break;
          case 3:
            state.trinket.push(payload)
            break;
          case 4:
            state.key.push(payload)
            break;
          default:
            console.log('Something\'s wrong, I can feel it')
        }
      }
    }
})

const {} = slice.actions

export  {} 
export default slice.reducer