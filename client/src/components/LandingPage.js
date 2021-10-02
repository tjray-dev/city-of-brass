import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser, } from '../slices/userSlice'

const LandingPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector( state => state.user)

  const handleLogin = () => {
    if (user.user_name){
      fetch('/me').then( r => {
        if(r.ok){
          r.json()
            .then( user => dispatch(setUser(user)) )
        }
      })
    } else {
      history.push('/login')
    }
  }

  return (
    <div>
      <h1>THE CITY OF BRASS</h1>
      <p>
        Welcome to The City of Brass!
      </p>
        <button onClick={handleLogin}>Log In</button>
    </div>

  )
}

export default LandingPage