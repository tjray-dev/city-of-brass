import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Loading from './Loading'
import NPC from './NPC'
import Boss from './Boss'
import Battle from './Battle'

import { fetchCharacter, initializePoints } from '../slices/characterSlice'
import { initializePlayer } from '../slices/playerSlice'

const Encounter = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const character = useSelector(state => state.character)

  useEffect(() => {
    dispatch(fetchCharacter(1)).then(() => {
      dispatch(initializePoints())
      dispatch(initializePlayer())
    })
  }, [])

  const whichCharacter = (charType) => {
    switch(charType){
      case 0:
        return <Boss />
      case 1:
        return <Battle />
      case 2:
        return <NPC />
      default: 
        return <Loading />
    }
  }

  return whichCharacter(character.charType)

}

export default Encounter