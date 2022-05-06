import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Victory from './Victory'
import Defeat from './Defeat'

import{ initializePoints, charHpDown, charApDown, CharMpDown, charHpUp, charApUp, charMpUp } from '../slices/characterSlice'
import { playerHpDown, playerMpDown, playerApDown, playerHpUp, playerMpUp, playerApUp } from '../slices/playerSlice'

const Battle = () => {

  const dispatch = useDispatch()

  const player = useSelector(state => state.player)
  const enemy = useSelector(state => state.character)

  const attack = () => {
      dispatch(playerApDown(player.spirit * 10))
      dispatch(charHpDown(player.body * 10))
  }

  const heal = () => {
    dispatch(playerHpUp(player.spirit * 10))
    dispatch(playerMpDown(player.spirit * 10))
  }

  useEffect(() => {
    setInterval(() => dispatch(playerHpDown(enemy.body * 10)), 5000)
  }, [dispatch])
  if(enemy.hp <= 0){
    return <Victory />
  }
  if(player.hp <= 0){
    return <Defeat />
  }
  return(
    <>
      <h1>A Fight!</h1>
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

export default Battle