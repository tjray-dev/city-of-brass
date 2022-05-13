import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './slices/playerSlice'
import characterReducer from './slices/characterSlice'
import locationReducer from './slices/locationSlice'
import inventoryReducer from './slices/inventorySlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    player: playerReducer,
    character: characterReducer,
    location: locationReducer,
    inventory: inventoryReducer

  },
})

export default store