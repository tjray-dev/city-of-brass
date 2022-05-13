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
    id: 0,
    name: "",
    description: "",
    locationType: 0,
    encountersRemaining: 0
  },
  reducers: {
    clearEncounter: (state) => {
      state.encountersRemaining = state.encountersRemaining - 1
    }
  },
    extraReducers: {
      [fetchLocation.fulfilled]: (state, { payload } ) => {
        state.id = payload.id
        state.name = payload.location_name
        state.locationType = payload.location_type
        state.description = payload.location_description
        state.encountersRemaining = 3
      },
    }
})

const { clearEncounter } = slice.actions

export  { clearEncounter }

export default slice.reducer