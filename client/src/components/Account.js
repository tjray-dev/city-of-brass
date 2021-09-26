import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import UpdateUserForm from './UpdateUserForm'

const Account = ({ user, setUser,  handleUser }) =>{
  
  const [update, setUpdate] = useState(false)
  const history = useHistory()

  useEffect( () => {
    if (!user){
      (history.push('/'))
    }
  })

  return (
    <>
    <h1>Welcome, {`${user.user_name}`}</h1>
    { update ? 
      <UpdateUserForm user={user} setUser={setUser} handleUser={handleUser}/>
      :
      <button onClick={ () => setUpdate(!update) }>Edit Account</button>
    }
    <button onClick={() => history.push('/character')}>Character Creation</button>
    </>
  )
}

export default Account