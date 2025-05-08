import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';

function CartItem() {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    const [promovalue, setpromovalue] = useState('');
    const [total, setTotal] = useState(getTotalCartAmount()); // State to hold the total amount
    const [promoApplied, setPromoApplied] = useState(false); // State to track if the promo has been applied

    // This is the function to recalculate the total
    const calculateTotal = () => {
        const subtotal = getTotalCartAmount(); // Recalculate subtotal
        const shippingAmount = subtotal > 150 ? 0 : 20;
        let newTotal = subtotal + shippingAmount;
        return newTotal;
    };

    // Whenever cartItems  change, update total
    useEffect(() => {
        setTotal(calculateTotal());
    }, [cartItems]);

    // Promo code input change handler
    const changeHandler = (event) => {
        setpromovalue(event.target.value);
    };

    // Promo code submit handler
    const handleSubmit = () => {
        if (promovalue === 'ABCD EFGH @341' && !promoApplied) {
            setPromoApplied(true); // Mark promo as applied
            setTotal(total - 25); // Apply the discount once
        } else if (promovalue !== 'ABCD EFGH @341') {
            alert('Invalid promo code');
        } else {
            alert('Promo code already applied!');
        }
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt='cart' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} alt="remove" onClick={() => { removeFromCart(e.id) }} className='cartitem-remove-icon' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />

                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>{getTotalCartAmount() > 150 ? (<span>Free</span>) : (<span> $20</span>)}</p>
                        </div>
                        <hr />

                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${total}</h3>
                        </div>
                    </div>

                    <button>Proceed To Check Out</button>
                </div>

                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promobox">
                        <input
                            type="text"
                            placeholder='Promo Code'
                            value={promovalue}
                            onChange={changeHandler}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartItem;
