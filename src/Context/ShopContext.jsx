import React, { createContext, useState } from "react";
import all_products from "../Components/Assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    // key represents the product ID and the value represents the quantity

    let cart = {};
    for (let index = 1; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }

    return cart;
}

export const ShopContextProvider = ({children}) => {
    const [size, setsize] = useState('');
    const[cartItems, setCartItems] = useState(getDefaultCart()); 

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        // console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = all_products.find((product) => product.id === Number(item));

                totalAmount += itemInfo.new_price * cartItems[item];
            } 
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    // console.log(cartItems);

    const contextValue = {
        setsize,
        size,
        all_products,
        cartItems, 
        removeFromCart,
        addToCart,
        getTotalCartAmount,
        getTotalCartItem,

    };

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

