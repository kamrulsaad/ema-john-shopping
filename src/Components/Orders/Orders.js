import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import './Order.css'

const Orders = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const deleteFromCart = id => {
    setCart(cart.filter(pd => pd._id !== id));
    removeFromDb(id);
  }

  return (
    <div className="shop-section">
      <div className="review-container">
        {
          cart.map(product => <ReviewItems
            key={product._id}
            product={product}
            deleteFromCart={deleteFromCart}></ReviewItems>)
        }
      </div>
      <div className="review-cart">
        <Cart cart={cart} setCart={setCart}
        >
          <Link style={{ textDecoration: "none" }} to='/inventory' >
            <button className="clear-btn">Proceed to CheckOut</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
