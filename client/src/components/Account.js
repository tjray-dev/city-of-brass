import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from '../slices/userSlice'
import { fetchCharacter, setCharacter } from '../slices/characterSlice'
import { addSkills } from '../slices/skillsSlice'
import { addItems } from '../slices/itemsSlice'

import Logout from './Logout'

const Account = () => {

  const user = useSelector(state => state.user)
  const character = useSelector(state => state.character)
  const skills = useSelector(state => state.skills.skills)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleRoom = () => {
    dispatch(fetchCharacter(user.character_id))
      .unwrap()
      .then(data => {
        dispatch(setCharacter(data))
        dispatch(addSkills(data.skills))
        dispatch(addItems(data.items))
      })
      .then(() => history.push('/room'))
  }

  const handleDelete = () => {
    fetch(`/users/${user.id}`, {method: "DELETE"})
    .then(history.push('/'))
    .then(alert("ACCOUNT DELETED"))
  }
  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
          .then(user => dispatch(setUser(user)))
      }
    })
  }, [user])
  return (
    <div style={{ 'display': 'flex', 'align-items': 'center', 'flex-direction': 'column' }}>
      <h1 class="is-size-1">Welcome, <span class="has-text-weight-bold">{`${user.user_name}`}</span></h1>
      {user.character_id ? 
          <button class="button is-primary is-large is-rounded" onClick={handleRoom}>Enter The City</button> 
        : 
          <button class="button is-primary is-rounded is-large" onClick={() => history.push('/character')}>Character Creation</button>
      }
      <Logout />
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  )
}

export default Account