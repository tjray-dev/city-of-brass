import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { name, password, login, setUser } from '../slices/userSlice'


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
      .then(data => dispatch(setUser(data)))
      .then(() => history.push('/account'))

  }

  const handleClick = () => {
    history.push('/signup')
  }

  return (
    <form style={{ 'display': 'flex', 'align-items': 'center', 'flex-direction': 'column' }} onSubmit={handleLogin}>
      <label for="user_name">User Name</label>
      <input type="text"
        name="user_name"
        placeholder="User Name"
        onChange={e => handleName(e)}
      />
      <label for="password">Password</label>
      <input type="text"
        name="password"
        placeholder="Password"
        onChange={e => handlePassword(e)}
      />
      <div style={{ 'display' : 'flex'}}>
        <input class="button is-primary is-small is-rounded" type="submit"
          name="login"
          value="Login"
        />
        <button class="button is-link is-small is-rounded" onClick={() => history.push('/signup')}>signup</button>
        <button class="button is-small is-danger is-outlined is-rounded" onClick={() => history.push('/')}>Cancel</button>
      </div>
    </form>
  )
}
export default Login