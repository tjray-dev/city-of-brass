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
    }, 5000)
  }, [room, monster])
  return (
    <div style={{ 'display': 'flex', 'justify-content': 'flex-end' }}>
      <div className="name-plate" style={{'display': 'flex','justify' : 'center', 'border-bottom': 'solid 3px', 'width': '45%',  }}>
        <h3 class='is-size-3' style={{ 'display': 'flex', 'margin-bottom': '10px', 'margin-left': '10px'}}>
          {monster.character_name}:
        </h3>
          <progress class="progress is-danger" value={monster.current_hp} max="100" style={{ 'display' : 'flex', 'margin-left' : '135px' }}>100</progress>
      </div>
      <div className="stat-block" style={{ 'display' : 'flex', 'justify-content' : 'space-around', 'align-content' : 'end' }}>
        <div className="stat-attack" style={{ 'display': 'inline-block', 'margin-right': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '25%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': ' 5px', 'margin-left': '5px', 'color': 'firebrick' }}>
            Attack Bonus:
          </h5>
          <span>
            {monster.attack_bonus}
          </span>
        </div>
        <div className="stat-attack" style={{ 'display': 'inline-block', 'margin-right': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '25%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': '5px', 'margin-left': '5px', 'color': 'green' }}>
            Defense Bonus:
          </h5>
          <span>
            {monster.defense_bonus}
          </span>
        </div>
        <div className="stat-attack" style={{ 'display': 'inline-block', 'margin-right': '10px', 'border-left': 'solid 5px', 'border-bottom': 'dotted 2px', 'width': '25%' }}>
          <h5 class='is-size-5' style={{ 'display': 'inline-block', 'margin-right': '5px', 'margin-left': '5px' }}>
            Speed Bonus:
          </h5>
          <span>
            1
          </span>
        </div>
      </div>
    </div>
  )
}

export default Monster