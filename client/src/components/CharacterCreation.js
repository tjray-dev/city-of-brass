import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CharacterCreation = () => {

  const [character, setCharacter] = useState()

  const history = useHistory()

  const handleCharacterName = e => {
    setCharacter({...character, 
      [e.target.name] : e.target.value
    })
  }

  const handleOrigin = e => {
    setCharacter({...character, 
      [e.target.name] : e.target.value
    })
  }

  const handleCreateCharacter = e => {
    e.preventDefault()
    fetch('/characters',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    }).then( r => r.json() ).then( data => setCharacter(data) )
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
            onChange={ e => handleCharacterName(e) }
          />
          <select name="character_origin" id="origin" onChange={e => handleOrigin(e) }>
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