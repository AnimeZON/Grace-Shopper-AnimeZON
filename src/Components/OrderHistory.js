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

// let total = getTotalCount();
// let totalPrice = getTotalPrice();

// function getTotalPrice() {
//   let tempPrice = 0;
//   orders.lineItems.forEach((itm) => {
//     tempPrice += itm.quantity * itm.product.price;
//   })
//   return tempPrice;
// }

// function getTotalCount() {
//   let tempCount = 0;
//   orders.lineItems.forEach((itm) => {
//     tempCount += itm.quantity;
//   })
//   return tempCount
// }

  return (
    <div className='history__container'>

      <div className='history__title'>
        <h1>Order History</h1>
      </div>

      <div>
        {orders.map((order) => (
          <div className='orderHistory__Card'>
            <div className='orderHistory__right' key={order.id}>
            <p>ORDER PLACED: {new Date(order.createdAt.slice(0, 10)).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
              })}
            </p>
            {/* <p>TOTAL ${order.total}</p> */}
            ORDER # <Link to={`/orders/${order.id}`}> {order.id} </Link>
            
            <div className='orderHistory__left'>
              {order.lineItems.map((itm) => (
                <li key={itm.product.id}>
                  <img src={itm.product.image} alt={itm.product.description} />

                  <Link to={`/product/${itm.product.id}`}>{itm.product.name}</Link>


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