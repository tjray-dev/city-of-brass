import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom"
import { useState, useEffect } from 'react'

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Account from './components/Account'
import Character from './components/Character'

function App() {

  const [user, setUser] = useState()

  const history = useHistory()

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

  const handleUser = e => {
    setUser({...user,
    [e.target.name]: e.target.value 
    })
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character">
          <Character />
        </Route>
        <Route path="/account">
          <Account user={user} 
                   setUser={setUser} 
                   handleUser={handleUser}
          />
        </Route>
        <Route path="/signup">
          <SignUp user={user} 
                  setUser={setUser} 
                  handleUser={handleUser}
          />
        </Route>
        <Route path="/login">
          <Login user={user} 
                 setUser={setUser} 
                 handleUser={handleUser}
          />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
