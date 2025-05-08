import React, { useContext } from 'react'
import './Related.css'
// import data_product from '../Assests/data'
import Item from '../Items/Item'
import { ShopContext } from '../../Context/ShopContext'

function Related(props) {
  const {all_products} = useContext(ShopContext);
  let data_product = all_products.filter((item) => item.category === props.category)
  data_product = data_product.filter((item) => item.id !== props.id)
  const limited_product = data_product.slice(1,5);

  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproduct-items">
            {limited_product.map((item,id) => {
                return <Item key={id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div> 
      
    </div>
  )
}

export default Related
