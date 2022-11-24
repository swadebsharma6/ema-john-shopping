import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    // {products: products, initialCart: initialCart }
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) =>{
       const remaning = cart.filter(product =>product.id !== id);
       setCart(remaning);
       removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem ={handleRemoveItem}
                    ></ReviewItem> )
                }
                {
                  cart.length === 0  && <h2>No Items For Review. Please <Link to ='/'>Shop More</Link> </h2> 
                }
            </div>
            <div className='cart-container'>
                <Cart  clearCart={clearCart}  cart={cart}>
                </Cart>
                
                
                
                
            </div>
        </div>
    );
};

export default Orders;