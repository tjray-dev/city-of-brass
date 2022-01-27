import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Skills from './Skills'
import Items from './Items'
import Character from './Character'
import Monster from './Monster'
import Logout from './Logout'

import { populateCharacter, populateMonster } from '../slices/roomSlice'
import { fetchMonster, setMonster } from '../slices/monstersSlice'
import { fetchCharacter, setCharacter } from '../slices/characterSlice'
import { addSkills } from '../slices/skillsSlice'
import { addItems } from '../slices/itemsSlice'


const Room = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const room = useSelector(state => state.room)
  const monster = useSelector(state => state.monster)
  const character = useSelector(state => state.character)

  useEffect(() => {
    if (room.character_id === null && room.monster_id === null) {
      dispatch(fetchCharacter(user.character_id)).unwrap()
        .then(data => {
          dispatch(setCharacter(data))
          dispatch(addSkills(data.skills))
          dispatch(addItems(data.items))
          dispatch(populateCharacter(data.id))
        })
      dispatch(fetchMonster()).unwrap()
        .then(data => {
          dispatch(setMonster(data))
          dispatch(populateMonster(data.id))
        })
    }
  }, [room])

  return (
    <>
      <Character />
      <p class="is-flex is-justify-content-center">
        *******************************
        <br />
        *******************************
        <br />
        *******************************
        <br />
        **** Insert Room Text Here ****
        <br />
        *******************************
        <br />
        *******************************
        <br />
        *******************************
      </p>
      <Monster />
      <div class=" is-flex">
        <button class="button is-success">HEAL</button>
        <button class="button is-danger">SPECIAL</button>
        <button class="button is-warning" onClick={() => history.push('/account')}>FLEE</button>
        <span>Hero Action:</span><progress class="progress is-warning" value='1000' max="3000" style={{ 'width': '20%' }}>100</progress>
        <span>Monster Action:</span><progress class="progress is-warning" value='2000' max="3000" style={{ 'width': '20%' }}>100</progress>
      </div>


    </>
  )
}

export default Room