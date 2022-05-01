import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Loading from './Loading'
import NPC from './NPC'
import Battle from './Battle'
import Boss from './Boss'

import { fetchCharacter } from '../slices/characterSlice'

const Encounter = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const character = useSelector(state => state.character)
  
  useEffect(() => {
    dispatch(fetchCharacter(1))
  }, [])

  const whichCharacter = (charType) => {
    switch(charType){
      case 2:
        return <NPC />
      case 1:
        return <Battle />
      case 3:
        return <Boss />
      default: 
        console.log(character)
        history.push('/loading')
    }
  }

  return character.charType ? whichCharacter(character.charType) : <Loading />

}

export default Encounter