import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './slices/playerSlice'
import characterReducer from './slices/characterSlice'
import locationReducer from './slices/locationSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    player: playerReducer,
    character: characterReducer,
    location: locationReducer
  },
})

export default store