import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { name, origin, setCharacter } from '../slices/characterSlice'
import { setCharacterId, addCharacter } from '../slices/userSlice'

// dispatch character id to the user.character_id then thunk update the user
const CharacterCreation = () => {

  const character = useSelector(state => state.character)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCreateCharacter = e => {
    e.preventDefault()
    fetch('/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    }).then(r => r.json()).then(data => {
        dispatch(setCharacterId(data.character.id))
      }).then(history.push('/account'))
  }

  return (
    <form style={{ 'display': 'flex', 'align-items': 'center', 'flex-direction': 'column' }} onSubmit={e => handleCreateCharacter(e)}>
      <label for="character_name">Character Name</label>
      <input type="text"
        name="character_name"
        placeholder="Character Name"
        onChange={e => dispatch(name(e.target.value))}
      />
      <label for="character_origin">Origin</label>
      <select name="character_origin"
        id="origin"
        onChange={e => dispatch(origin(e.target.value))}
      >
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>
      <input class="button is-primary is-rounded is-small" type="submit"
        name="creation"
        value="Create Character"
      />
      <button class="button is-small is-danger is-outlined is-rounded" onClick={() => history.push('/account')}>Cancel</button>
    </form>
  )
}

export default CharacterCreation