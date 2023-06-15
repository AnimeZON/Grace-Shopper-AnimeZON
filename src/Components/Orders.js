import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchCart, createOrder, fetchOrders, loginWithToken } from '../store';
import { Link } from 'react-router-dom';

const Orders = ()=> {
    const { orders } = useSelector(state => state);
    const dispatch = useDispatch();
    const [total, setTotal] = useState([]);

    useEffect(() => {
        dispatch(loginWithToken()); 
        dispatch(fetchCart())
        .then((cart) => {
            const orderTotal = cart.lineItems.reduce(
                (acc, curr) => acc + curr.quantity * curr.product.price, 0);
                setTotal(orderTotal);
        })
        .catch((error) => {
            console.log(error);
        });
     }, [dispatch]);


    
    
      return (
        <div>
          <h1>Thank you for your order</h1>
          {orders.map((order) => (
            <div key={order.id}>
                <p>Order reference number:{order.id}</p>
              <div>
                {order.lineItems.map((merch) => (
                    <div key={merch.product.id}>
                  <p>
                  <img src={merch.product.image} alt={merch.product.name} style={{ width: "40%", heigh: "auto" }} />

                    <Link to={`${merch.product.id}`}>{merch.product.name}</Link>
                  </p>
                  <p>{merch.quantity}</p>
                  <p>${merch.product.price}</p>
                  
                  </div>
                  
                ))}
              </div>
            </div>
          ))}
          
          <hr />
      <p> Total USD: ${total} </p>

        </div>
      )
    }

  export default Orders;