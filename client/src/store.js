import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    user: userReducer
  }
})

export default store