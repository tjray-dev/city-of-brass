import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { origin, background, initializePlayer } from '../slices/playerSlice'

const LandingPage = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const awaken = () => {
    dispatch(initializePlayer())
    history.push('/lost_oasis')
  }

  return (
    <>
      <div className='background'></div>
      <div className='parallax-content'>
        <span>You were born far from this desolate place. In the</span>
        <select className='landing-btn' name='origin' onChange={ e => dispatch(origin(e.target.value)) }>
            <option value='north'>North</option>
            <option value='south'>South</option>
            <option value='east'>East</option>
            <option value='west'>West</option>
        </select>
      </div>
      <div className='background'></div>
      <div className='parallax-content'>
        <span>You were a</span>
        <select className='landing-btn' name='background' onChange={e => dispatch(background(e.target.value))}>
            <option value='peasant'>Peasant</option>
            <option value='priest'>Priest</option>
            <option value='nobel'>Noble</option>
            <option value='soldier'>Soldier</option>
        </select>
        <span> in your past life.</span>
      </div>
      <div className='background'></div>
      <div className='parallax-content'>
        <button onClick={awaken}>Awaken</button>
      </div>
    </>
  )
}

export default LandingPage