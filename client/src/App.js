import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LandingPage from './components/LandingPage'
import CharacterCreation from './components/CharacterCreation'
import Oasis from './components/Oasis'
import Encounter from './components/Encounter'
import Loading from './components/Loading'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/encounter">
          <Encounter />
        </Route>
        <Route path="loading">
          <Loading />
        </Route>
        <Route path="/lost_oasis">
          <Oasis />
        </Route>
        <Route path="/origin">
          <CharacterCreation />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
