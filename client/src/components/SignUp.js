import { useHistory } from 'react-router-dom'


const SignUp = ({ user, setUser, handleUser }) => {

  const history = useHistory()



  const handleSignUp = e =>{
    e.preventDefault()
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then( r => r.json() )
        .then( data => setUser(data) )
          .then( history.push('/account') )
  }

  return (
    <form onSubmit={ e =>handleSignUp(e) }>
      <input type="text"
             name="user_name"
             placeholder="User Name"
             onChange={ e =>handleUser(e) }
      />
      <br/>
      <input type="text"
             name="password"
             placeholder="Password"
             onChange={ e =>handleUser(e) }
      />
      <br/>
      <input type="text"
             name="password_confirmation"
             placeholder="Password Confirmation"
             OnChange={ e => handleUser(e) }
      />
      <br/>
      <input type="submit"
             name="submit"
             value="sign up"
      />
    </form>
  )
}

export default SignUp