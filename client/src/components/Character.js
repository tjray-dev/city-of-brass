import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setMonster } from '../slices/monstersSlice'

import Skills from './Skills'
import Items from './Items'


const Character = () => {

  const dispatch = useDispatch()
  const room = useSelector(state => state.room)
  const character = useSelector(state => state.character)

  useEffect(() => {
    // setTimeout( () => {
    //   fetch(`/characters/${room.character_id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ opponent_id: room.monster_id})
    //   }).then(r => r.json()).then( data => {
    //     dispatch(setMonster(data))
    //   } )
    // }, 2000)
  }, [room, character])
  return (
    <>
      <div class="card" style={{ 'border-bottom': 'solid 3px', 'width': '45%' }}>
        <h3 class='is-size-3' style={{ 'display': 'inline-block', 'margin-top': '1em', 'margin-left': '1em', 'margin-right': '5px'}}>
          {character.character_name}:
        </h3>
        <span>
        <progress class="progress is-danger" value={character.current_hp} max="100" style={{ 'display' : 'inline-block', 'width' : '75%' }}>100</progress>
        </span>
      </div>
      <div className="stat-block">
        <div class="card" style={{ 'display': 'inline-block', 'margin-left': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '15%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px', 'color' : 'firebrick' }}>
            Attack Bonus:
          </h5>
          <span>
            {character.attack_bonus}
          </span>
        </div>
        <div class="card" style={{ 'display': 'inline-block', 'margin-left': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '15%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px', 'color' : 'green' }}>
            Defense Bonus:
          </h5>
          <span>
            {character.defense_bonus}
          </span>
        </div>
        <div class="card" style={{ 'display': 'inline-block', 'margin-left': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '15%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px' }}>
            Speed Bonus:
          </h5>
          <span>
            1
          </span>
        </div>
        <Skills />
        <Items />
      </div>
    </>
  )
}

export default Character