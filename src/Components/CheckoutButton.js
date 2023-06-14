import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder, fetchCart, updateOrder } from '../store';
import { Link, useNavigate } from 'react-router-dom';


const CheckoutButton = ()=> {
  const { cart,} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  return (
    <div>
      <h1>Cart</h1>
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
      <pre>
        {
          JSON.stringify(cart, null, 2)
        }
      </pre>
    </div>
  );
};

export default CheckoutButton;