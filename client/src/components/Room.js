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

  useEffect( () => {
    dispatch(fetchCharacter(user.character_id)).unwrap()
      .then( data => {
        dispatch(setCharacter(data))
        dispatch(addSkills(data.skills))
        dispatch(addItems(data.items))
        dispatch(populateCharacter(data.id))
      })
      dispatch(fetchMonster(2)).unwrap()
        .then( data => {
          dispatch(setMonster(data))
          dispatch(populateMonster(data.id))
        })
  }, [room])

 const handleFight = () => {
   fetch(`/characters/${room.character_id}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(room)
   }).then(r => r.json()).then(console.log)
 }
 console.log(room)
  return (
    <>
      <Skills />
      <Items />
      <Character />
      <Monster />
      <button onClick={handleFight}>FIGHT</button>
    </>
  )
}

export default Room