import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { name, password, setUser } from '../slices/userSlice'


const Login = () => {
  
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleName = e => {
    dispatch(name(e.target.value))
  }

  const handlePassword = e => {
    dispatch(password(e.target.value))
  }

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
        
        r.json().then( data => {
          // console.log(data)
          dispatch(setUser(data))
          // console.log(user)
        }).then(history.push('/account'))
      }
    })
  }

  const handleClick = () => {
    history.push('/signup')
  }

  return (
      <form onSubmit={handleLogin}>
        <input type="text" 
              name="user_name"
              placeholder="User Name"
              onChange={ e => handleName(e) }
        />
        <br/>
        <input type="text"
              name="password"
              placeholder="Password"
              onChange={ e => handlePassword(e) }
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