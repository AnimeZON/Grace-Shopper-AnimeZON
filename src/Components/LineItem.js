import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem, updateItem } from '../store/cart';
import { createOrder, fetchOrder, updateOrder } from '../store';

import { Link } from 'react-router-dom';

const LineItem = (props) => {
  const { obj } = props;
  console.log("this is what props is" + obj)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(props.obj.quantity);


  const removeFromCart = async () => {
    const product = props.obj.product;
    try {
      dispatch(removeItem({ product, quantityRemove: props.obj.quantity }))
      navigate('/cart')
    } catch (err) {
      console.log(err)
    }
  };

  // const updateQuantity = () => {
  //   try {
  //     console.log(qty)
  //     dispatch(updateItem({product: props.obj.product, quantityNew: qty}))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div>
      <img
        src={props.obj.product.image}
        alt={props.obj.product.name}
        style={{ width: "20%", height: "auto" }}
      />
      <Link to={`/product/${props.obj.product.id}`}> {props.obj.product.name} </Link>
      {props.obj.product.price}
      <div>
        <button onClick={() => dispatch(addItem({product: props.obj.product, quantity: 1}))}>+</button>
        <p>{props.obj.quantity}</p>
        <button onClick={() => dispatch(removeItem({product: props.obj.product, quantityToRemove: 1}))}>-</button>

        {/* <select value={qty} onChange={(e) => {
          setQty(e.target.value);
          updateQuantity();
        }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select> */}
        |
        <button onClick={() => removeFromCart()}>Delete</button>
      </div>
    </div>
  )
}
export default LineItem;