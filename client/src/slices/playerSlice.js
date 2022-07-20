import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchChildhood = createAsyncThunk(
  'childhood/childhoodStatus',
  async (childhood) => {
    const response = await fetch(`/childhood/${childhood}`)
    const data = await response.json()
    return data 
  }
)

export const fetchAdolescences = createAsyncThunk(
  'adolescents/adolescentsStatus',
  async (adolescents) => {
    const response = await fetch(`/adolescents/${adolescents}`)
    const data = await response.json()
    return data
  }
)

export const fetchProfession = createAsyncThunk(
  'profession/professionStatus',
  async (profession) => {
    const response = await fetch(`/profession/${profession}`)
    const data = await response.json()
    return data
  }
)

export const fetchLoot = createAsyncThunk(
  'loot/lootStatus',
  async () => {
    const response = await fetch('/loot')
    const data = await response.json()
    return data
  }
)

const slice = createSlice({
  name: 'player',
  initialState: {
    childhood: "",
    adolescents: "",
    profession: "",
    traits: {},
    mindStats:     { 'mind': 1, 'sanity': 1, 'knowledge': 1, 'reason': 1 },
    bodyStats:     { 'body': 1, 'strength': 1, 'agility': 1, 'fortitude': 1 },
    spiritStats:   { 'spirit': 1, 'faith': 1, 'will': 1, 'intuition': 1 },
    combatStats:   { 'damage': 1, 'defense': 1, 'speed': 1, 'accuracy': 1 },
    helm:          { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    armor:         { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    belt:          { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    gloves:        { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    pants:         { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    boots:         { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    leftHand:      { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    rightHand:     { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    ring:          { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    amulet:        { 'name': '', 'effect': 0, 'tier': 0, 'condition': 0, 'quality': 0 },
    resources:     { 'materials': 0, 'rations': 0, 'supplies': 0, 'glimpses': 0 },
    maxPoints:     { 'hp': 100, 'mp': 100, 'sp': 100 },
    currentPoints: { 'hp': 100, 'mp': 100, 'sp': 100 },
    worldSkills:   { 'track': 0, 'crafting': 0, 'navigation': 0, 'foraging': 0, 'study': 0 },
    combatSkills:  { 'block': 0, 'heal': 0, 'powerAttack': 0, 'focus': 0, 'secondWind': 0, 'recklessCharge': 0, 'enchantedStrike': 0, 'flee': 0 }
  },
  reducers: {

    increaseMind: (state, { payload }) => {
      state.mindStats['mind'] += payload
    },
    increaseSanity: (state, { payload}) => {
      state.mindStats['sanity'] += payload
    },
    increaseKnowledge: (state, { payload }) => {
      state.mindStats['knowledge'] += payload
    },
    increaseReason: (state, { payload }) => {
      state.mindStats['reason'] += payload
    },

    increaseBody: (state, { payload }) => {
      state.bodyStats['body'] += payload
    },
    increaseStrength: (state, { payload }) => {
      state.bodyStats['strength'] += payload
    },
    increaseAgility: (state, { payload }) => {
      state.bodyStats['agility'] += payload
    },
    increaseFortitude: (state, { payload }) => {
      state.bodyStats['fortitude'] += payload
    },

    increaseSpirit: (state, { payload }) => {
      state.spiritStats['spirit'] += payload
    },
    increaseFaith: (state, { payload }) => {
      state.spiritStats['faith'] += payload
    },
    increaseWill: (state, { payload }) => {
      state.spiritStats['will'] += payload
    },
    increaseIntuition: (state, { payload }) => {
      state.spiritStats['intuition'] += payload
    },

    increaseHelmCondition: (state, { payload }) => {
      state.helm['condition'] += payload
    },
    increaseArmorCondition: (state, { payload }) => {
      state.armor['condition'] += payload
    },
    increaseBeltCondition: (state, { payload }) => {
      state.belt['condition'] += payload
    },
    increaseGlovesCondition: (state, { payload }) => {
      state.gloves['condition'] += payload
    },
    increasePantsCondition: (state, { payload }) => {
      state.pants['condition'] += payload
    },
    increaseBootsCondition: (state, { payload }) => {
      state.boots['condition'] += payload
    },
    increaseLeftHandCondition: (state, { payload }) => {
      state.leftHand['condition'] += payload
    },
    increaseRightHandCondition: (state, { payload }) => {
      state.rightHand['condition'] += payload
    },
    increaseRingCondition: (state, { payload }) => {
      state.ring['condition'] += payload
    },
    increaseAmuletCondition: (state, { payload }) => {
      state.amulet['condition'] += payload
    },

    increaseMaterials: (state, { payload }) => {
      state.resources['materials'] += payload
    },
    increaseRations: (state, { payload }) => {
      state.resources['rations'] += payload
    },
    increaseSupplies: (state, { payload }) => {
      state.resources['supplies'] += payload
    },
    increaseGlimpses: (state, { payload }) => {
      state.resources['glimpses'] += payload
    },

    increaseMaxHp: (state, { payload }) => {
      state.maxPoints['hp'] += payload
    },
    increaseMaxMp: (state, { payload }) => {
      state.maxPoints['mp'] += payload
    },
    increaseMaxSp: (state, { payload }) => {
      state.maxPoints['sp'] += payload
    },
    
    increaseCurrentHp: (state, { payload }) => {
      state.currentPoints['hp'] += payload || state.maxPoints['hp']
    },
    increaseCurrentMp: (state, { payload }) => {
      state.currentPoints['mp'] += payload || state.maxPoints['mp']
    },
    increaseCurrentSp: (state, { payload }) => {
      state.currentPoints['sp'] += payload || state.maxPoints['sp']
    },

    increaseWorldSkills: (state, { payload }) => {
      state.worldSkills[payload] += 1
    },
    increaseCombatSkills: (state, { payload }) => {
      state.worldSkills[payload] += 1
    },

    decreaseMind: (state, { payload }) => {
      state.mindStats['mind'] -= payload
    },
    decreaseSanity: (state, { payload}) => {
      state.mindStats['sanity'] -= payload
    },
    decreaseKnowledge: (state, { payload }) => {
      state.mindStats['knowledge'] -= payload
    },
    decreaseReason: (state, { payload }) => {
      state.mindStats['reason'] -= payload
    },

    decreaseBody: (state, { payload }) => {
      state.bodyStats['body'] -= payload
    },
    decreaseStrength: (state, { payload }) => {
      state.bodyStats['strength'] -= payload
    },
    decreaseAgility: (state, { payload }) => {
      state.bodyStats['agility'] -= payload
    },
    decreaseFortitude: (state, { payload }) => {
      state.bodyStats['fortitude'] -= payload
    },

    decreaseSpirit: (state, { payload }) => {
      state.spiritStats['spirit'] -= payload
    },
    decreaseFaith: (state, { payload }) => {
      state.spiritStats['faith'] -= payload
    },
    decreaseWill: (state, { payload }) => {
      state.spiritStats['will'] -= payload
    },
    decreaseIntuition: (state, { payload }) => {
      state.spiritStats['intuition'] -= payload
    },

    decreaseHelmCondition: (state, { payload }) => {
      state.helm['condition'] -= payload
    },
    decreaseArmorCondition: (state, { payload }) => {
      state.armor['condition'] -= payload
    },
    decreaseBeltCondition: (state, { payload }) => {
      state.belt['condition'] -= payload
    },
    decreaseGlovesCondition: (state, { payload }) => {
      state.gloves['condition'] -= payload
    },
    decreasePantsCondition: (state, { payload }) => {
      state.pants['condition'] -= payload
    },
    decreaseBootsCondition: (state, { payload }) => {
      state.boots['condition'] -= payload
    },
    decreaseLeftHandCondition: (state, { payload }) => {
      state.leftHand['condition'] -= payload
    },
    decreaseRightHandCondition: (state, { payload }) => {
      state.rightHand['condition'] -= payload
    },
    decreaseRingCondition: (state, { payload }) => {
      state.ring['condition'] -= payload
    },
    decreaseAmuletCondition: (state, { payload }) => {
      state.amulet['condition'] -= payload
    },

    decreaseMaterials: (state, { payload }) => {
      state.resources['materials'] -= payload
    },
    decreaseRations: (state, { payload }) => {
      state.resources['rations'] -= payload
    },
    decreaseSupplies: (state, { payload }) => {
      state.resources['supplies'] -= payload
    },
    decreaseGlimpses: (state, { payload }) => {
      state.resources['glimpses'] -= payload
    },

    decreaseMaxHp: (state, { payload }) => {
      state.maxPoints['hp'] -= payload
    },
    decreaseMaxMp: (state, { payload }) => {
      state.maxPoints['mp'] -= payload
    },
    decreaseMaxSp: (state, { payload }) => {
      state.maxPoints['sp'] -= payload
    },
    
    decreaseCurrentHp: (state, { payload }) => {
      state.currentPoints['hp'] -= payload
    },
    decreaseCurrentMp: (state, { payload }) => {
      state.currentPoints['mp'] -= payload
    },
    decreaseCurrentSp: (state, { payload }) => {
      state.currentPoints['sp'] -= payload
    },
  },
  extraReducers: {
    [fetchChildhood.fulfilled]: (state, { payload }) => {
      state.childhood = payload.name
      state.mindStats['mind'] =  payload.mind
      state.bodyStats['body'] =  payload.body
      state.spiritStats['spirit'] =  payload.spirit
    },
    [fetchAdolescences.fulfilled]: (state, { payload }) => {
      state.adolescences = payload.name
      
      state.mindStats['sanity'] =  payload.sanity
      state.mindStats['knowledge'] =  payload.knowledge
      state.mindStats['reason'] =  payload.reason

      state.bodyStats['strength'] =  payload.strength
      state.bodyStats['agility'] =  payload.agility
      state.bodyStats['fortitude'] =  payload.fortitude

      state.spiritStats['faith'] =  payload.faith
      state.spiritStats['will'] =  payload.will
      state.spiritsStats['intuition'] =  payload.intuition
    },
    [fetchProfession.fulfilled]: (state, { payload }) => {
      state.profession = payload.name
      
      state.worldSkills[payload.worldSkill] += 1
      state.combatSkills[payload.combatSkill] += 1
    },
    [fetchWeapon.fulfilled]: (state, { payload }) => {
      
    }
  }
})

const { childhood, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerExpUp, level_up, rest } = slice.actions

export  { childhood, background, initializePlayer, playerHpDown, playerMpDown, playerApDown, playerHpUp, playerExpUp, level_up, rest } 
export default slice.reducer