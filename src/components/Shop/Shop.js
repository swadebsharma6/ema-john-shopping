import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart =(product)=>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
      }


    return (
        <div className='shop'>

            {/*Products-container-start  */}
         <div className="products-container">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
         </div>
         {/* products-container-close */}

        {/* Cart-Container start*/}
         <div className="cart-container">
           <Cart cart={cart}></Cart>
         </div>  
         {/* Cart-Container close */}
        </div>
    );
};

export default Shop;