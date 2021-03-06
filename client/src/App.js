import { BrowserRouter, Switch, Route } from "react-router-dom"

import LandingPage from './components/LandingPage'
import Oasis from './components/Oasis'
import Encounter from './components/Encounter'
import Location from './components/Location'
import Battle from './components/Battle'
import Boss from './components/Boss'
import NPC from './components/NPC'
import Victory from './components/Victory'
import Defeat from './components/Defeat'
import Inventory from './components/Inventory'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/inventory'>
          <Inventory />
        </Route>
        <Route path="/defeat">
          <Defeat />
        </Route>
        <Route path="/victory">
          <Victory />
        </Route>
        <Route path="/npc">
          <NPC />
        </Route>
        <Route path="/boss">
          <Boss />
        </Route>
        <Route path="/battle">
          <Battle />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/encounter">
          <Encounter />
        </Route>
        <Route path="/lost_oasis">
          <Oasis />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
