import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { name, origin, currentHP, incrementAttack, decrementAttack, incrementDefense, decrementDefense } from '../slices/characterSlice'

const CharacterCreation = () => {

  const character = useSelector( state => state.character )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCreateCharacter = e => {
    e.preventDefault()
    fetch('/characters',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    }).then( r => r.json() )
    history.push('/room')
  }

  console.log(character)
  return (
    <>
      <div>
        <form onSubmit={ e => handleCreateCharacter(e) }>
          <input type="text"
            name="character_name"
            placeholder="Character Name"
            onChange={ e => dispatch(name(e.target.value)) }
          />
          <select name="character_origin" 
                  id="origin" 
                  onChange={ e => dispatch(origin(e.target.value))}
          >
            <option value="origin1">Origin1</option>
            <option value="origin2">Origin2</option>
            <option value="origin3">Origin3</option>
            <option value="origin4">Origin4</option>
          </select>
          <input type="submit"
                 name="creation"
                 value="Create Character"
          />
        </form>
      </div>
    </>
  )
}

export default CharacterCreation