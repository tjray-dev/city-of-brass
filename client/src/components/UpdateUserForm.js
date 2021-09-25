import { useHistory } from 'react-router-dom'

const UpdateUserForm = ({ user, setUser, handleUser }) => {
  
  const history = useHistory()

  const handleUpdateUser = e => {
    e.preventDefault()
    fetch(`/users/${user.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    })
  }
  const handleDeleteUser = () => {
    fetch(`users/${user.id}`,{
      method: "DELETE"
    }).then(fetch('/logout', {
      method: "DELETE"
    })).then( () => setUser() ).then(history.push('/'))
  }

  return (
    <form onSubmit={handleUpdateUser}>
      <label htmlFor="user_name">Edit User Name</label>
      <input type="text"
             name="user_name"
             placeholder={user.user_name}
             onChange={ e => handleUser(e) }
      />
      <br/>
      <label htmlFor="password">New Password</label>
      <input type="text"
             name="password"
             placeholder="Password"
             onChange={ e => handleUser(e) }
      />
      <br/>
      <label htmlFor="password_confirmation">Confirm New Password</label>
      <input type="text"
             name="password_confirmation"
             placeholder="Password Confirmation"
             onChange={ e => handleUser(e) }
      />
      <br/>
      <input type="submit"
             name="update_user"
             value="Update User"
      />
      <input type="button"
             name="delete"
             value="Delete User"
             onClick={handleDeleteUser}
      />
    </form>
  )
}

export default UpdateUserForm