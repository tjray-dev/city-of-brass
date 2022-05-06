import { useHistory } from 'react-router-dom'

const Defeat = () => {

  const history = useHistory()

  return(
    <>
      <h1>Woomp Woomp</h1>
      <button onClick={() => history.push('/oasis')}>Awaken</button>
    </>
  )
}

export default Defeat