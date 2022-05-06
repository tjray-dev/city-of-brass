import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { name, origin, background } from '../slices/playerSlice'

const CharacterCreation = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleCreation = (e) => {
    e.preventDefault()
    history.push('/encounter')
  }

  return(
    <div>
      <p>You have wandered so long you scarce remember your life before the heat and sand of the desert.</p>
      <form onSubmit={ (e) => handleCreation(e)}>
        <label>
          Homeland: 
            <select name='origin' onChange={ e => dispatch(origin(e.target.value)) }>
              <option value='north'>North</option>
              <option value='south'>South</option>
              <option value='east'>East</option>
              <option value='west'>West</option>
            </select>
        </label>
        <label>
          Background: 
            <select name='background' onChange={e => dispatch(background(e.target.value))}>
              <option value='peasant'>Peasant</option>
              <option value='priest'>Priest</option>
              <option value='nobel'>Noble</option>
              <option value='soldier'>Soldier</option>
            </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default CharacterCreation