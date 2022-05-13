import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Loading from './Loading'
import NPC from './NPC'
import Boss from './Boss'
import Battle from './Battle'

import { fetchMonster, fetchBoss, fetchNpc, initializePoints } from '../slices/characterSlice'
import { initializePlayer } from '../slices/playerSlice'

const Encounter = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const character = useSelector(state => state.character)
  const location = useSelector(state => state.location)

  const whichCharacter = () => {

    switch(character.charType){
      case 1:
        return <Boss />
      case 2:
        return <Battle />
      case 3:
        return <NPC />
      default: 
        return <Loading />
    }
  }

  useEffect(() => {
  })
  return whichCharacter()

}

export default Encounter