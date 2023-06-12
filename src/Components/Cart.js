import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Cart = ()=> {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  

  useEffect(() => {
    dispatch(fetchCart())
  }, []);

let total = 0;
let totalPrice =0;

  const removeFromCart = async ({product, quantityToRemove}) => {
    try {
dispatch(removeItem({product, quantityToRemove}))
    } catch (err) {
      console.log(err)
    }
  };

  const editQuantity = async (e,product, qty, quantity) => {
    let qty = 0;
    (e) => setQuantity(e.target.value)
    try {
      dispatch(addItem({ product, quantity}))
    } catch (err) {
      console.log(err)
    }
  };
  

  return (
    <div>
      <h1>Cart</h1>
      <h2>Price</h2>
      <div>
        {cart.lineItems.map((lineItem) => {
          const [quantity, setQuantity] = useState(lineItem.quantity);
          {total += lineItem.quantity}
          {totalPrice += lineItem.quantity * lineItem.product.price}
          return (
            <div>
              <img
                src={lineItem.product.image}
                alt={lineItem.product.name}
                style={{ width: "20%", height: "auto" }}
              />
              <Link to={`/product/${lineItem.product.id}`}> {lineItem.product.name} </Link>
               {lineItem.product.price} 
             <div>
             <select value={quantity} onChange={}> Qty:
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
             </select>
             |
             <button onClick={() => removeFromCart(lineItem.product, lineItem.quantity)}>Delete</button>
           </div>
           </div>
          )
          })}
        </div> 
        Subtotal: {`(${total} items):$${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
    </div>
  );
};

export default Cart;
