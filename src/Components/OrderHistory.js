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

 const order = orders.find((order) => order.id === orderId);
 const count = order.lineItems.reduce((acc, item) => {
  return acc + item.quantity;
}, 0)

  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>ORDER PLACED {order.createdAt.slice(0,10)}</p>
          <p>TOTAL ${order.total}</p>
          <p>ORDER #{order.id}</p>
          <div>
            {order.lineItems.map((itm) => (
              <li key={itm.product.id}>
                <img src={itm.product.image} alt={itm.product.description} />
                <Link to={`${itm.product.id}`}>{itm.product.description}</Link>
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


export default OrderHistory;