import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Victory from './Victory'
import Defeat from './Defeat'

import{ initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } from '../slices/characterSlice'
import { playerHpDown, playerMpDown, playerApDown, playerHpUp, playerMpUp, playerApUp } from '../slices/playerSlice'

const Battle = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const player = useSelector(state => state.player)
  const enemy = useSelector(state => state.character)
  const [intervalId, setIntervalId] = useState(0)

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
    }, 5000)
    return () => clearInterval(intervalId)
  }, [enemyAttack])

  return(
    <>
      <h1>A Fight!</h1>
      <div>
        <h1>{enemy.name}</h1>
        <h1>{enemy.hp}</h1>
      </div>
      <div>
        <h1>{player.name}</h1>
        <h1>{player.hp}</h1>
        <h1>{player.ap}</h1>
        <h1>{player.mp}</h1>
      </div>
      { player.ap <= 0 ? null : <button onClick={() => attack(player, enemy)}>Attack</button> }
      { player.mp === 0 ? null : <button onClick={() => heal(player)}>Heal</button> }
      <button onClick={() => history.push('/location')}>Flee</button>
    </>
  )
}

export default Battle