import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    

    return (
        <div className='shop-section'>
            <div className="products-container">
                {
                    products.map( product => <Product 
                        product = {product}
                        key = {product.id}
                        handleAddToCart = {handleAddToCart}
                        ></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;