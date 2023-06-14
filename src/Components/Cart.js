import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { createOrder, fetchOrder, updateOrder } from '../store';
import { Link } from 'react-router-dom';
import LineItem from './LineItem';

const Cart = ()=> {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  

  useEffect(() => {
    dispatch(fetchCart())
    // dispatch(createOrder())
  }, []);

let total = 0;
let totalPrice =0;
  

  return (
    <div>
      <Link to={'/checkoutbutton'}>Check out</Link>
      <h1>Cart</h1>
      <h2>Price</h2>
      <div>
        {cart.lineItems.map((lineItem) => {
          const [quantity, setQuantity] = useState(lineItem.quantity);
          {total += lineItem.quantity}
          {totalPrice += lineItem.quantity * lineItem.product.price}
          return (
            <LineItem key={lineItem.id} obj={lineItem} />
          )
          })}
        </div> 
        Subtotal: {`(${total} items):$${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
    </div>
  );
};

export default Cart;
