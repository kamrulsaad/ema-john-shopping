import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteShoppingCart } from '../../utilities/fakedb';
import React from 'react';
import './Cart.css'

const Cart = ({cart, setCart, children}) => {
    const clearFromCart = () =>{
        deleteShoppingCart();
        setCart([]);
    }

    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;

    for(const product of cart){
        quantity += product.quantity;
        totalPrice  += (product.price * quantity) ;
        shippingCost += product.shipping;
    }
    let tax = totalPrice * 0.1;
    return (
        <div className='cart'>
            <h4> Order Summary </h4>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping charge: ${shippingCost}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className="grand-total">
                Grand Total: ${(totalPrice + tax + shippingCost).toFixed(2)} 
            </h6>
            <button onClick= {clearFromCart} className='clear-btn'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;