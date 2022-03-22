import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img , name , price,  seller, ratings} = product;

    return (
        <div className='card'>
            <img src={img} alt="Product" />
            <div className="top-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <div className="bottom-info">
                <p><small>Manufracturer : {seller}</small></p>
                <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addToCart'>
                <p className='btn-texts'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;