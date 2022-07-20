import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHelm = createAsyncThunk(
  'helm/helmStatus',
  async () => {
    const response = await fetch('/helms')
    const data = await response.json()
    return data
  }
)

export const fetchArmor = createAsyncThunk(
  'armor/armorStatus',
  async () => {
    const response = await fetch('/armors')
    const data = await response.json()
    return data
  }
)

export const fetchBelt = createAsyncThunk(
  'belt/beltStatus',
  async () => {
    const response = await fetch('/belts')
    const data = await response.json()
    return data
  }
)

export const fetchGloves = createAsyncThunk(
  'gloves/glovesStatus',
  async () => {
    const response = await fetch('/gloves')
    const data = await response.json()
    return data
  }
)

export const fetchPants = createAsyncThunk(
  'pants/pantsStatus',
  async () => {
    const response = await fetch('/pants')
    const data = await response.json()
    return data
  }
)

export const fetchBoots = createAsyncThunk(
  'boots/bootsStatus',
  async () => {
    const response = await fetch('/boots')
    const data = await response.json()
    return data
  }
)

export const fetchWeapon = createAsyncThunk(
  'weapon/weaponStatus',
  async () => {
    const response = await fetch('/weapons')
    const data = await response.json()
    return data
  }
)

export const fetchShield = createAsyncThunk(
  'shield/shieldStatus',
  async () => {
    const response = await fetch('/shields')
    const data = await response.json()
    return data
  }
)

export const fetchRing = createAsyncThunk(
  'ring/ringStatus',
  async () => {
    const response = await fetch('/rings')
    const data = await response.json()
    return data
  }
)

export const fetchAmulet = createAsyncThunk(
  'amulet/amuletStatus',
  async () => {
    const response = await fetch('/amulets')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'inventory',
  initialState: {
  },
  reducers: {},
  extraReducers: {
    [fetchHelm.fulfilled]: (state, { payload } ) => {},
    [fetchArmor.fulfilled]: (state, { payload } ) => {},
    [fetchBelt.fulfilled]: (state, { payload } ) => {},
    [fetchGloves.fulfilled]: (state, { payload } ) => {},
      [fetchPants.fulfilled]: (state, { payload } ) => {},
      [fetchWeapon.fulfilled]: (state, { payload } ) => {},
      [fetchShield.fulfilled]: (state, { payload } ) => {},
      [fetchBoots.fulfilled]: (state, { payload } ) => {},
      [fetchRing.fulfilled]: (state, { payload } ) => {},
      [fetchAmulet.fulfilled]: (state, { payload } ) => {}
      }
    }
  )

const {} = slice.actions

export  {} 
export default slice.reducer