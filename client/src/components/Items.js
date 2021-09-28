const Items = () => {

  const items = ["item", "item", "item"]
  return (
    <div>
      {items.map(item => {
        return <li>Item : effect </li>
      })}
    </div>
  )
}

export default Items