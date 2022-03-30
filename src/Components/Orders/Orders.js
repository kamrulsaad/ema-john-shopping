import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);

  return (
    <div className="shop-section">
      <div className="products-container">
        {
            cart.map(product => <ReviewItems 
            key={product.id}
            product ={product}></ReviewItems>)
        }
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
