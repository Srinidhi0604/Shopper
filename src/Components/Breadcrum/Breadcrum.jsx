import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
       HOME <img src={arrow_icon} alt='img'></img> SHOP <img src={arrow_icon}  alt='img'></img> {product.category} <img src={arrow_icon}  alt='img'></img>  {product.name}
    </div>
  )
}

export default Breadcrum
  