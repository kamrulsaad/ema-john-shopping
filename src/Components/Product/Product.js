import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const{img, name, price, seller, ratings} = product;
    return (
        <div className='card'>
            <img src={img} alt="Products" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <div className='bottom-texts'>
                    <p><small>Manufracturer: {seller}</small></p>
                    <p><small>Ratings: {ratings} star</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;