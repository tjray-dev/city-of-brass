import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import Encounter from './Encounter'

const Loading = () => {

  const character = useSelector(state => state.character)
  console.log(character)

  return (
    <h1>Please Hold!</h1>
  )
}

export default Loading