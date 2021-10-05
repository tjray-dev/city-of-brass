import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setMonster } from '../slices/monstersSlice'

import Skills from './Skills'


const Character = () => {

  const dispatch = useDispatch()
  const room = useSelector(state => state.room)
  const character = useSelector(state => state.character)

  useEffect(() => {
    // setTimeout( () => {
    //   fetch(`/characters/${room.monster_id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ opponent_id: room.character_id})
    //   }).then(r => r.json()).then( data => {
    //     dispatch(setMonster(data))
    //   } )
    // }, 3000)
  }, [room, character])
  return (
    <>
      <div className="name-plate" style={{ 'border-bottom': 'solid 3px', 'width': '45%' }}>
        <h3 style={{ 'display': 'inline-block', 'margin-top': '1em', 'margin-left': '1em', 'margin-right': '5px'}}>
          {character.character_name}:
        </h3>
        <span>
          {/* This will eventually be a progress bar */}
          {character.current_hp}
        </span>
      </div>
      <div className="stat-block">
        <div className="stat-attack" style={{ 'display': 'inline-block', 'margin-left': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '15%' }}>
          <h5 style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px' }}>
            Attack Bonus:
          </h5>
          <span>
            {character.attack_bonus}
          </span>
        </div>
        <div className="stat-attack" style={{ 'display': 'inline-block', 'margin-left': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '15%' }}>
          <h5 style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px' }}>
            Defense Bonus:
          </h5>
          <span>
            {character.defense_bonus}
          </span>
        </div>
        <Skills />
      </div>
    </>
  )
}

export default Character