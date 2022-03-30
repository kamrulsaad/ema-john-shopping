import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import './Order.css'

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteFromCart = id => {
    setCart(cart.filter(pd => pd.id !== id));
    removeFromDb(id);
  }

  return (
    <div className="shop-section">
      <div className="review-container">
        {
            cart.map(product => <ReviewItems 
            key={product.id}
            product ={product}
            deleteFromCart={deleteFromCart}></ReviewItems>)
        }
      </div>
      <div className="review-cart">
          <Cart cart={cart} 
          ></Cart>
      </div>
    </div>
  );
};

export default Orders;
