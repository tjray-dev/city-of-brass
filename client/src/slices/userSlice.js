import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: { 
    id: "",
    user_name: "",
    password: "",
    password_confirmation: "",
    session_id: "",
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
    setUser: (state, action) => {
      state.id = action.payload.user.id
      state.user_name = action.payload.user.user_name
      state.session_id = action.payload.session_id
      state.password = ''
      state.password_confirmation = ''
      // console.log("WHAT IS MY STATE AFTER LOGIN POST")
      // console.log(state)
    }
    
  }
})

const { name, password, passwordConfirmation, setUser } = slice.actions

export { name, password, passwordConfirmation, setUser } 
export default slice.reducer