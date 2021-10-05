import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCharacter } from '../slices/characterSlice'
import { monsterAttack } from '../slices/monstersSlice'
const Monster = () => {

  const room = useSelector(state => state.room)
  const monster = useSelector(state => state.monster)
  const dispatch = useDispatch()

  useEffect(() => { 
    setTimeout( () => {
      fetch(`/characters/${room.monster_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ opponent_id: room.character_id})
      }).then(r => r.json()).then( data => {
        dispatch(setCharacter(data))
      } )
    }, 3000)
  }, [room, monster])
  return (
    <div styles={'display: inline-block'}>
      <span>{monster.character_name}</span>
      <br />
      <span>HP: {monster.current_hp}</span>
      <br />
      <span>Attack: {monster.attack_bonus}</span>
      <br />
      <span>Defense: {monster.defense_bonus}</span>
    </div>
  )
}

export default Monster