import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchOrders } from '../store';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Orders = ()=> {
    const { orders } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        dispatch(fetchOrders())
       
     }, [id, dispatch]);

     const order = orders.find((order) => order.id === id);
    
     function getTotalPrice() {
      let tempPrice = 0;
      order.lineItems.forEach((itm) => {
        tempPrice += itm.quantity * itm.product.price;
      })
      return tempPrice;
    }

    let totalPrice = getTotalPrice();
      return (
        <div>
          <h1>Thank you for your order</h1>
    
          <p>Order reference number:{order.id}</p>
          <div>
            {order.lineItems.map((item) => {
              return (
                <div key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} style={{ width: "40%", height: "auto" }} />
                <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                <p>{item.quantity}</p>
                <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              )
            } )}
<p>Total USD: {`$${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
          </div>
        </div>
      )
    }

  export default Orders;
