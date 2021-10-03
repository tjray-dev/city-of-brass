import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'users/loginStatus',
  async (user, thunkAPI) => {
    const response = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'user',
  initialState: { 
    id: "",
    user_name: "",
    password: "",
    password_confirmation: "",
    session_id: "",
    character_id: "",
    loggedOut: true
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
      state.character_id = action.payload.user.character_id
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.id = payload.id
      state.user_name = payload.user_name
      state.session_id = payload.session_id
      state.password = ''
      state.password_confirmation = ''
      state.character_id = payload.character_id
      state.loggedOut = false
    },
  }
})

const { name, password, passwordConfirmation, setUser } = slice.actions

export { name, password, passwordConfirmation, setUser } 
export default slice.reducer