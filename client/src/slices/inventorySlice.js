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
    loot: {},
    equipment: {
      weapon: {},
      armor: {},
      trinket: {},
    },
    weapon: [],
    armor: [],
    trinket: [],
    key: [],
  },
  reducers: {
    equipWeapon: (state, { payload }) => {
      state.equipment.weapon = payload
    },
    equipArmor: (state, { payload }) => {
      state.equipment.armor = payload
    },
    equipTrinket: (state, { payload }) => {
      state.equipment.trinket = payload
    },
    unequip: (state, { payload }) => {
      state.equipment[payload] = {}
    }
  },
    extraReducers: {
      [fetchItem.fulfilled]: (state, { payload } ) => {
        switch(payload.item_type){
          case 1:
            state.weapon.push(payload)
            state.loot =  payload
            break;
          case 2:
            state.armor.push(payload)
            state.loot =  payload
            break;
          case 3:
            state.trinket.push(payload)
            state.loot =  payload
            break;
          case 4:
            state.key.push(payload)
            state.loot =  payload
            break;
          default:
            console.log('Something\'s wrong, I can feel it')
        }
      }
    }
})

const { equipWeapon, equipArmor, equipTrinket, unequip } = slice.actions

export  { equipWeapon, equipArmor, equipTrinket, unequip} 
export default slice.reducer