import { useEffect, useState } from "react";
import { addedCart } from '../utilities/fakedb';

const useCart = () =>{
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = addedCart();
        const savedCart = [];
        const keys = Object.keys(storedCart)

        fetch('https://emma-john-shopping-server.herokuapp.com/productsCart',{
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products => {
            for (const id in storedCart){
            const addedProduct = products.find( product => product._id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart)
        }
        })
    }, [])

    return [cart,  setCart];
}

export default useCart;