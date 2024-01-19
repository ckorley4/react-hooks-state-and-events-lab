import React, { useState } from 'react'

function Item({ id, name, category }) {
  const [addToCart, setAddToCart] = useState(true)
  function handleCart() {
    return setAddToCart((addToCart) => !addToCart)
  }
  return (
    <li key={id} className={addToCart ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">
        {addToCart ? 'Add to Cart' : 'Remove from Cart'}
      </button>
    </li>
  )
}

export default Item
