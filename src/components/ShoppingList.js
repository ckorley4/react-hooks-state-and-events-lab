import React, { useState } from 'react'
import Item from './Item'

function ShoppingList({ items }) {
  const [itemList, setItemList] = useState(items)

  function handleChange(e) {
    const newItem = items.filter((item) => {
      if (e.target.value === 'All') {
        return true
      } else {
        return item.category.toLowerCase() === e.target.value.toLowerCase()
      }
    })
    setItemList(newItem)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
