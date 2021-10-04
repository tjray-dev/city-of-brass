import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from '../slices/userSlice'
import { fetchCharacter, setCharacter } from '../slices/characterSlice'
import { addSkills } from '../slices/skillsSlice'
import { addItems } from '../slices/itemsSlice'

import Logout from './Logout'

const Account = () =>{

  const user = useSelector( state => state.user )
  const character = useSelector( state => state.character )
  const skills = useSelector( state => state.skills.skills)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleRoom = () => {
    dispatch(fetchCharacter(user.character_id))
      .unwrap()
        .then( data => {
          dispatch(setCharacter(data))
          dispatch(addSkills(data.skills))
          dispatch(addItems(data.items))
        })
          .then(() => history.push('/room'))
  } 
  useEffect(() => {
    fetch('/me').then( r => {
      if(r.ok){
        r.json()
          .then( user => dispatch(setUser(user)) )
      }
    })
  },[user])
  return (
    <>
    <h1>Welcome, {`${user.user_name}`}</h1>
    <Logout />
    { user.character_id ? <button onClick={handleRoom}>Enter The City</button> :  <button onClick={() => history.push('/character')}>Character Creation</button>}
   
    </>
  )
}

export default Account