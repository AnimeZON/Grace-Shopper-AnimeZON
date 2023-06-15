import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { createOrder, fetchOrder, updateOrder } from '../store';
import { Link } from 'react-router-dom';
import LineItem from './LineItem';
import { use } from 'chai';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchCart())
    // dispatch(createOrder())
  }, [dispatch]);

  let total = getTotalCount();
  let totalPrice = getTotalPrice();

  // {totalPrice += lineItem.quantity * lineItem.product.price}
  function getTotalPrice() {
    let tempPrice = 0;
    cart.lineItems.forEach((itm) => {
      tempPrice += itm.quantity * itm.product.price;
    })
    return tempPrice;
  }

  function getTotalCount() {
    let tempCount = 0;
    cart.lineItems.forEach((itm) => {
      tempCount += itm.quantity;
    })
    return tempCount
  }


  return (
    <div>
      {/* <Link to={'/checkoutbutton'}>Check out</Link> */}
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
        <button 
        onClick={
          async()=> {
            // await dispatch(updateOrder());
            await dispatch(createOrder());
            await dispatch(fetchCart());
            navigate('/orders');
          }
        }
      >Proceed to checkout</button>
        })}
      </div>
      Subtotal: {`(${total} items):$${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}

    </div>
  );
};

export default Cart;
