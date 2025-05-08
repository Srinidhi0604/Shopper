import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Related from '../Components/RelatedProducts/Related';


function Product() {
  
  const {all_products} = useContext(ShopContext);
  // console.log(all_products)
  const {productId} = useParams();
  // useParams o/p is in string format.
  const product = all_products.find((e) => e.id === Number(productId));
  // console.log(product);

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Related category = {product.category} id = {product.id}/>
    </div>
  )
}

export default Product
