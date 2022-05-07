import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { fetchLocation } from '../slices/locationSlice'

const Oasis = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const location = useSelector(state => state.location)

  useEffect(() => {
    dispatch(fetchLocation(1))
  })

  return(
    <div>
      <h1>The Forgotten Oasis</h1>
      <p>
        You shudder awake, some horrible dream fast fading from your mind.
        You lie on the shores of a small, acred oasis.
        The sun hangs low in the sky. Leering from behind a rock formation of unusually serpentine suggestion.  
        Its fumes catch in your throat and eys.
        Across from you stands the crumbled remains of a massive city gate.
      </p>

      { location.name === "" ? null : <button onClick={() => history.push('/encounter')}>Pass through the gate</button> }
    </div>
  )
}

export default Oasis