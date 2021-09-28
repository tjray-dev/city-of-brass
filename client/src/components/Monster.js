const Monster = () => {

const monster = useSelector(state) 
  return (
    <span>monster.character_name</span>
    <span>HP: monster.current_hp</span>
    <span>Attack: monster.attack_bonus</span>
    <span>Defense: monster.defense_bonus</span>
  )
}