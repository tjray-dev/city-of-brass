import { useSelector, useDispatch } from 'react-redux'

const Items = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  
  return (
    <div style={{ 'margin-left': '1em', }}>
      <h5 class="is-size-5" style={{ 'border-left' : 'solid 5px','border-bottom' : 'dashed 2px', 'width' : '10%'}}>
        Items
      </h5>
      <ul style={{ 'list-style' : 'none', 'margin-left' : '.5em'}}>
        {items.entities.map(item => <li style={{ 'border-left' : 'solid 5px', 'border-bottom' : 'dashed 1px', 'width' : '9.5%'}}>{item.name}: 1</li>)}
      </ul>
    </div>
  )
}

export default Items