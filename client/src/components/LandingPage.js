import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const LandingPage = ({ user, setUser}) => {
  const history = useHistory()

  const handleLogin = () => {
    history.push('/login')
  }
  const handleLogOut = () => {
      fetch("/logout", {
        method: "DELETE",
      }).then(setUser);
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