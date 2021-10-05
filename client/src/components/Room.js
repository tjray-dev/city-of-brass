import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Skills from './Skills'
import Items from './Items'
import Character from './Character'
import Monster from './Monster'

import { populateCharacter, populateMonster } from '../slices/roomSlice'
import { fetchMonster, setMonster } from '../slices/monstersSlice'
import { fetchCharacter, setCharacter } from '../slices/characterSlice'
import { addSkills } from '../slices/skillsSlice'
import { addItems } from '../slices/itemsSlice'


const Room = () => {
  
  const dispatch = useDispatch()
  const user = useSelector( state => state.user)
  const room = useSelector( state => state.room )
  const monster = useSelector( state => state.monster)

  useEffect( () => {
    if (room.character_id === null  && room.monster_id === null){
      dispatch(fetchCharacter(user.character_id)).unwrap()
      .then( data => {
        dispatch(setCharacter(data))
        dispatch(addSkills(data.skills))
        dispatch(addItems(data.items))
        dispatch(populateCharacter(data.id))
      })
      dispatch(fetchMonster()).unwrap()
        .then( data => {
          dispatch(setMonster(data))
          dispatch(populateMonster(data.id))
        })
    }
  }, [room])

  return (
    <>
      <Character />
      <Monster />
    </>
  )
}

export default Room