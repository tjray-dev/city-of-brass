import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from '../slices/userSlice'

const LandingPage = () => {
  const user = useSelector( state => state.user )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }
  const handleLogOut = () => {
      fetch("/logout", {
        method: "DELETE",
      }).then( data => dispatch(setUser));
  }

  return (
    <div>
      <h1>THE CITY OF BRASS</h1>
      <p>
        Welcome to The City of Brass!
      </p>
        <button onClick={handleLogOut}>Log Out</button> 
        <button onClick={handleLogin}>Log In</button>
    </div>

  )
}

export default LandingPage