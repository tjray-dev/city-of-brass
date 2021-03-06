import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { playerExpUp } from '../slices/playerSlice'
import { fetchItem } from '../slices/inventorySlice'
import { clearEncounter } from '../slices/locationSlice'

const Victory = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const loot = useSelector(state => state.inventory.loot)
  const exp = useSelector(state => state.player.exp)

  useEffect(() => {
    dispatch(playerExpUp(10))
    dispatch(fetchItem())
    dispatch(clearEncounter())
  }, [dispatch])
  return(
    <>
      <div>
        <h1>Great Job!</h1>
        <span>{loot.item_name}</span><br />
        <span>{exp} exp</span>
      </div>
      <div>
        <button onClick={() => history.push('/location')}>Continue On</button>
      </div>
    </>
  )
}

export default Victory