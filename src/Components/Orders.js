import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchCart, createOrder, fetchOrders, } from '../store';
import { Link } from 'react-router-dom';



const Orders = ()=> {
    const { orders } = useSelector(state => state);
    
    return (
        <div>
        <pre>
        {
          JSON.stringify(orders, null, 2)
        }
        </pre>
        </div>
        )
  }

  export default Orders;