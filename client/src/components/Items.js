import { useSelector, useDispatch } from 'react-redux'
import { useGetItemQuery } from '../slices/apiSlice'
import { useEffect } from 'react'
import { addItem } from '../slices/itemsSlice'

const Items = () => {

  const dispatch = useDispatch()
  
  return (
    <>
     {/* {map( item => <li>{item.name}: {item.item_level}</li>) : null} */}
    </>
  )
}

export default Items