import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart";

function Product(props) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        try{
            dispatch(addItem({ product: props.obj, quantity}));
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <img src={props.obj.image} alt={props.obj.name} style={{ width: "60%", heigh: "auto" }} />
            <Link to={`/product/${props.obj.id}`}>{props.obj.name}</Link>
            <p>{props.obj.price}</p>
            <button onClick={() => addToCart()}>Add To Cart</button>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value*1)}>
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
        </div>
    )
}

export default Product;