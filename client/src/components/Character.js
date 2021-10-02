import { useSelector } from 'react-redux'

const Character = () => {

  const character = useSelector( state => state.character)
  return (
    <>
      <span>{character.character_name}</span>
      <br />
      <span>{character.character_origin}</span>
      <br />
      <span>HIT POINTS:{character.current_hp}</span>
      <br />
      <span>ATTACK: {character.attack_bonus}</span>
      <br />
      <span>DEFENSE: {character.defense_bonus}</span>
      <br />
    </>
  )
}

export default Character