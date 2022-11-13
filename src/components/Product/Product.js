import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css';

const Product = (props) => {
   const {product, handleAddToCart} =props;
    const {name, img, price, ratings, seller} = product;
   
    return (
        <div className='product'>
           <img src={img} alt="" /> 
          <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>Price:${price} </p>
           <p>Seller: {seller}</p>
           <p><small>Ratting:{ratings}</small></p>
          </div>
          <button onClick={() => handleAddToCart(product)}  className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;