import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import UpdateUserForm from './UpdateUserForm'

const Account = () =>{

  const user = useSelector( state => state.user )
  const dispatch = useDispatch()
  
  const [update, setUpdate] = useState(false)
  const history = useHistory()
// console.log(user)
  return (
    <>
    <h1>Welcome, {`${user.user_name}`}</h1>
    { update ? 
      <UpdateUserForm />
      :
      <button onClick={ () => setUpdate(!update) }>Edit Account</button>
    }
    <button onClick={() => history.push('/character')}>Character Creation</button>
    </>
  )
}

export default Account