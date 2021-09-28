import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    user_name: "",
    password: "",
  },
  reducers: {
    updateName: (state, action) => {
      state.user_name =  action.payload 
    }
  }
})

const { updateName } = slice.actions

export { updateName } 
export default slice.reducer