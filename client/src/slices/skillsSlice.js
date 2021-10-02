import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'skills',
  initialState: {
    entities: [
      {
        skill_name: "skill",
        skill_level: 2
      },
      {
        skill_name: "skill",
        skill_level: 4
      },
      {
        skill_name: "skill",
        skill_level: 1
      },
      {
        skill_name: "skill",
        skill_level: 7
      },
    ],
  },
  reducers: {
    addSkills: (state, action) => {
      state.skills.entities.push(action.payload) 
    },
  }
})

// insert thunk here

const { addSkills, levelUp } = slice.actions

export { addSkills, levelUp } 
export default slice.reducer