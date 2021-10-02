import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setUser } from '../slices/userSlice'

const Logout = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const logout = {
    user: {
      id: 0,
      user_name: "",
      session_id: 0
    }
  }

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then( data => dispatch(setUser(logout))).then(history.push('/'))
}

  return (
    <>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  )
}

export default Logout 