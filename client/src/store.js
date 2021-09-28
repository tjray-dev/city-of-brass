import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import characterReducer from './slices/characterSlice'
import skillsReducer from './slices/skillsSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    user: userReducer,
    character: characterReducer,
    skills: skillsReducer,
  }
})

export default store