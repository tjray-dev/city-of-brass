import { useSelector, useDispatch } from 'react-redux'

const Items = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  
  return (
    <>
     {items.entities.map( item => <li>{item.name}: {item.item_level}</li>)}
    </>
  )
}

export default Items