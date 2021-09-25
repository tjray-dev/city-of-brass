import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ user, setUser, handleUser }) => {
  
  
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then( r => {
      if (r.ok) {
        r.json().then( data => setUser(data)).then(history.push('/account'))
      }
    })
  }

  const handleClick = () => {
    history.push('/signup')
  }

  return (
      <form onSubmit={ e => handleLogin(e) }>
        <input type="text" 
              name="user_name"
              placeholder="User Name"
              onChange={ e => handleUser(e) }
        />
        <br/>
        <input type="text"
              name="password"
              placeholder="Password"
              onChange={ e => handleUser(e) }
        />
        <br/>
        <input type="submit"
              name="login"
              value="Login"
        />
        <br/>
        <button onClick={handleClick}>signup</button>
      </form>
  )
}
export default Login