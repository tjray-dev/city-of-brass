import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchLocation } from '../slices/locationSlice'
import { fetchBoss, fetchMonster } from '../slices/characterSlice'
import { rest } from '../slices/playerSlice'

import Loading from './Loading'

const Location =  () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const enemies = useSelector( state => state.location.encounters_remaining )
  const locationId = useSelector( state => state.location.id )
  const name = useSelector( state => state.location.name )
  const description = useSelector( state => state.location.description )

  const exp = useSelector( state => state.player.exp )
  const actionPoints = useSelector( state => state.player.ap )
  const spirit = useSelector( state => state.player.spirit )
  const level = useSelector( state => state.player.level )

  const selectEncounter = () => {
    let encounterType = Math.floor(Math.random() * (4 - 1) + 1)
    switch(encounterType){
      case 1:
        dispatch(fetchBoss())
        break;
      case 2:
        dispatch(fetchMonster())
        break;
      case 3:
        dispatch(fetchMonster())
        break;
      default:
        return <Loading />
    } 
  }

  const pressOn = () => {
    dispatch(fetchLocation(locationId + 1))
    console.log('Once more into the breach my friends...')
  }

  useEffect(() => {
    selectEncounter()
  },)

  return(
    <div className='location-block'>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        { exp >= 100 ? <button onClick={ () => history.push('/lost_oasis') }>Return to the Oasis</button> : null}
        {enemies > 0 ? <button onClick={ pressOn }>Press on</button> : <button onClick={ () => history.push('/encounter') }>Explore</button>}
        { actionPoints > 0 ? null : <button onClick={() => dispatch(rest())}>Rest</button> }
        <button onClick={ () => history.push('/inventory') }>Inventory</button>
      </div>
    </div>
  )
}

export default Location