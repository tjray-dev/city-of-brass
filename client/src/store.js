import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import characterReducer from './slices/characterSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    user: userReducer,
    character: characterReducer
  }
})

export default store