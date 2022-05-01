import { configureStore } from '@reduxjs/toolkit'

import playerReducer from './slices/playerSlice'
import characterReducer from './slices/characterSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    player: playerReducer,
    character: characterReducer
  },
})

export default store