import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addedCart, addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = addedCart();
        const savedProduct = [];
        for(const id in storedCart){
            const addedProduct = products.find( product => product.id === id );
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct);
    }, [products])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find( product => product.id === selectedProduct.id );
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity++;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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