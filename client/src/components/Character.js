import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setMonster } from '../slices/monstersSlice'




const Character = () => {

  const dispatch = useDispatch()
  const room = useSelector( state => state.room)
  const character = useSelector( state => state.character)

  useEffect( () => {
    fetch(`/characters/${room.character_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({opponent_id: room.monster_id})
    }).then(r => r.json()).then( data => {
      dispatch(setMonster(data))
    } )
  }, [character])
  return (
    <div style={{ 'display': 'inline', 'margin-top': '30px', 'margin-left': '100px' }}>
      <span>{character.character_name}</span>
      <br />
      <span>{character.character_origin}</span>
      <br />
      <span>HIT POINTS:{character.current_hp}</span>
      <br />
      <span>ATTACK: {character.attack_bonus}</span>
      <br />
      <span>DEFENSE: {character.defense_bonus}</span>
      <br />
    </div>
  )
}

export default Character