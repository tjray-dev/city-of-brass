import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'room',
  initialState: {
    room_name: "",
    room_desc: "",
    monsters: 5
  },
  reducers: {
    decrementMonsters: state => {
      state.monster -= 1
    }
  }
})

const { decrementMonsters } = slice.actions

export { decrementMonsters } 
export default slice.reducer