const Skills = () => {

  const [skills, setSkills] = useState([])
  return (
    <div>
      {skills.map(skill => {
        <li>Skill : level</li>
      })}
    </div>
  )
}