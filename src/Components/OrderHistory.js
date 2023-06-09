import React, {useState, useEffect} from 'react';
import { useDispatch, useSele, useSelector } from 'react-redux';
import  {fetchOrders, loginWithToken} from '../store'

const OrderHistory = () => {
  const dispatch = useDispatch();
  const {orders, auth } = useSelector((state => state))
  
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(loginWithToken()); 
 }, [dispatch]);

  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p> Total: {order.total}</p>
          <ul>
            {order.lineItems.map((merch) => (
              <li key={merch.id}>
                <Link to={`${merch.id}`}>{merch.product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}


export default OrderHistory;