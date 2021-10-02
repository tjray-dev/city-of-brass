import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import characterReducer from './slices/characterSlice'
import roomReducer from './slices/roomSlice'
import skillsReducer from './slices/skillsSlice'
import itemsReducer from './slices/itemsSlice'
import monsterReducer from './slices/monstersSlice'

import { apiSlice } from './slices/apiSlice'

const store = configureStore({
  reducer: {
    // state : slice.reducer
    user: userReducer,
    character: characterReducer,
    room: roomReducer,
    skills: skillsReducer,
    items: itemsReducer,
    monster: monsterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export default store