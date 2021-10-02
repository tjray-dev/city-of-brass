import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from '../slices/userSlice'

import Logout from './Logout'

const Account = () =>{

  const user = useSelector( state => state.user )
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    fetch('/me').then( r => {
      if(r.ok){
        r.json()
          .then( user => dispatch(setUser(user)) )
      }
    })
  })

  console.log(`The logged in user is ${user.user_name}`)
  return (
    <>
    <h1>Welcome, {`${user.user_name}`}</h1>
    <Logout />
    <button onClick={() => history.push('/character')}>Character Creation</button>
    </>
  )
}

export default Account