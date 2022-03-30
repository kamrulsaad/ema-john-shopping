import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    
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
                <Cart cart = {cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;