import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from  '../Assests/star_icon.png'
import star_dull from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {setsize, size} = useContext(ShopContext);
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');
    const [buttonText, setButtonText] = useState('ADD TO CART');

    const handleSizeClick = (sizeValue) => {
        setSelectedSize(sizeValue);
        setsize(sizeValue);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size first!');
            return;
        }
        addToCart(product.id);
        setButtonText('ADDED TO CART!');
        setTimeout(() => {
            setButtonText('ADD TO CART');
        }, 2000);
    };

    return (
        <div className='productdisplay'>
            <div className="product_left">
                <div className="image_list">
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                    <img src={product.image} alt="img" />
                </div>

                <div className="display_image">
                    <img src={product.image} alt="main_image"  className='productdisplay-main-img'/>
                </div>
            </div>

            <div className="product_right">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="st" />
                    <img src={star_icon} alt="st" />
                    <img src={star_icon} alt="st" />
                    <img src={star_icon} alt="st" />
                    <img src={star_dull} alt="sd" />
                    <p>(122)</p>
                </div>

                <div className="product-prices">
                    <div className="old-price">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>

                <div className="product-discription">
                    <p>A lightweight usualaly knitted, pullover shirt, close - fitting and with a round neckline and short sleeves, worn as an 
                        undershirt or outer garment. 
                    </p>
                </div>

                <div className="product-size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div 
                            className={selectedSize === 'S' ? 'selected' : ''} 
                            onClick={() => handleSizeClick('S')}
                        >S</div>
                        <div 
                            className={selectedSize === 'M' ? 'selected' : ''} 
                            onClick={() => handleSizeClick('M')}
                        >M</div>
                        <div 
                            className={selectedSize === 'L' ? 'selected' : ''} 
                            onClick={() => handleSizeClick('L')}
                        >L</div>
                        <div 
                            className={selectedSize === 'XL' ? 'selected' : ''} 
                            onClick={() => handleSizeClick('XL')}
                        >XL</div>
                        <div 
                            className={selectedSize === 'XXL' ? 'selected' : ''} 
                            onClick={() => handleSizeClick('XXL')}
                        >XXL</div>
                    </div>
                </div>

                <button onClick={handleAddToCart}>{buttonText}</button>
                <p className="right-category"><span className='heading-para'> Category : </span> {product.category === 'women'?  (<span>Women, T-shirt, Crop-top</span>) : (<span>Men, T-shirt, Hoodie</span>)}
                </p>

                <p className="right-category"><span className='heading-para'>Tags : </span> Modern , Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay
