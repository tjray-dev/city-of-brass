import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {

  const skills = useSelector(state => state.skills)

  return (
    <div class="card" style={{ 'margin-left': '1em', 'width' : '10%' }}>
      <h5 class="is-size-5" style={{ 'border-left' : 'solid 5px','border-bottom' : 'dashed 2px', 'width' : '10%'}}>
        Skills
      </h5>
      <ul style={{ 'list-style' : 'none', 'margin-left' : '.5em'}}>
        {skills.entities.map(skill => <li style={{ 'border-left' : 'solid 5px', 'border-bottom' : 'dashed 1px'}}>{skill.name}: 1</li>)}
      </ul>
    </div>
  )
}

export default Skills