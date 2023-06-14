import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchCart, createOrder, fetchOrders, loginWithToken } from '../store';
import { Link } from 'react-router-dom';

const Orders = ()=> {
    const { orders } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginWithToken()); 
     }, [dispatch]);


    const [total, setTotal] = useState([]);
    
      return (
        <div>
          <h1>Thank you for your order</h1>
          {orders.map((order) => (
            <div key={order.id}>
                <p>Order reference number:{order.id}</p>
              <div>
                {order.lineItems.map((merch) => (
                    <div>
                        {console.log(merch)}
                  <p key={merch.product.id}>
                  <img src={merch.product.image} />
                  {/* <p>{merch.product.image}</p> */}
                    <Link to={`${merch.product.id}`}>{merch.product.name}</Link>
                  </p>
                  <p>{merch.quantity}</p>
                  <p>${merch.product.price}</p>
                  {setTotal([...total, (merch.quantity * merch.product.price)])}
                  
                  </div>
                  
                ))}
              </div>
            </div>
          ))}
          
          <hr />
      <p> Total USD </p>
      ${total.reduce((acc, curr) => acc + curr, 0)}

        </div>
      )
    }

//     return (
//         <div>
//         <pre>
//         {
//           JSON.stringify(orders, null, 2)
//         }
//         </pre>
//         </div>
//         )
//   }

  export default Orders;