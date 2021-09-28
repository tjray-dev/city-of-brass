import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    user_name: "",
    password: "",
    password_confirmation: "",
  },
  reducers: {
    name: (state, action) => {
      state.user_name =  action.payload 
    },
    password: (state, action) => {
      state.password = action.payload
    },
    passwordConfirmation: (state, action) => {
      state.password_confirmation = action.payload
    },
    
  }
})

const { name, password, passwordConfirmation } = slice.actions

export { name, password, passwordConfirmation } 
export default slice.reducer