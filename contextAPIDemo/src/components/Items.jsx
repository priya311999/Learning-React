import React, { useContext } from 'react'

function Items(props) {
  return (
    <div>
        <h4>
        {props.name}
        </h4>
        <p>Item Price: ${props.price} </p>
        <button onClick={}>Add To Card</button>
    </div>

  )
}

export default Items