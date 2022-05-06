import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { playerExpUp, fetchItem } from '../slices/playerSlice'

const Victory = () => {

  // dispatch level
  // fetch an item from the database 
  // dispatch item to inventory
  // push to location page

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(playerExpUp(10))
    dispatch(fetchItem())
  }, [dispatch])
  return(
    <div>
      <h1>Great Job!</h1>
    </div>
  )
}

export default Victory