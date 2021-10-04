import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { name, password, login, setUser} from '../slices/userSlice'


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

  const handleLogin = e => {
    e.preventDefault()
    dispatch(login(user))
      .unwrap()
        .then( data => dispatch(setUser(data)) )
          .then(() => history.push('/account'))

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