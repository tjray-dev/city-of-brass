import { useHistory } from 'react-router-dom'

const NPC = () => {

  const history = useHistory()
  
  return(
    <>
      <h1>Hello There!</h1>
      <div>
        <button onClick={() => history.push('/location')}>Continue On</button>
      </div>
    </>
  )
}
export default NPC