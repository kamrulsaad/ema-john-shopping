import React from 'react';
import './Product.css'

const Product = (props) => {
    const{img, name, price, seller, ratings} = props.product;
    console.log(props.product)
    return (
        <div className='card'>
            <img src={img} alt="Products" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufracturer: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='add-cart-btn'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;