
import { useSelector } from 'react-redux'

import NPC from './NPC'
import Boss from './Boss'
import Battle from './Battle'

const Encounter = () => {

  const character = useSelector(state => state.character)

  const whichCharacter = () => {

    switch(character.charType){
      case 1:
        return <Boss />
      case 2:
        return <Battle />
      case 3:
        return <NPC />
      default: 
        return console.log('*obnoxious hold music*')
    }
  }

  return whichCharacter()

}

export default Encounter