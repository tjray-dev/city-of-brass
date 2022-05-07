import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLocation = createAsyncThunk(
  'location/locationStatus',
  async (location_id, thunkApi) => {
    const response = await fetch(`/locations/${location_id}`)
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'location',
  initialState: {
    name: "",
    description: "",
    locationType: 0,
  },
  reducers: {},
    extraReducers: {
      [fetchLocation.fulfilled]: (state, { payload } ) => {
        state.name = payload.location_name
        state.locationType = payload.location_type
        state.description = payload.location_description
      },
    }
})

const { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } = slice.actions

export  { initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp }

export default slice.reducer