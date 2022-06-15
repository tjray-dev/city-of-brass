import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { fetchLocation } from '../slices/locationSlice'
import { level_up} from '../slices/playerSlice'

const Oasis = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const location = useSelector(state => state.location)
  const exp = useSelector( state => state.player.exp )

  useEffect(() => {
    dispatch(fetchLocation(1))
  })

  return(
    <>
      { (exp > 0 && exp % 100 === 0) ? <button onClick={ () => dispatch(level_up()) }>Level Up!</button> : null }
      <div className='location-block'>
        <h1 className='location-title'>The Forgotten Oasis</h1>
        <p className='location-blurb'>
          You shudder awake, some horrible dream fast fading from your mind.
          You lie on the shores of a small, acred oasis.
          The sun hangs low in the sky. Leering from behind a rock formation of unusually serpentine suggestion.  
          Its fumes catch in your throat and eys.
          Across from you stands the crumbled remains of a massive city gate.
        </p>
        { location.name === "" ? null : <button className='location-btn' onClick={() => history.push('/location')}>Pass through the gate</button> }
      </div>
    </>
  )
}

export default Oasis