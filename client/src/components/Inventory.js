import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Inventory = () => {
  
  const history = useHistory()
  const inventory = useSelector( state => state.inventory )

  return(
    <>
      <h1>Inventory</h1>
      <div className='inventory-menu'>
        <div>
          <ul>
            <span>Weapons</span>
            { inventory.weapon.map( item => {
              return <li>{item.item_name}</li>
            })}
          </ul>
        </div>
        <div>
          <ul>
            <span>Armor</span>
            { inventory.armor.map( item => {
              return <li>{item.item_name}</li>
            })}
          </ul>
        </div>
        <div>
          <ul>
            <span>Trinkets</span>
            { inventory.trinket.map( item => {
              return <li>{item.item_name}</li>
            })}
          </ul>
        </div>
        <div>
          <ul>
            <span>Key</span>
            { inventory.key.map( item => {
              return <li>{item.item_name}</li>
            })}
          </ul>
        </div>
      </div>
      <button onClick={() => history.push('/location')}>Close Inventory</button>
    </>
  )
}

export default Inventory