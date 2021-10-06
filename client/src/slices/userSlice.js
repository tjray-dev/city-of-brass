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

export const addCharacter = createAsyncThunk(
  'users/addCharStatus',
  async (user, thunkAPI) => {
    console.log("THIS IS THE USER PARAM FROM INSIDE THE ADD CHARACTER THUNK!")
    console.log(user)
    const response = await fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ character_id: user.character_id}),
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
  },
  reducers: {
    name: (state, { payload }) => {
      state.user_name =  payload 
    },
  password: (state, { payload }) => {
      state.password = payload
    },
    passwordConfirmation: (state, { payload }) => {
      state.password_confirmation = payload
    },
    setUser: (state, { payload }) => {
      state.password = ''
      state.password_confirmation = ''
      state.id = payload.user.id
      state.user_name = payload.user.user_name
      state.session_id = payload.session_id
      state.character_id = payload.user.character_id
    },
    setCharacterId: (state, { payload }) => {
      state.character_id = payload
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {},
    [addCharacter.fulfilled]: (state, { payload }) => {},
  }
})

const { name, password, passwordConfirmation, setUser, setCharacterId } = slice.actions

export { name, password, passwordConfirmation, setUser, setCharacterId } 
export default slice.reducer