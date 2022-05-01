import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const LandingPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect( () => {
  })
  return (
    <div style={{ 'display' : 'flex', 'align-items' : 'center', 'flex-direction' : 'column', 'justify-content' : 'center',  }}>
      <p>
        The tales tell of a grand city, the jewel of the desert sands. 
        An Oasis to all who wandered the harsh and unforgiving lands.
        A city of peace and prosperity, of knowledge and wealth.
        Ruled by those that had ascended to the foot of the heavens.
        Thus did generations pass, but a darkness grew in the very heart of the city.
        From its foul essence did the city's ultimate end spew.
        Calamity then seemed but preordained, if not by linage than by some yet greater being.
        Thus did the linage fall not by blood and hellfire, but by willful abandonment and decay.
        Until the darkness could be ignored no longer.
        Then the gates of the divine palace where flung open and out poured monstrosities and horrors from beyond.
        All that is said to remain of the great city is a crumbled stone gate on the edge of oasis out among the dunes of the deep desert.
        Though none who have ventured into those forgotten sands have ever returned.
      </p>
      <button class=" button is-primary is-large is-rounded is-outlined" onClick={() => history.push('/origin')}>Play</button>
    </div>
  )
}

export default LandingPage