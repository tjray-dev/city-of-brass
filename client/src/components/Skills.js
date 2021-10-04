import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {

  const skills = useSelector(state => state.skills)

  return (
    <div>
      {skills.entities.map( skill => <li>{skill.name} : {skill.skill_level}</li>)}
    </div>
  )
}

export default Skills