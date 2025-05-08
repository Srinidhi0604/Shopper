import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`} className='item-link'> 
          <img  onClick={window.scrollTo(0,0)} src={props.image} alt='item' />
        </Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className="item-prices-new">
                <p>${props.new_price}</p>
            </div>

            <div className="item-prices-old">
                <p>{props.old_price}</p>
            </div>
        </div>
    </div>
  )
}

export default Item