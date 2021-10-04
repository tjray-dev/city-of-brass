import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchMonster, setMonster } from '../slices/monstersSlice'
const Monster = () => {

  const monster = useSelector(state => state.monster)
  const dispatch = useDispatch()

  useEffect( () => { 
  }, [monster])
  return (
    <>
      <span>{monster.character_name}</span>
      <br />
      <span>HP: {monster.current_hp}</span>
      <br />
      <span>Attack: {monster.attack_bonus}</span>
      <br />
      <span>Defense: {monster.defense_bonus}</span>
    </>
  )
}

export default Monster