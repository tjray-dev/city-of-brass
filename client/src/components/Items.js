import { useSelector } from 'react-redux'

const Items = () => {

  const items = useSelector(state => state.items.entities)

  return (
    <div>
      {items.map( item => <li>{item.item_name}: {item.item_level}</li>)}
    </div>
  )
}

export default Items