import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchCart, createOrder, fetchOrders, } from '../store';
import { Link } from 'react-router-dom';



const Orders = ()=> {
    const { orders } = useSelector(state => state);
   const currentOrder = orders[orders.length - 1].id;
const orderId = orders[0].id;
    
    return (
        <div>
        <pre>
        {
          JSON.stringify(orders, null, 2)
        }
        </pre>
      {currentOrder}
        </div>
        )
  }

  export default Orders;