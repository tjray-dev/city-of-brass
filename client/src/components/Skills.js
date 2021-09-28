import { useSelector } from 'react-redux'

const Skills = () => {

  const skills = useSelector(state => state.skills.entities)
  console.log(skills)
  return (
    <div>
      {skills.map( skill => <li>{skill.skill_name} : {skill.skill_level}</li>)}
    </div>
  )
}

export default Skills