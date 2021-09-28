import { BrowserRouter, Switch, Route } from "react-router-dom"

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Account from './components/Account'
import CharacterCreation from './components/CharacterCreation'
import Room from './components/Room'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/character">
          <CharacterCreation />
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
