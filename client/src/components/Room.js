import { useSelector, useDispatch } from 'react-redux'

import Skills from './Skills'
import Items from './Items'
import Character from './Character'
import Monster from './Monster'

const Room = () => {

  const room = useSelector( state => state.room )
  return (
    <>
      <Skills />
      <Items />
      <Character />
      <Monster />
    </>
  )
}

export default Room