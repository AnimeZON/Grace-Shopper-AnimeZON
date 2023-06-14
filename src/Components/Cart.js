import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { createOrder, fetchOrder, updateOrder } from '../store';
import { Link } from 'react-router-dom';
import LineItem from './LineItem';
import { use } from 'chai';

const Cart = ()=> {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  const [totalPrice, setTotalPrice] = useState(0);
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    dispatch(fetchCart())
    getTotalPrice();
    // dispatch(createOrder())
  }, [dispatch]);


  // {totalPrice += lineItem.quantity * lineItem.product.price}
function getTotalPrice(){
  let tempPrice = 0;
  let tempCount = 0;
  cart.lineItems.forEach((itm) => {
    tempPrice += itm.quantity * itm.product.price;
    tempCount += itm.quantity;
  })
  setTotalPrice(tempPrice);
  setTotal(tempCount);
}

  return (
    <div>
      <Link to={'/checkoutbutton'}>Check out</Link>
      <h1>Cart</h1>
      <h2>Price</h2>
      <div>
        {cart.lineItems.map((lineItem) => {
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
