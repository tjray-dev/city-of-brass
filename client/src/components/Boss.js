import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Victory from './Victory'
import Defeat from './Defeat'

import{ charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } from '../slices/characterSlice'
import { playerHpDown, playerMpDown, playerApDown, playerHpUp, playerMpUp, playerApUp } from '../slices/playerSlice'

const Boss = () => {

  const dispatch = useDispatch()

  const player = useSelector(state => state.player)
  const enemy = useSelector(state => state.character)

  const interval = () => setInterval(enemyAttack, 5000)

  const enemyAttack = () => {
    dispatch(playerApDown(player.spirit * 10))
    dispatch(charHpDown(player.body * 10))
}

  const attack = () => {
      dispatch(playerApDown(player.spirit * 10))
      dispatch(charHpDown(player.body * 10))
  }

  const heal = () => {
    dispatch(playerHpUp(player.spirit * 10))
    dispatch(playerMpDown(player.spirit * 10))
  }

  useEffect(() => {
    interval()
  })

  if(enemy.hp <= 0){
    clearInterval(interval)
    return <Victory />
  }

  if(player.hp <= 0){
    return <Defeat />
  }

  return(
    <>
      <h1>A Legend Approaches</h1>
      <h1>{enemy.name}</h1>
      <h1>{enemy.hp}</h1>
      <div>
        <h1>{player.name}</h1>
        <h1>{player.hp}</h1>
        <h1>{player.ap}</h1>
        <h1>{player.mp}</h1>
      </div>
      <button onClick={() => attack(player, enemy)}>Attack</button>
      <button onClick={() => heal(player)}>Heal</button>
      <button onClick={() => console.log("Run Away")}>Flee</button>
    </>
  )
}

export default Boss