import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchLocation } from '../slices/locationSlice'
import { fetchBoss, fetchMonster, fetchNpc } from '../slices/characterSlice'

import Loading from './Loading'

const Location =  () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const location = useSelector(state => state.location)

  const goBack = () => {
    dispatch(fetchLocation(location.id - 1))
  }

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
        dispatch(fetchNpc())
        break;
      default:
        return <Loading />
    } 
  }

  const pressOn = () => {
    dispatch(fetchLocation(location.id + 1))

  }

  useEffect(() => {
    selectEncounter()
  },)

  return(
    <>
    <div>
      <h1>{location.name}</h1>
    </div>
    <div>
      <button onClick={ goBack }>Go Back</button>
      {location.encountersRemaining === 0 ? null : <button onClick={ () => history.push('/encounter') }>Explore</button> }
      {location.encountersRemaining > 0 ? null : <button onClick={ pressOn }>Press on</button>}
    </div>
    </>
  )
}

export default Location