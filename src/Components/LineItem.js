import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/cart';
import { Link } from 'react-router-dom';


const LineItem = (props)=> {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(props.obj.quantity);

  const removeFromCart = async ({product, quantityToRemove}) => {
    console.log({product, quantityToRemove})
    try {
dispatch(removeItem({product, quantityToRemove}))
    } catch (err) {
      console.log(err)
    }
  };

  if(quantity > props.quantity)
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
             <select value={quantity} onChange={(e) => setQuantity(e.target.value)}> Qty:
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
             <button onClick={() => removeFromCart({product , quantityToRemove})}>Delete</button>
           </div>
        Subtotal: {`(${total} items):$${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
    </div>
  );
};

export default LineItem;
