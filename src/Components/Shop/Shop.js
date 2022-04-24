import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Shop = () => {
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [size, setSize] = useState(10)

    useEffect( () => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productsCount')
        .then(res => res.json())
        .then(data =>  {
            const pages = Math.ceil(data.count / size)
            setPageCount(pages)
        })
    },[size])


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
                        .map(index => <button key={index} onClick={() => setPage(index)} className={page === index ? 'page-btn' : ''} >{index+1}</button>)
                    }
                    <select defaultValue={size} onChange={(e) => setSize(e.target.value)} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
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