import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { logout } from '../store';
import { Link } from 'react-router-dom';

const Cart = ()=> {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  const { auth } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchCart())
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.lineItems.map((lineItem) => {
          return (
            <div>
              <img
                src={lineItem.product.image}
                alt={lineItem.product.name}
                style={{ width: "20%", height: "auto" }}
              />
              <Link to={`/product/${lineItem.product.id}`}> {lineItem.product.name} </Link>
               {lineItem.product.price} 
            </div>
          )
          })}
        </div> 
    </div>
  );
};

export default Cart;
