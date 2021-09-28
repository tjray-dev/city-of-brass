const Skills = () => {

  const skills = ["skill", "skill", "skill", "skill"]
  return (
    <div>
      {skills.map(skill => {
        return  <li>{skill}</li>
      })}
    </div>
  )
}

export default Skills