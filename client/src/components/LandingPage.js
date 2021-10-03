import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser, } from '../slices/userSlice'

const LandingPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector( state => state.user)

  useEffect( () => {
      fetch('/me').then( r => {
        if(r.ok){
          r.json()
            .then( user => dispatch(setUser(user)) )
              .then(() => history.push('/account'))
        }
      })
  })
  console.log(user)
  return (
    <div>
      <h1>THE CITY OF BRASS</h1>
      <p>
        Welcome to The City of Brass!
      </p>
        <button onClick={() => history.push('/login')}>Log In</button>
    </div>

  )
}

export default LandingPage