import { Parallax } from 'react-parallax'

import background from '../background.png'

const Container = () => {
  return (
    <Parallax bgImage={background} bgImageAlt='the sands' strength={200}>
      <div class='text' id='intro'>
        <span>The tales tell of a grand city, the jewel of the desert sands.</span><br/>
        <span>An Oasis to all who wandered the harsh and unforgiving lands.</span><br/>
        <span>A city of peace and prosperity, of knowledge and wealth.</span><br/>
        <span>Ruled by those that had ascended to the foot of the heavens.</span><br/>
        <span>Thus did generations pass, but a darkness grew in the very heart of the city.</span><br/>
        <span>From its foul essence did the city's ultimate end spew.</span><br/>
        <span>Calamity then seemed but preordained, if not by linage than by some yet greater being.</span><br/>
        <span>Thus did the linage fall not by blood and hellfire, but by willful abandonment and decay.</span><br/>
        <span>Until the darkness could be ignored no longer.</span><br/>
        <span>Then the gates of the divine palace where flung open and out poured monstrosities and horrors from beyond.</span><br/>
        <span>All that is said to remain of the great city is a crumbled stone gate on the edge of oasis out among the dunes of the deep desert.</span><br/>
        <span>Though none who have ventured into those forgotten sands have ever returned.</span><br/>
      </div>
    </Parallax>
  )
}

export default Container