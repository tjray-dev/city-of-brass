import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import characterReducer from './slices/characterSlice'
import roomReducer from './slices/roomSlice'
import skillsReducer from './slices/skillsSlice'
import itemsReducer from './slices/itemsSlice'
import monsterReducer from './slices/monstersSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    user: userReducer,
    character: characterReducer,
    room: roomReducer,
    skills: skillsReducer,
    items: itemsReducer,
    monster: monsterReducer,
  }
})

export default store