import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { name, password, passwordConfirmation, setUser } from '../slices/userSlice'

const SignUp = () => {

  const user = useSelector( state => state.user )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleName = e => {
    dispatch(name(e.target.value))
  }

  const handlePassword = e => {
    dispatch(password(e.target.value))
  }

  const handlePasswordConfirmation = e => {
    dispatch(passwordConfirmation(e.target.value))
  }

  const handleSignUp = e =>{
    e.preventDefault()
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then( r => r.json() )
        .then( data => dispatch(setUser(data)) )
          .then( history.push('/account') )
  }

  return (
    <form style={{ 'display' : 'flex', 'align-items' : 'center', 'flex-direction' : 'column'}} onSubmit={ e =>handleSignUp(e) }>
      <label for="user_name">User Name</label>
      <input type="text"
             name="user_name"
             placeholder="User Name"
             onChange={ e => handleName(e) }
      />
      <label for="password">Password</label>
      <input type="text"
             name="password"
             placeholder="Password"
             onChange={ e =>handlePassword(e) }
      />
      <label for="password_confirmation">Re-Enter Password</label>
      <input type="text"
             name="password_confirmation"
             placeholder="Password Confirmation"
             onChange={ e => handlePasswordConfirmation(e) }
      />
      <input type="submit"
             name="submit"
             value="sign up"
      />
    </form>
  )
}

export default SignUp