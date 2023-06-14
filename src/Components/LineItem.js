import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCart, addItem, removeItem } from '../store/cart';
import { createOrder, fetchOrder, updateOrder } from '../store';
import { Link } from 'react-router-dom';

const LineItem = (props)=> {
    const {obj} = props;
    console.log("this is what props is" + obj)
  const dispatch = useDispatch();
  const [qty, setQty] = useState(props.obj.quantity);
  

  const removeFromCart = async () => {
    const product = props.obj.product;
    try {
        dispatch(removeItem({product, quantityRemove: props.obj.quantity}))
    } catch (err) {
      console.log(err)
    }
  };

//   const editQuantity = async ( product, quantity) => {

//     //setQty(e.target.value*1)
//     let difference = Math.abs(quantity - qty)
//     if(quantity > qty) {
//     try {
//         dispatch(removeItem({product, difference}))
//             } catch (err) {
//               console.log(err)
//             }
//           }
//     else {      
//     try {
//       dispatch(addItem({ product, difference}))
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

const editQuantity = () => {
    const product = props.obj.product
    let diff
    console.log(props.obj.quantity, qty)
    if (props.obj.quantity > qty) {
        diff = props.obj.quantity - qty;
        dispatch(removeItem({product, quantityToRemove: diff}));
    } else {
        diff = qty - props.obj.quantity
        dispatch(addItem({product, quantity: diff}));
    }
}



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
             <select value={qty} onChange={(e) => {
                    setQty(e.target.value)
                    editQuantity();
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
             </select>
             |
             <button onClick={() => removeFromCart(props.obj.product, props.obj.quantity)}>Delete</button>
           </div>
           </div>
          )
  }
export default LineItem;