import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({product, deleteFromCart}) => {

    const {name, img, price, shipping, id} = product;

    return (
        <div className='review-item'>
            <div className='product-img'>
                <img src={img} alt="product" />
            </div>
            <div className="product-details">
                <h4>{name.length > 20 ? name.slice(0,20) + '...': name}</h4>
                <p>Price: <span>${price}</span></p>
                <p>Shipping Charge: <span>${shipping}</span></p>
            </div>
            <button onClick={() => deleteFromCart(id)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItems;