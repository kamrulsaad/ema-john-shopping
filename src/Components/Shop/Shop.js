import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find( product => product._id === selectedProduct._id );
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity++;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
   
    

    return (
        <div className='shop-section'>
            <div className="products-container">
                {
                    products.map( product => <Product 
                        product = {product}
                        key = {product._id}
                        handleAddToCart = {handleAddToCart}
                        ></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart} setCart={setCart}>
                    <Link style={{textDecoration : "none"}} to='/orders'>
                        <button className='clear-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;