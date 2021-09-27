import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom"
import { useEffect } from 'react'

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Account from './components/Account'
import Character from './components/Character'
import Room from './components/Room'

function App() {

  // State
      // user
      // Character
      // Monster
      // Room
      // Skills
      // Items

  // const history = useHistory()

  // useEffect(() => {
  //   fetch("/me").then( r => {
  //     if (r.ok) {
  //       r.json().then( user => {
  //         if (user){
  //           setUser(user)
  //           console.log(user)
  //         }
  //       })
  //     }
  //   });
  // }, []);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/character">
          <Character />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
