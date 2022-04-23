import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Shop = () => {
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    useEffect(() => {
        fetch('http://localhost:5000/productsCount')
        .then(res => res.json())
        .then(data =>  {
            const pages = Math.ceil(data.count / 10)
            setPageCount(pages)
        })
    },[])


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity++;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }



    return (
        <div className='shop-section'>
            <div style={{margin : '0 40px'}}>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                        .map(index => <button className='page-btn'>{index+1}</button>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} setCart={setCart}>
                    <Link style={{ textDecoration: "none" }} to='/orders'>
                        <button className='clear-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;