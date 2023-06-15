import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchOrders, loginWithToken} from '../store'
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const {orders, auth } = useSelector((state => state))
  
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(loginWithToken()); 
 }, [dispatch]);

//  const order = orders.find((order) => order.id === orderId);
//  const count = order.lineItems.reduce((acc, item) => {
//   return acc + item.quantity;
// }, 0)

  return (
    <div className='history__container'>

      <div className='history__title'>
        <h1>Order History</h1>
      </div>

      <div>
        {orders.map((order) => (
          <div className='orderHistory__Card'>
            <div className='orderHistory__right' key={order.id}>
            <p>ORDER PLACED {order.createdAt.slice(0,10)}</p>
            <p>TOTAL ${order.total}</p>
            <p>ORDER # {order.id}</p>
            
            <div className='orderHistory__left'>
              {order.lineItems.map((itm) => (
                <li key={itm.product.id}>
                  <img src={itm.product.image} alt={itm.product.description} />
                  <Link to={`${itm.product.id}`}>{itm.product.description}</Link>
                </li>
              ))}
            </div><br />

          </div>
          </div>
          
        ))}
      </div>
      
    </div>
  )
}


export default OrderHistory;