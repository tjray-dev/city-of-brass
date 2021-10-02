import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from '../slices/userSlice'
import { setCharacter } from '../slices/characterSlice'

import Logout from './Logout'

const Account = () =>{

  const user = useSelector( state => state.user )
  const character = useSelector( state => state.character )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleRoom = () => {
    fetch(`/characters/${user.character_id}`)
      .then( r => r.json() )
        .then( character => dispatch(setCharacter(character)) ).then(() => history.push('/room') )
  } 
  useEffect(() => {
    fetch('/me').then( r => {
      if(r.ok){
        r.json()
          .then( user => dispatch(setUser(user)) )
      }
    })
  })

  return (
    <>
    <h1>Welcome, {`${user.user_name}`}</h1>
    <Logout />
    { user.character_id ? <button onClick={handleRoom}>Enter The City</button> :  <button onClick={() => history.push('/character')}>Character Creation</button>}
   
    </>
  )
}

export default Account