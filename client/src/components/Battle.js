import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import{ charHpDown, charApDown } from '../slices/characterSlice'
import { playerHpDown, playerMpDown, playerApDown, playerHpUp } from '../slices/playerSlice'

import ProgressBar from 'react-bootstrap/ProgressBar'

const Battle = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const player = useSelector(state => state.player)
  const enemy = useSelector(state => state.character)
  let playerNow = (100 / player.hp) * player.maxHp

  const enemyAttack = () => {
    dispatch(charApDown(enemy.spirit * 10))
    dispatch(playerHpDown(enemy.body * 10))
  }

  const attack = () => {
      dispatch(playerApDown(player.spirit * 10))
      dispatch(charHpDown(player.body * 10))
  }

  const heal = () => {
    dispatch(playerHpUp(player.spirit * 10))
    dispatch(playerMpDown(player.spirit * 10))
  }

  const victory = () => {
    if(enemy.hp <= 0){
      return history.push('/victory')
    }
  }
  const defeat = () => {
    if(player.hp <= 0){
      return history.push('/defeat')
    }
  }

  useEffect(() => {
    victory()
    defeat()
    const intervalId =  setInterval(() => {
      enemyAttack()
    }, 3000)
    return () => clearInterval(intervalId)
  }, [enemyAttack])

  return(
    <div className='fight-block'>
      <h1 className='fight-title'>A Fight!</h1>
      <div className='enemy-block'>
        <h1>{enemy.name}</h1>
        <ProgressBar now={enemy.hp} label={`${enemy.hp}`} variant="danger" max={enemy.maxHp}/>
      </div>
      <div className='player-block'>
      <ProgressBar now={player.hp} label={`${player.hp}`} variant="danger" max={player.maxHp} />
      <ProgressBar now={player.ap} label={`${player.ap}`} variant="success" max={player.maxAp} />
      <ProgressBar now={player.mp} label={`${player.mp}`} max={player.maxMp} />
      </div>
      { player.ap <= 0 ? null : <button onClick={() => attack(player, enemy)}>Attack</button> }
      { player.mp === 0 ? null : <button onClick={() => heal(player)}>Heal</button> }
      <button onClick={() => history.push('/location')}>Flee</button>
    </div>
  )
}

export default Battle